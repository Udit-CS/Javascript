// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);





const obj1={1:"a",2:"b"}
const obj2={3:"c"}
const obj3=Object.assign(obj1,obj2);
//console.log(obj3);

const obj4 = {...obj1, ...obj2}
// console.log(obj3);




const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course= {
    cname:"javascript",
    ctime:"20",
    cinstructor:"hiteshyt",
}
console.log(course.cinstructor);
const {cinstructor: inst}= course
console.log(inst);