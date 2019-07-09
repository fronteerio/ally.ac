const _ = require('lodash');
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

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

const verifyCaptcha = async (token, remoteip) => {
    const url = 'https://www.google.com/recaptcha/api/siteverify';
    const body = new URLSearchParams();
    body.append('secret', process.env.SECRET_KEY);
    body.append('response', token);
    body.append('remoteip', remoteip);
    const options = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        method: 'POST',
        body
    };
    return fetch(url, options).then(res => res.json());
};

const submitToEloqua = async (data) => {
    const url = process.env.ELOQUA_URL;
    const body = new URLSearchParams();
    data.forEach(element => {
        body.append(element.name, element.value);
    });
    const options = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        method: 'POST',
        body
    };
    return fetch(url, options);
};

const generateResponse = (statusCode, body) => {
    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "ally.ac"
        },
        'body': JSON.stringify(body)
    };
};
