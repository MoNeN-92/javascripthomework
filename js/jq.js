// $('.icon').click(function (e) { 
//      e.preventDefault();
//      $('.mybox').show('slow');
// });

// $('.icon').click(function (e) { 
//     e.preventDefault();
//     $('.icon').css({
//         textSize: `30px`,
//         backgroundColor: `red`,
//     })
// });

// $('.icon').on('click',function(){
//     $(this).toggleClass('redBackgroundhearth');
    
// });
 
$('.heart').on('click',function(){
    $(this).toggleClass('Backgroundhearth');
    
});

$('.check').on('click',function(){
    $(this).toggleClass('Backgroundcheck');
});
$('.star').on('click',function(){
    $(this).toggleClass('Backgroundstar');
});