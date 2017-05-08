// ONLY HERE TO CHECK FOR CONNECTIVITY IN CASE OF ISSUES
//console.log('Custom JS connected');

// CAUSES THE MENU & BUTTON TO DROP DOWN WHEN CLICKED AND RETURN TO NORMAL STATE WHEN CLICKED AGAIN
$('#menu-button').on('click', function(){
    $('.menu-inner').toggleClass('show');
    $('.menu-top').toggleClass('button-show');
    $('.button-inner').toggleClass('glyphicon-menu-down glyphicon-menu-up');
});

// CLOSES MENU IF A LINK IS CLICKED
$('.menu-inner a').on('click', function(){
    $('.menu-inner').toggleClass('show');
    $('.menu-top').toggleClass('button-show');
    $('.button-inner').toggleClass('glyphicon-menu-down glyphicon-menu-up');
});