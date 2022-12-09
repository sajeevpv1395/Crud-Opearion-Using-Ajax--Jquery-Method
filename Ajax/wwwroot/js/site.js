// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var baseurl = $('#baseurl').val();
$(document).on('click', '.brand-logo', function () {
    window.location.href = baseurl + "Home/Index";
});
$(document).on('click', "#errorReload", function () {
    location.reload();
});
$(document).on("click", ".CookieFunction", function () {
    $('#cookiescript_injected').css("display", "block");
    window.open($('#baseurl').val() + 'Cookie/CookiePolicy', '_blank');
});