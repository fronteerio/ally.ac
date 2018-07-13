$(document).ready(function() {
    var values = $.url(document.location).param();
    var template = _.template($("#template").html());
    $("#container").html(template(values));
});