const array=[1,2,3,4,5,6,7]
for (const num of array) {
//console.log(num);
}
const greeting="hello udit "
for (const greet of greeting) {
  // console.log(greet);
}
// if we using 'in' in forin loop then index is shown in result ,or if we are using  'of' in forin loop then values are shown in result.


// maps maps are known for unique values
const map = new Map()
map.set('IN',"INDIA")
map.set('fr',"france")
console.log(map);


//// for in looop
const myobject={
  js: "javascript",
  cpp: "c++",
  dc:"document",
  rb:"rugby",
}
 for (const key in myobject) {
  console.log(`${key},${myobject[key]}`);
  
  }
 ///// for each loop

 const coding =["js","c++","c","pyhton"]

 coding.forEach(function (val){console.log(val);})
 //in foreach loop function name is not required 
  
coding.forEach((item)=>{console.log(item);})//using arrow function in this case also function name is not required.


const myCoding = [
  {
      languageName: "javascript",
      languageFileName: "js"
  },
  {
      languageName: "java",
      languageFileName: "java"
  },
  {
      languageName: "python",
      languageFileName: "py"
  },
]

myCoding.forEach( (item) => {
  
  console.log(item.languageName);
} )