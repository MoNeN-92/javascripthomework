

//2.1
let prase = "  shevqmnat ragaca stringi  "; //qmnis strings

wordArray = prase.split(' '); // qmnis masivs romelshic weria prase stringi cal-calke sityvebad 

console.log(wordArray); //bechdavs arsebul maivs consolshi 

//2.2 

let changedPrase = prase.replace("ragaca","Irakli");
console.log(changedPrase);

//2.3

wordArray = prase.split(' '); // qmnis masivs romelshic weria prase stringi cal-calke sityvebad
console.log(wordArray); //bechdavs arsebul maivs consolshi 

//2.4

let ifContains = prase.includes("ragaca");
document.getElementById("text").innerHTML = ifContains;
console.log(ifContains); 

//2.5
let ifStartWith = prase.startsWith("shevqmnat");
document.getElementById("startwith").innerHTML = ifStartWith;
console.log(ifStartWith);

//2.6
let UpperLatter = prase.toUpperCase()
console.log(UpperLatter)

//2.7
let clearSpace = prase.trim()
console.log(clearSpace)
  //2.7 

  let toRemoveSpaces = " akjsd askldjasd alskjdaskd ";
  let removeSpace = toRemoveSpaces.replace(/\s+/g, "");
  console.log(removeSpace);

//3.1
var str = 'AasdLPHA';
console.log(/^[a-zA-Z]*$/.test(str))
//3.2
var test2 = "awda2993"
console.log(/^[1-9]*$/.test(test2))


//3.3
let leng8 = "sadfgt"
if(leng8.length>=8){
    console.log(true);
    }else{
        console.log(false)
    }



// var test3 = "awda2993"
// console.log(/^[!@%$&*()_-=+]*$/.test(test3))


//

// function cel (FARENHEIT){
//     return (5/9) * (FARENHEIT - 32)
// }

// console.log(cel(50).toFixed(2));
// document.getElementById("ika").innerHTML = cel(100).toFixed(2)



let Users = [ 'irakli', 29, 'saba', 22];
Users.unshift (`keti`)
Users.splice
console.log(Users);



// მოცემული მასივიდან უნდა ავკინძოთ შემდეგი სტრინგი:

 //"FORD MUSTANG გამოდის 5.4 V8 ტიპის ძრავით, ასევე მისი მოდიფიკაციებია BOSS 302 , SHELBY ,საუკეთესო მოდელები გამოდიოდა
 //2018 დან 2021 წლამდე


  let auto = [
    `FORD`,
    `MUSTANG`,
    5.4,
    [`V6`, `V8`],
    {
        VARIANT1: 'BOSS 302',
        VARIANT2: 'SHELBY',
        VARIANT3: 'SAALEN',
        YEAR: ['2018', '2022',]
    }
    
  ];
  console.log(auto);
//   let auto1 = `${auto[0]} ${auto[1]} გამოდის ${auto[2]} ${
//     auto[3][1]
//   } ტიპის ძრავით, ასევე მისი მოდიფიკაციებია ${auto[4].VARIANT}, ${
//     auto[4].VARIANT2
//   }  საუკეთესო მოდელები გამოდიოდა ${auto[4].YEAR[0]}-დან  ${
//     auto[4].YEAR[1] - 1
//   } -დან `;

let auto1 = `${auto[0]} ${auto[1]},  გამოდის  ${auto [2]}, ${auto[3][1]}
<br>
ტიპის ძრავით, ასევე მისი მოდიფიკაციებია ${auto[4].VARIANT1}
<br>
${auto[4].VARIANT2} საუკეთესო მოდელები გამოდიოდა ${auto[4].YEAR[0]}-დან
${auto[4].YEAR[1] -1 } წლამდე.`;


document.getElementById('irakli').innerHTML = auto1;
console.log(auto1);
 
// 1) შევიტანოთ მასივში სიტყვა "FRONT-END" და FOR ციკლის შიგნით
// გავაკეთოთ ჩანაცვლება სიტყვა "BACK-END" - ით (REPLACE())


let array = ['GRAPHIC DESIGN', 'APP DESIGN', 'LOGO & BRAND DESIGN'];
array.push('FRONT-END');
for (let new_array in array)
{
    array[3] =`${array [3].replace(`${array [3]}`,  'back-end' ).toUpperCase()}`;
    document.getElementById('array2').innerHTML = array
}
// 2) გადავამოწმოთ აკმაყოფილებს თუ არა მასივში არსებული 
//  ყველა ელემენტი რაიმე პირობას  (პირობა თქვენ მოიფიქრეთ)

// array.forEach((array_memeber) => {
//     if (!array_memeber.match(/[0-9]/g)) {
//       console.error('მონაცემები არ შეიცავს ციფრებს');
//     }
//   });



let array10 = ['CLOSE  35', 'OKEY', 'THE BEST', 'OJSUGWADW', ]


array10.forEach((array10_member) => {
    if (!array10_member.match(/[A-Z]/g)  )
    console.error('მონაცემები არ შეიცავს დიდ სიმბოლოებს')
    else  console.log ('მონაცემები შეიცავს დიდ სიმბოლოებს')
}

)





