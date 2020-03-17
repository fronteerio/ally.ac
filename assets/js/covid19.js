(function() {

    var ERRORS = {
        // API Errors
        'invalidCaptcha': 'invalid-captcha',
        'missingCaptchaToken': 'missing-captcha-token',
        'missingFilename': 'missing-filename',
        'unsupportedContentType': 'unsupported-content-type',

        // UI State errors
        'fileNotSelected': 'no-file-selected',
        'captchaNotChecked': 'captcha-not-selected',
        'somethingWentWrong': 'something-went-wrong'
    };

    var selectedFile = null;

    $(document).ready(function() {
        resetForm();

        /** Invoked by recaptcha when its state changed (button selected, expires, ...) */
        window.recaptchaCalback = function() {
            setButtonDisabledState();
        };

        /** Invoked when a file gets selected */
        $('#covid19-af-form input[type="file"]').on('change', function() {
            var file = $(this)[0].files[0];
            if (file && file.name) {
                selectFile(file);
            }
        });

        $('#covid19-af-form .drop-area')
            .on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
                e.preventDefault();
                e.stopPropagation();
            })
            .on('dragover dragenter', function() {
                $(this).addClass('drag-on');
            })
            .on('dragleave dragend drop', function() {
                $(this).removeClass('drag-on');
            })
            .on('drop', function(e) {
                const file = [...e.originalEvent.dataTransfer.items].map((item) => item.getAsFile())[0];
                if (file && file.name) {
                    // The file is only assignable from this stack :shrug:
                    selectFile(file);
                }
            });

        $('#covid19-af-form').on('submit', function(e) {
            if (!e.isDefaultPrevented()) {
                // If the file was already uploaded, we can simply trigger again
                var url = $('#covid19-af-form #trigger').attr('data-ally-invoke-direct-file');
                if (url) {
                    triggerAlternativeFormats(url);
                } else if (!selectedFile) {
                    setValidationErrors([ERRORS.fileNotSelected]);
                } else {
                    // Upload the file
                    var formData = $(this).serializeArray();
                    formData.push({'name': 'filename', 'value': selectedFile.name});

                    // TODO: Exchange for S3 signature
                    $.ajax({
                        'url': 'https://4mctrq9vy0.execute-api.us-east-1.amazonaws.com/covid19',
                        'method': 'POST',
                        'data': JSON.stringify(formData),
                        'contentType': "application/json; charset=utf-8",
                        'success': function (data) {
                            try {
                                data = JSON.parse(data);
                                uploadFile(data);
                            } catch (err) {
                                // Set fail
                                setValidationErrors([ERRORS.somethingWentWrong])
                            }
                        },
                        'error': function(err) {
                            if (err.status === 400) {
                                setValidationErrors([err.responseText]);
                            } else if (err.status === 500) {
                                setValidationErrors([ERRORS.somethingWentWrong]);
                            }
                        }
                    });
                }
            }
            return false;
        });
    });

    function uploadFile(response) {
        // Start the upload
        $('#covid19-af-form .drop-area').addClass('is-uploading');

        var bucketUrl = 'https://ally-covid19-files.s3.amazonaws.com';
        var fd = new FormData();
        Object.keys(response.form).forEach(function(key) {
            fd.append(key, response.form[key]);
        });
        fd.append('file', selectedFile);

        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', function(progress) {
            if (progress.lengthComputable) {
                var percent = progress.loaded / progress.total;
                $('#covid19-af-form .drop-area .progress .progress-bar').css({
                    'width': Math.floor(percent * 50) + '%'
                });
            }
        }, false);
        xhr.addEventListener('load', function() {
            if (this.status === 200) {
                var keyParts = response.form.key.split('/');
                keyParts.pop();
                var url = bucketUrl + '/' + keyParts.join('/') + '/' + selectedFile.name;
                triggerAlternativeFormats(url)
            }
        }, false);
        xhr.open('POST', 'https://ally-covid19-files.s3.amazonaws.com/', true);
        xhr.send(fd);
    }

    function triggerAlternativeFormats(url) {
        var $trigger = $('#covid19-af-form #trigger');
        $trigger.attr('data-ally-invoke-direct-file', url);
        $trigger[0].click();

        // The AF takes a second to load, leave the progress bar visible for a while
        setTimeout(function() {
            $('#covid19-af-form .drop-area').removeClass('is-uploading');
        }, 1000);
    }

    function resetForm() {
        selectedFile = null;
        setValidationErrors([]);
        setButtonDisabledState();
        $('.drop-area')
            .removeClass('is-uploading')
            .removeClass('file-selected')
            .find('.filename').text('');
        $('#covid19-af-form #trigger').attr('data-ally-invoke-direct-file', '');
    }

    function selectFile(file) {
        resetForm();
        selectedFile = file;
        var icon = getSupportedFileType(file.name);
        if (icon) {
            var $dropArea = $('.drop-area');
            $dropArea.addClass('file-selected');
            $dropArea.find('.filename').text(file.name);
            $dropArea.find('img.fileicon').attr('src', icon);
            $('.g-recaptcha').focus();
        } else {
            setValidationErrors([ERRORS.unsupportedContentType]);
        }
    }

    /** Enable or disable the upload button */
    function setButtonDisabledState() {
        if (selectedFile && selectedFile.name && getCaptchaToken()) {
            $('#covid19-af-form button').removeAttr('disabled');
        } else {
            $('#covid19-af-form button').attr('disabled', 'disabled');
        }
    }

    /** Get the recaptcha token, if any */
    function getCaptchaToken() {
        if (grecaptcha && grecaptcha.getResponse && grecaptcha.getResponse()) {
            return grecaptcha.getResponse();
        } else {
            return null;
        }
    }

    function setValidationErrors(errors) {
        errors = errors || [];

        // Clear any previous errors
        $('#covid19-af-form .validation-error').hide();

        // Enable the new errors, if any
        errors.forEach(function(err) {
            $('#covid19-af-form .validation-error.error-' + err).show();
        });
    }

    /** Given a filename, return an appropriate content-type value */
    function getSupportedFileType(filename) {
        var extension = filename.toLowerCase().split('.').pop();
        var extensionIconMapping = {
            'doc': '/assets/img/mime-types/icon-mimetype-application-doc.svg',
            'docx': '/assets/img/mime-types/icon-mimetype-application-docx.svg',
            'html': '/assets/img/mime-types/icon-mimetype-text-html.svg',
            'pdf': '/assets/img/mime-types/icon-mimetype-application-pdf.svg',
            'ppt': '/assets/img/mime-types/icon-mimetype-application-ppt.svg',
            'pptx': '/assets/img/mime-types/icon-mimetype-application-pptx.svg'
        };
        if (extensionIconMapping[extension]) {
            return extensionIconMapping[extension];
        } else {
            return null;
        }
    }
})();
