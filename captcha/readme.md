# Demo request captcha validator
Checks the form captcha on '/demo.html'. 
It only submits to form to Eloqua if the captcha is valid.


reCAPTCHA v2 is used. Security preferences (easiest for users - Most secure) and other settings can be configured in the Captcha admin panel:
https://www.google.com/recaptcha/admin/site/346536634


## Deployment:
```console
$ npm run build
```
Then upload the zip file in /dist to the aws lambda.

The following Environment values should be configured:
- `ELOQUA_URL`: the eloqua endpoint which expects the form data
- `SECRET_KEY`: the secret captcha key, as provided in available in the Google captcha admin console 

The API Gatway should have CORS enabled (for now). 