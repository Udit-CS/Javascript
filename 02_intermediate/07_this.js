const user={
price: 888,
    username: "udit ",
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);//this is use to show the context of the function.

    }
  
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()
//************arrow function**********//

// const college = () =>{
//     let username="udit "
//     let course = "btech"
// } // this is the way to use arrow function and cahnge in simp;le funtion and arrow function.


// imp// if we use {} brackets then we have to use return and if we are using () than return is needed to write


