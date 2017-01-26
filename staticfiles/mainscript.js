$(document).ready(function () {

    $('.nav a').on('click', function(){
        console.log('test');
        $('.navbar-collapse').collapse('hide');
    });
});