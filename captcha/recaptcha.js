const fetch = require('node-fetch');
const rp = require('request-promise-native');
const { URLSearchParams } = require('url');

// exports.verifyCaptcha = async function verifyCaptcha(token, remoteip) {
//     const url = 'https://www.google.com/recaptcha/api/siteverify';
//     const body = new URLSearchParams();
//
//     body.append('secret', process.env.SECRET_KEY);
//     body.append('response', token);
//     body.append('remoteip', remoteip);
//     const options = {
//         'headers': { 'content-type': 'application/x-www-form-urlencoded' },
//         'method': 'POST',
//         body
//     };
//     return fetch(url, options).then(res => res.json());
// };

exports.verifyCaptcha = async function verifyCaptcha(token, remoteip) {
    const uri = 'https://www.google.com/recaptcha/api/siteverify';
    const options = {
        'uri': uri,
        'method': 'POST',
        'form': {
            'secret': process.env.SECRET_KEY,
            'response': token,
            'remoteip': remoteip
        }
    };
    return rp(options)
        .then((res) => JSON.parse(res));
};