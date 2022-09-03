// $('i').on('click',function(){
//     $('.my-inpstyle').toggle('opacity:  0');


// });

// $('i').toggle('my-istyle');




// $('.my-istyle').on('dblclick',function(){
//     $('input').show();



// });
// $('.my-istyle').on('click',function(){
//     // $('input').toggle('display:none');
//   $('.my-istyle').toggle('my-istyle','');

// });
// $('i').on('click',function(){
//     $('.my-inpstyle').animate('hide');


// });
// $("i").click(function(){
//     $("input").animate({
//     //   right: '250px',
//     opacity: '0',
//     transition: 'all .6s linear'
//     });
//   }); 

$('i').click(function () {
  if ($(this).css("margin-right") == "200px") {
    $('input').animate({ "margin-left": '-=100', 'opacity': '1', 'border-radius': '0%' });
    $('i').animate({ "margin-right": '-=200', 'opacity': '1', 'border-radius': '0%' });
  }
  else {
    $('input').animate({ "margin-left": '+=100', 'opacity': '0', 'border-radius': '40%' });
    $('i').animate({ "margin-right": '+=200', 'opacity': '1', 'border-radius': '50%' });
  }


});
