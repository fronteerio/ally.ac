const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

exports.submitToEloqua = async function submitToEloqua(data) {
    const url = process.env.ELOQUA_URL;
    const body = new URLSearchParams();
    data.forEach(element => {
        body.append(element.name, element.value);
    });
    const options = {
        'headers': { 'content-type': 'application/x-www-form-urlencoded' },
        'method': 'POST',
        body
    };
    return fetch(url, options);
};
