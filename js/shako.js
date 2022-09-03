let und , x , y ,z , u;
und = 1;
x = "<p>ჩემი ტექსტი</p>";
y = "<p>ჩემი ტექსტი ტექსტი</p>";
z = 5;
u = 4;

 let ht = document.getElementById('apps');
 
 
 

 //document.getElementById('app').innerText += y;
/*
 const myname = 'boka';

 myname = 'boka2'
 */

let str = 'string'; //string
let numb = 45; //number
let array  = []; // array (მასივი)
let obj  = {}; // object (ობიექტი)
let bool = true; // boolean
let boolf = false; // boolean
let undif = undefined; //undefined (განუსაზღვრელი)
let nul = null; // Null 
let nan  = NaN; // NaN
let functions  = function(){} // function

//მასივის გადამოწმება
console.log(Array.isArray(array))

//ნან გადამოწმება
isNaN(nan)


// || ან
// && და
// ! შებრუნება
 
let email  = "info@gmail.com";
let password  = "123123";
 
if(email == "4info@gmail.com" && password == "123123"){
    console.log('გამარჯობა თქვენ წარმატებით გაიარეთ ავტორიზაცია!');
}else{
    console.error('მომხმარებელი ვერ მოიძებნა!');
}




let mystr = "მე ვსწავლობ";
let fro = `ფრონტ-ენდ <br>
პროგრამირებას`;
let src = 'img/bg.jpg';
let element = `<img src='${ 5 + 5 }' width='' alt='' >`;
 
 
apps.innerHTML = element;


 

// function change(val){
//     let temp = val;
 

//     if(temp <= 10){
    
//   weather.innerHTML = "<img src='https://icon-library.com/images/cloudy-icon/cloudy-icon-15.jpg' width='50'>";
    
//     }else if(temp >= 10 && temp <= 20){
//         weather.innerHTML = "<img src='https://icons-for-free.com/download-icon-sun+sunny+weather+icon-1320196635525068067_512.png' width='50'>";
//     }else if(temp >= 30){
//         weather.innerHTML = "<img src='https://cdn.picpng.com/sun/sun-weather-sunny-rays-sunshine-116041.png' width='50'>";
//     }else{
//         weather.innerHTML = "<img src='https://icons.iconarchive.com/icons/icons8/windows-8/256/Weather-Fog-Day-icon.png' width='50'>";
//     }
    
// }

let ns = 555;
// ns = ns.toString();
let mystr2 = `( მე  ვარ სტუდენტი It და ვსწავლობ It პროგრამირებას It Step georgia`;
 
let finalstr = mystr2.split(' ');
finalstr[1] = 'sadas'
// code.slice(9, 0); ჭრის სტრინგს პირველი პარამეტრი იწყებს ჭრას მარცხნიდან ინდექსის (პარამეტრის) მიხედვით 
//მეორე პარამეტრი  იწყებს ჭრას მარცხნიდან ინდექსის (პარამეტრის) მიხედვით 
// code.slice(-9, -0); ჭრის სტრინგს პირველი პარამეტრი იწყებს ჭრას მარჯვნიდან ინდექსის (პარამეტრის) მიხედვით 
//მეორე პარამეტრი  იწყებს ჭრას მარჯვნიდან ინდექსის (პარამეტრის) მიხედვით 
//mystr2.trim(); ჭრის სიცარიელეს სტრინგის მარჯვენა და მარცხენა მხრიდან
//mystr2.startsWith('('); ამოწმებს იწყება თუ არა სტრინგი რაიმე სიმბოლოთი
//mystr2.endsWith('('); ამოწმებს მთავრდება თუ არა სტრინგი რაიმე სიმბოლოთი
//mystr2.toUpperCase();   ადიდებს სტრინგის ყველა სიმბოლოს
//mystr2.toUpperCase();   აპატარავებს სტრინგის ყველა სიმბოლოს
// mystr2.includes('It'); ამოწმებს გვაქვს თუ არა რაიმე სიმბოლო სტრინგში აბრუნებს boolean
// mystr2.search('Its');  ამოწმებს გვაქვს თუ არა რაიმე სიმბოლო სტრინგში აბრუნებს ინდექსს
// mystr2.match(/It/ig); ეძებს სიმბოლოებს და აბრუნებს მასივს
//ns.toString(); მეთოდი ახდენს მონაცემბის ტრანსფორმაციას string ტიპში
// mystr2.split(' '); გადაყავს სტრინგი მასივში

console.log(finalstr.toString().replaceAll(',', ' '));

let img = 'img/bg.jpg';

let card  = `
<div class="card" style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

`

document.getElementById('apps').innerHTML = card;

