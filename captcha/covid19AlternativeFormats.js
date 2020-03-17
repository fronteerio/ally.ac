const _ = require('lodash');
const crypto = require('crypto');

const { verifyCaptcha } = require('./recaptcha');

const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

const bucketName = 'ally-covid19-files';
const bucketRegion = 'us-east-1';

const extensionMimeTypeMapping = {
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'html': 'text/html',
    'pdf': 'application/pdf',
    'ppt': 'application/vnd.ms-powerpoint',
    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
};
const ERRORS = {
    'invalidCaptcha': 'invalid-captcha',
    'missingCaptchaToken': 'missing-captcha-token',
    'missingFilename': 'missing-filename',
    'unsupportedContentType': 'unsupported-content-type'
};

exports.handler = async (event, context) => {
    const remoteip = _.get(event, ['requestContext', 'identity', 'sourceIp']);
    const data = JSON.parse(event.body);
    const token = findParamValue(data, 'g-recaptcha-response');
    if (!token) {
        return generateResponse(400, ERRORS.missingCaptchaToken);
    }

    const fileName = findParamValue(data, 'filename');
    if (!fileName) {
        return generateResponse(400, ERRORS.missingFilename);
    } else if (!getContentTypeForFileName(fileName)) {
        return generateResponse(400, ERRORS.unsupportedContentType);
    }

    const verified = await verifyCaptcha(token, remoteip);
    //const verified = {'success': true};

    if (verified.success !== true) {
        return generateResponse(400, ERRORS.invalidCaptcha);
    } else {
        // The file should be uploaded in this folder
        const folder = getFolder();
        const policy = generatePolicy(folder, fileName);
        const signature = signPolicy(policy);

        const form = {
            'key': `${folder}/${fileName}`,
            'acl': 'public-read',
            'Content-Type': getContentTypeForFileName(fileName),
            'success_action_status': '200',
            'x-amz-server-side-encryption': 'AES256',
            'X-Amz-Credential': getAmazonCredential(),
            'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
            'X-Amz-Date': getAmazonDate(),
            'Policy': policy,
            'X-Amz-Signature': signature
        };

        return generateResponse(200, {form});
    }
};

exports.handler({
    'body': '[{"name": "g-recaptcha-response", "value": "123"}, {"name": "filename", "value": "alt_text_filename.pdf"}]',
    'requestContext': {'identity': {'sourceIp': '127.0.0.1'}}
});

function findParamValue(data, key) {
    return _.chain(data)
        .filter({'name': key})
        .map('value')
        .first()
        .value();
}

function signPolicy(policy) {
    const secretAccessKey = process.env.COVID19_SECRET;

    const kDate = crypto.createHmac('sha256', 'AWS4' + secretAccessKey).update(getDateStamp()).digest('');
    const kRegion = crypto.createHmac('sha256', kDate).update(bucketRegion).digest('');
    const kService = crypto.createHmac('sha256', kRegion).update('s3').digest('');
    const kSigning = crypto.createHmac('sha256', kService).update('aws4_request').digest('');
    var signature = crypto.createHmac('sha256', kSigning).update(policy).digest('hex');
    return signature;
}

function generatePolicy(folder, fileName) {
    // The upload should happen nearly immediately after this request gets handled
    const expires = new Date(Date.now() + 2 * 60 * 1000);

    const policy = {
        "expiration": expires.toISOString(),
        "conditions": [
            {"bucket": bucketName},
            ["starts-with", "$key", folder],
            {"acl": "public-read"},
            {'Content-Type': getContentTypeForFileName(fileName)},
            {"success_action_status": '200'},
            {"x-amz-server-side-encryption": "AES256"},
            {"x-amz-credential": getAmazonCredential()},
            {"x-amz-algorithm": "AWS4-HMAC-SHA256"},
            {"x-amz-date": getAmazonDate()}
        ]
    };
    return Buffer.from(JSON.stringify(policy), 'utf-8').toString('base64');
}

/** Returns a pseudo-random folder (sliced by time) where the file can be stored */
function getFolder() {
    const randomId = _.range(0, 16).map(() => _.sample(CHARS)).join('');
    const now = new Date();
    return `${now.getFullYear()}/${padN(now.getMonth() + 1)}/${padN(now.getDate())}/${padN(now.getHours())}/${padN(now.getMinutes())}/${randomId}`;
}

/** Given a filename, return an appropriate content-type value */
function getContentTypeForFileName(filename) {
    const extension = filename.toLowerCase().split('.').pop();
    if (extensionMimeTypeMapping[extension]) {
        return extensionMimeTypeMapping[extension];
    } else {
        return null;
    }
}

function getAmazonCredential() {
    const awsKey = process.env.COVID19_KEY;
    return `${awsKey}/${getDateStamp()}/${bucketRegion}/s3/aws4_request`
}

function getAmazonDate() {
    return `${getDateStamp()}T000000Z`
}

function getDateStamp() {
    const now = new Date();
    return `${now.getFullYear()}${padN(now.getMonth() + 1)}${padN(now.getDate())}`;
}

function padN(n) {
    return _.padStart(n.toString(), '2', '0');
}

function generateResponse(statusCode, body) {
    console.log(JSON.stringify(body, null, 4));
    return {
        statusCode,
        'headers': {
            'Access-Control-Allow-Origin': 'ally.ac'
        },
        'body': statusCode === 200 ? JSON.stringify(body) : body
    };
};
