$(document).on('ready', function() {

    /**
     * Show the form submit success message
     */
    var requestDemoSubmitted = function() {
        $('.request-demo-component').toggleClass('hide');
        $('#request-demo-success').focus();
        _dcq.push(['identify', {
            'email': $.trim($('#request-demo-email').val()),
            'tags': ['requested_demo']
        }]);
    };

    /**
     * Submit the contact form when valid
     */
    $('#request-demo-form').on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            var email = $.trim($('#request-demo-email').val());

            $.ajax({
                'url': 'http://formspree.io/info@ally.ac',
                'method': 'POST',
                'data': {
                    'email': email,
                    '_subject': 'Ally demo request'
                },
                'dataType': 'json',
                'success': requestDemoSubmitted,
                'error': function(err) {
                    window.alert('An error has occurred. Please try again later.')
                }
            });

            return false;
        }
    });

});