// გლობალური ცვლადი
let num1 = 25.6;
// გლობალური ცვლადი
let num2 = '7';

// num2 = Number(num2)
let fix = num1 * num2;
console.log();

// ფუნქციის შექმნა
function testFunction(){
    // ლოკალური ცვლადი
    let x1 = "ჩემი პირველი ფუნქცია";
    let x2 = "არის testFunction";
    return  num1;
}


let currentLang = 'ka';
let text_ka = "სათაური";
let textt_en = "title"

// ფუნქციის გამოძახება
console.log(num1);

function lang(leng){
    if (leng == 'ka') {
        return text_ka;
    }
    return textt_en;
}

console.log(  lang(currentLang));


 function User(name,age,role, ...sofo){
   
    return name + age  + role + sofo
 }

 console.log(User(' zura ', 25, ' admin '));
 console.log(User(' zura12 ',  354, ' momxmarebeli ', 'მისამართი', 'მისამართი', 'მისამართი'));

 function info(platform = null){
     if (platform == 'null') {
        
     }else{

     }
 }

 info(5);

 let names = (text,id)  => {
    console.log(text,id )
 }

 names('arrow function', 1);

// ლოგიკური ბლოკი
 function GetProduct(discount = false, discountprice = false, output){
    let disc;
    let discprice;
    let nwprice;
    if (discount) {
         disc = '<span class="bg-danger rounded p-2 position-absolute"> ფასდაკლება  </span>'
         nwprice = `<p class="card-text"> <del>1500 ₾ </del> ${discountprice} ₾  </p>`;
    }else{
         disc  = '';
         nwprice = `<p class="card-text">1500 ₾</p>`;
    }


     let ProductCard = `
    <div class="col-lg-4 mx-auto">
     <div class="card position relative">
     ${disc}
  <img src="https://icity.ge/wp-content/uploads/2021/09/iphone-13-blue-select-2021-1.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">iphone</h5>
    ${nwprice}
    <a href="#" class="btn btn-primary">სრულად ნახვა</a>
   </div>
  </div>
 </div>
     `

     output.innerHTML = ProductCard;

 }
// 

 let outputs = document.getElementById('prds');
 let output2 = document.getElementById('prds2');

 GetProduct(true,1600,outputs)
 GetProduct(false,1800,output2)


 
 function dicCalculator(sumdiscont, sumprice, cartPrice){
    let disccount = Math.floor( cartPrice / sumdiscont);
    let discount = disccount * sumprice;
    return  cartPrice - discount ;


 }

 let text = "C465Dg*";
let pattern = /([1-9])([A-Z])([a-z])([@;*&])/g;
let result = text.search(pattern);

 console.log(result)


 let Users = [ 'giorgi', 5, 'cotne', 24];

 

//  Users.push('88') ამატებს ახალ ელემენტს მასივის ბოლოს
//  Users.unshift('55') ამატებს ახალ ელემენტს მასივის დასაწყისში
// Users.pop(); შლის  მასივის ბოლო ელემენტს
// Users.shift(); შლის  მასივის პირველ  ელემენტს
// Users.splice(3,1); პირველი პარამეტრი განსაზღვრავს საიდან უნდა დაიწყოს ჭრა, 
// მეორე პარამეტრი განსაზღვრავს რამდენი ელემენტი უნდა მოიჭრას
// Users.splice(4,0, ['25', 214]);  პირველი პარამეტრი განსაზღვრავს საიდან უნდა დაიწყოს ჭრა/ან ჩამატება, 
// მეორე პარამეტრი განსაზღვრავს რამდენი ელემენტი უნდა მოიჭრას
// მესამე პარამეტრი გასაზღვრავ რა ელემენტები უნდა ჩაემატოს მასივში

let logs =  document.getElementById('log');

// Users.forEach( (element, index)=> {
//    return element + "ტესტ";
// });

//  let filterUser = Users.map( (element, index)=> {
//     if (typeof element == 'number') {
//           return   element;
//     } 
// });

// let filterUser = Users.filter(el=>{
//     return  typeof el == 'string'
// })

let Myuser = [
    'ანა',
    'ბექა',
    'ემზარი',
    'ანამარია',
    'მარიამი',
    'გიორგი'
];

let Mynum = [
   3,
   5,
   58,
   100,
   5000,
   78000,
   65,
   2,
   9
];

// Myuser.sort() სორტირება / .reverse()  შებრუნება


// Mynum.sort( (a,b) =>{
//     return b - a;
// } ) რიცხვების სორტიება

console.log(Mynum.sort( (a,b) =>{
    return b - a;
} ));

// // return  user info
// function getUserInfo(element, index){
       
// }

//  console.log(Users[0]);

 

