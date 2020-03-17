const _ = require('lodash');

const { submitToEloqua } = require('./eloqua');
const { verifyCaptcha } = require('./recaptcha');

exports.handler = async (event, context) => {
    const remoteip = _.get(event, ['requestContext', 'identity', 'sourceIp']);
    const data = JSON.parse(event.body);
    let token;
    try {
        token = _.remove(data, {'name': 'g-recaptcha-response'})[0].value;
    } catch(e) {
        return generateResponse(400, 'no token found');
    }

    const verified = await verifyCaptcha(token, remoteip);

    if (verified.success === true) {
        const eloquaSubmission = await submitToEloqua(data);
        if (eloquaSubmission.status == 200) {
            return generateResponse(200, 'submitted');
        } else {
            return generateResponse(400, 'failed to submit form');
        }
    } else {
        return generateResponse(400, 'invalid captcha token');
    }
};

function generateResponse(statusCode, body) {
    return {
        statusCode,
        'headers': {
            'Access-Control-Allow-Origin': 'ally.ac'
        },
        'body': JSON.stringify(body)
    };
};
