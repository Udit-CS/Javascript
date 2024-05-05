// object 



const mysym= Symbol("KEY1");// it is unique , it passes diffrent values wether key 1 is used with other symbol datatype.    
let data= {
    name: "udit chauhan",
    [mysym]: "mykey",
    city: "bijnor",
    email: "thakurujjawal@gmail.com",
    isLogedIn: "false ",
    loginDays : ["monday","tuesday"],
}
console.log(data.email);
console.log(data["email"]);// prefered way 

//Object.freeze(data);// using this we can freeze the changes in the object
data.email= "udit@gmail.com";
console.log(data.email);

data.greeting  = function()
{
    console.log(`hello data user`);

}
console.log(data.greeting);