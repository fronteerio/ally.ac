#!/usr/bin/env bash

rm -r -f ./dist/* && mkdir -p ./dist
zip -r ./dist/captchaValidator.zip ./*.js ./node_modules/