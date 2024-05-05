let value ="abc"

//console.log(typeof value);// directly shows the datatype

//console.log(typeof(value));// this way firstly a function is form.

let digit =Number(value);// this way we can convert datatype.

//console.log(typeof digit);

//console.log(digit);// this shows NaN which means it is not a number. so it is incorrect.

//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Udit" => true

let someNumber = 33
let number1=3245
let s=String(number1)
//console.log(typeof s);

 console.log("1" + 2);//12
 console.log(1 + "2");//12
 // it priorities the string values so it understand the number is also a string.
 console.log("1" + 2 + 2);//122
 console.log(1 + 2 + "2");//32 ......in this case it start from left to right to start solving the query.

 console.log( (3 + 4) * 5 % 3);//2


 console.log(+true);//output=1.... + sign is used to convert bollean to numerical bollean.
 console.log(+"");//output=0..... ("") this means bollean false.
