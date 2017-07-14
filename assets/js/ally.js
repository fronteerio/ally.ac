$(document).on('ready', function() {

    /**
     * Show the form submit success message
     */
    var requestDemoSubmitted = function() {
        $('#demo-form').hide();
        $('#demo-success').show().focus();
        _dcq.push(['identify', {
            'email': $.trim($('#form-email').val()),
            'tags': ['requested_demo']
        }]);
    };

    /**
     * Submit the contact form when valid
     */
    $('#demo-form').on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            var formData = $(this).serialize();
            $.ajax({
                'url': 'https://s2376.t.eloqua.com/e/f2',
                'method': 'POST',
                'data': formData,
                'success': requestDemoSubmitted,
                'error': function(err) {
                    window.alert('An error has occurred. Please try again later.')
                }
            });

            return false;
        }
    });

});
