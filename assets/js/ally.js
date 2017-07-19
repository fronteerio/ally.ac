$(document).on('ready', function() {

    // Set the UTM parameters in the form
    var utmParameters = ['utm_source', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign', 'campaignID'];
    var utmQs = [];
    for (var i = 0; i < utmParameters.length; i++) {
        var utmValue = getParameterByName(utmParameters[i]);
        if (utmValue) {
            $('input[name="' + utmParameters[i] + '"]').val(utmValue);
            utmQs.push([utmParameters[i], utmValue]);
        }
    }

    // Re-write all links so that they contain the UTM paramers
    $('a').each(function() {
        var $a = $(this);
        var link = $a.attr('href');
        if (link) {
            // Get the query string in the link (if any)
            var qsString = '';
            var questionMarkParts = link.split('?');
            if (questionMarkParts.length > 1) {
                qsString = questionMarkParts[1];
            }

            // Get the hash in the link (if any)
            var hashString = '';
            var hashParts = link.split('#');
            if (hashParts.length > 1) {
                hashString = hashParts[1];
            }


            // Start with the base URL
            var url = questionMarkParts[0].split('#')[0];

            // Create an array of the link's query string.
            // e.g., name=Jack&age=12 becomes [ ['name', 'jack'], ['age', '21'] ]
            var qs = qsString
                .split('&')
                .filter(function(s) { return s; })
                .map(function(s) { return s.split('='); });

            // Add the UTM parameters (if any) to the query string
            qs = qs.concat(utmQs);

            // Append the new query string (including UTM params) to the base URL
            if (qs.length > 0) {
                url += '?';
                url += qs.map(function(s) { return s.join('='); }).join('&');
            }

            // Tack on the hash if there was any
            if (hashString) {
                url += '#';
                url += hash;
            }
            $a.attr('href', url);
        }
    });

    /**
     * Submit the contact form when valid
     */
    $('#demo-form').on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            var formData = $(this).serializeArray();

            var isValid = true;
            var requiredFields = ['emailAddress', 'firstName', 'lastName', 'primaryRole', 'company', 'country',
                'industry', 'businessPhone'];
            for (var i = 0; i < requiredFields.length; i++) {
                if (!formContains(formData, requiredFields[i])) {
                    isValid = false;
                    $('form .form-control[name="' + requiredFields[i] + '"]').parent().addClass('has-error');
                } else {
                    $('form .form-control[name="' + requiredFields[i] + '"]').parent().removeClass('has-error');
                }
            }

            if (isValid) {
                $.ajax({
                    'url': 'https://s2376.t.eloqua.com/e/f2',
                    'method': 'POST',
                    'data': $(this).serialize(),
                    'success': requestDemoSubmitted,
                    'error': function(err) {
                        window.alert('An error has occurred. Please try again later.')
                    }
                });
            }

            return false;
        }
    });

    /**
     * Show the form submit success message
     */
    function requestDemoSubmitted() {
        $('#demo-form').hide();
        $('#demo-success').show().focus();
        _dcq.push(['identify', {
            'email': $.trim($('#form-email').val()),
            'tags': ['requested_demo']
        }]);
    };

    /**
     * Check whether a serialized form has an entry
     */
    function formContains(data, name) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].name === name && data[i].value) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get a query string parameter's value
     *
     * @param  {String}     name    The name of the query string parameter to get
     * @return {String}             The query string parameter's value or null in case it could not be found
     */
    function getParameterByName(name, url) {
        name = name.replace(/[\[\]]/g, "\\$&");
        var url = window.location.href;
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

});
