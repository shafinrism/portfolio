$('.Skills-content').hide();
$('.Experience-content').hide();

$('.one').addClass('bgactive');
$('.one div').addClass('box bgactive');

$('.two').click(function(){
    $('.Skills-content').show();
    $('.Experience-content').hide();
    $('.about-content').hide();

    $('.one').removeClass('bgactive');
    $('.one div').removeClass('box bgactive');

    $('.two').addClass('bgactive');
    $('.two div').addClass('box bgactive');

    $('.three').removeClass('bgactive');
    $('.three div').removeClass('box bgactive');

});

$('.three').click(function(){
    $('.Skills-content').hide();
    $('.Experience-content').show();
    $('.about-content').hide();

    $('.one').removeClass('bgactive');
    $('.one div').removeClass('box bgactive');

    $('.two').removeClass('bgactive');
    $('.two div').removeClass('box bgactive');
    
    $('.three').addClass('bgactive');
    $('.three div').addClass('box bgactive');

});


$('.one').click(function(){
    $('.Skills-content').hide();
    $('.Experience-content').hide();
    $('.about-content').show();

    $('.one').addClass('bgactive');
    $('.one div').addClass('box bgactive');

    $('.two').removeClass('bgactive');
    $('.two div').removeClass('box bgactive');
    
    $('.three').removeClass('bgactive');
    $('.three div').removeClass('box bgactive');

});

