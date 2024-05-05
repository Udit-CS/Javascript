// *******stack***********
let firstname="amitshah"
let anothername="jayshah"
// in stack it makes copy of the original data.
middlename=firstname

console.log(firstname);
console.log(middlename);
console.log(anothername);


//  heap*********************
let userone={
    email: "hey@gmail.com",
    upi: "987482@ybl",

}


usertwo="hello@gmail.com"
userone.email= usertwo  // here in this senario both userone and usertwo refrence hello@gmail.com..... in heap pointer refrences orignal data 
console.log(userone.email);
console.log(usertwo);