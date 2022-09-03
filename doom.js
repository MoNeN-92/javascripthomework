let myinputs = document.querySelector('#myinputs');
let add = document.querySelector('#add');
let myci = document.querySelector('.myci');
let myimg = document.querySelector("#myimg");


add.addEventListener('click', function () {
  let input = document.createElement('input');
  input.classList.add('mybord', 'circl-marg', 'mybord');
  let circ = document.createElement('i');
  circ.classList.add('fa-solid', 'myci',);
  input.setAttribute('id', 'placeholder', 'type');
  input.placeholder = 'Problem...';
  input.type = 'text';
  let but = document.createElement('button');
  but.classList.add('btn')
  but.setAttribute('id', 'button')
  but.id = 'add';
  but.button = 'add';
  let myimg = document.createElement('img', 'img/New.jpg')
  myimg.setAttribute('src', 'img')
  myimg.src = 'img/New.jpg'
  myimg.classList.add('icon-pluss');




  myinputs.append(circ, input, myimg, but)
  myimg.addEventListener('click', function(){
    
  })

})





let dropcont =  document.querySelector('.costumselect ul');
let opendrop =  document.querySelector('.choose');
let opendroptext =  document.querySelector('.choose span');
let optopn = document.querySelectorAll('.costumselect ul li')
let inp = document.querySelector('input[name="cityid"]');

opendrop.addEventListener('click', function(){
  dropcont.classList.toggle('show');
})

optopn.forEach(el=>{
  el.addEventListener('click', function(){
    let text = this.innerText.split (' ') [0];
    let values = this.getAttribute('data-cityid');
    dropcont.classList.remove('show');
    opendroptext.innerText = text;
    inp.value = values;
    
  })

})



let nav = document.querySelector('navbar')

window.addEventListener('scroll', function(){
  if (this.scrollY > 250) {
    nav.classList.add('scrolled')
  }else{
    nav.classList.remove('scrolled')
  }
})

