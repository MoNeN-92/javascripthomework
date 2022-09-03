// //საკლასო
// function celsius(FARENHEIT) {
//   return (5 / 9) * (FARENHEIT - 32)
// }
// console.log(celsius(40).toFixed(1));
// document.getElementById('wheater').innerHTML = celsius(40).toFixed(1)
// //



// let img = 'img/bal.jpg';

// let card = `    <div class="card col-lg-4 mx-auto" style="width: 18rem;">
// <img src="${img}" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">${document.getElementById('wheater').innerHTML = celsius(40).toFixed(1)}</h5>
//   <p class="card-text"></p>
//   <a href="#" class="btn btn-primary"></a>
// </div>
// </div>
// `
// document.getElementById('card').innerHTML = card;


// let num = 23;
// let array = [];
// let str = 'string sadddas';
// let boolean = true;
// let obj = Object;
// let FUNCTION = function () { }

// console.log(typeof num);
// document.getElementById('string').innerHTML = str;

// //2) შევქმნათ ფუნქცია რომელიც ორი რიცხვის ნამრავს დაამრგვალებს ათეულამდე | ერთეულამდე | ასეულამდე 
// let num1, num2;
// num1 = 9.27;
// num2 = 5.5;

// let sum = num1 * num2;
// sum = Math.floor(sum)
// console.log(sum);

// let a = x => {
//   if (x.includes("HTML")) {
//     return x.replace("HTML", "")
//   }
//   else return x
// }

// let response = a("!!HTML!!!!!!")

// console.log(response)


// let plus = document.querySelector('.increase');
// let minus = document.querySelector('.decrease');
// let resete = document.querySelector('.resete');
// let input = document.querySelector('#input');



// plus.addEventListener('click', function () {
//   input.value++;
//   if (input.value > (0)) {
//     return input.style.color = "blue";
//   }

// }
// )

// minus.addEventListener('click', function () {
//   input.value--;
//   if (input.value < (0)) {
//     return input.style.color = "red";
//   }
// }
// )

// resete.addEventListener('click', function () {
//   input.value = 0;
//   if (input.value == (0)) {
//     return input.style.color = "black";
//   }
// }
// )



// let myDiv = document.getElementById('myDiv');

// let index = 0;

// let colors = ['blue', 'green', ''];

// mybtn.addEventListener('click', function onClick() {
//   myDiv.style.backgroundColor = colors[index];
//   index = index >= colors.length - 1 ? 0 : index + 1;
// });


// let mysecbtn = document.getElementById('mysecbtn');

// mysecbtn.addEventListener('click', function handleClick() {
//   mysecbtn.textContent = 'loading...';

// });


// let modal = document.getElementById("myModal");


// let btn = document.getElementById("myBtn");


// let span = document.getElementsByClassName("close")[0];


// btn.onclick = function () {
//   modal.style.display = "block";
// }


// span.onclick = function () {
//   modal.style.display = "none";
// }


// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// function myFunction() {
//   let txt;
//   if (confirm("do you want to delete this element")) {
//     txt = "yes";
//   } else {
//     txt = "No";
//   }
//   document.getElementById("demo").innerHTML = txt;
// }



// function changeText() {
//   if (mytext.innerHTML == 'ახალი მნიშვნელობა') {
//     mytext.innerHTML = 'ძველი მნიშვნელობა'
//   } else {
//     mytext.innerHTML = 'ახალი მნიშვნელობა'
//   }
// }

// let hidden = document.querySelector('#hidden');
// let show = document.querySelector('#show');
// let pass = document.querySelector('#pass');
// let email = document.querySelector('#email');
// let toggle = document.querySelector('#hidden');
// let hello = document.querySelector('.hello');
// let close = document.querySelector('.close');
// let open = document.querySelector('.open')

// close.addEventListener('click', function(){
//   pass.type = pass.type == 'password' ?  'text' :  'password';
  

//   close.classList.toggle('zindex')
  
  
// }) 
// open.addEventListener('click', function(){
//   pass.type = pass.type == 'password' ?  'text' :  'password';
  

//   close.classList.toggle('zindex')
  
// }) 












