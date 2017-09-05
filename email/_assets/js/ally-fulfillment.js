$(document).ready(function() {
    var values = $.url(document.location).param();
    console.log(values);
    var template = _.template($("#template").html());
    $("#container").html(template(values));
});