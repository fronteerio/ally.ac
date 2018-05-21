$(document).on('ready', function() {

    // Array of countries where opt in should be pre-checked
    var optOutCountries = [
        'Anguilla',
        'Antigua and Barbuda',
        'Argentina',
        'Aruba',
        'Barbados',
        'Belize',
        'Bermuda',
        'Bolivia',
        'Bonaire',
        'Brazil',
        'Cayman Islands',
        'Chile',
        'Colombia',
        'Costa Rica',
        'Jamaica',
        'Cuba',
        'Curacao',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'El Salvador',
        'Falkland Islands (malvinas)',
        'French Guiana',
        'Grenada',
        'Guadeloupe',
        'Guatemala',
        'Guyana',
        'Haiti',
        'Honduras',
        'Martinique',
        'Mexico',
        'Montserrat',
        'Nicaragua',
        'Panama',
        'Paraguay',
        'Peru',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Martin',
        'St Vincent and the Grenadines',
        'Sth Georgia & Sth Sandwich Is',
        'Suriname',
        'The Bahamas',
        'Trinidad and Tobago',
        'Turks and Caicos Islands',
        'Uruguay',
        'Venezuela',
        'Virgin Islands (British)',
        'USA',
        'US Minor Outlying Islands'
    ];

    // Whether the user manually opted in
    var manuallyOptedIn = false;

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

    $('#form-country').on('change', function() {
        // Reset state options
        $('#demo-form #state').hide();
        $('#demo-form #form-state option').hide();

        // Optionally show state field
        if (selectedCountryHasRequiredStateField()) {
            var country = $(this).val();
            $('#demo-form #state').show();
            $('#demo-form #form-state option[data-country="' + country + '"]').show();
        }
    });

    /**
     * Update Opt-In when country is updated, unless user has already made a choice
     */
    $('#demo-form [name="country"]').change(function() {
        var country = $('[name="country"]').val();
        if (!manuallyOptedIn) {
            if ($.inArray(country, optOutCountries) > -1) {
                $('[name="OptIn"]').prop('checked', true);
            } else {
                $('[name="OptIn"]').prop('checked', false);
            }
        }
    });

    /**
     * Ensure Opt-In doesn't get changed automatically after the user makes a choice
     */
    $('#demo-form [name="OptIn"]').change(function() {
        manuallyOptedIn = true;
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
            if (selectedCountryHasRequiredStateField()) {
                requiredFields.push('StateorProvince');
            }
            for (var i = 0; i < requiredFields.length; i++) {
                if (!formContains(formData, requiredFields[i])) {
                    isValid = false;
                    $('form .form-control[name="' + requiredFields[i] + '"]').parent().addClass('has-error');
                } else {
                    $('form .form-control[name="' + requiredFields[i] + '"]').parent().removeClass('has-error');
                }
            }

            if (isValid) {
                var data = $(this).serialize();
                if (!selectedCountryHasRequiredStateField()) {
                    data = data.replace('StateorProvince=', '');
                }
                $.ajax({
                    'url': 'https://s2376.t.eloqua.com/e/f2',
                    'method': 'POST',
                    'data': data,
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
     * Whether the selected country also requires the user to input the state they're from
     *
     * @return {Boolean}    `true` if the country requires a state entry
     */
    function selectedCountryHasRequiredStateField() {
        var country = $('#demo-form #form-country').val();
        return (country === 'USA' || country === 'Canada' || country === 'Australia');
    }

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

    /**
     * Smooth scrolling
     */

    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll. Subtract the height of the navigational header
            // so that the target element starts just below the navigation.
            var headerNavHeight = $('nav ul').height();
            var props = {
                'scrollTop': $(hash).offset().top - headerNavHeight
            };
            $('html, body').animate(props, 800, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    /**
     * Sticky heading
     */

    window.onscroll = function() {myFunction()};

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

});

