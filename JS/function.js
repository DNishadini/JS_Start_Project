//TRADITIONAL FUNCTIONS
/*function getName(){
    console.log('Janitha')
}

function getTotal(){
    const num1=12
    const num2=15
    console.log(num1+num2)
}
getName()
getTotal()*/

//ANNONYMOUS FUNCTION
/*const name = function(){
    return "JD"
}
console.log(name())*/


/*//ARROW FUNCTIONS
const getName = () => {
    console.log('Good Day')
}
getName()

//annonymous arrow function
() => {
   console.log('Good Day') 
}*/

//ARGUMENT & PARAMETER

//paramter vriable
function getName(name){
    console.log(name)
}

//argument
getName('Rikash')


/*function getTotal(num1, num2){
    console.log(num1 + num2);
}

getTotal(12,15)*/


/*const getTotal = function (num1, num2){
    console.log(num1 + num2);
}

getTotal(12,15)*/

/*const getSumofTwoNum = (num1, num2) => {
    console.log(num1+num2)
}
getSumofTwoNum(12,30)*/

//TRADITIONAL & ARROW function using ONE PARAMETER
/*function readname(name){
    console.log(name)
}
getName('Kalpana')

const showName = name =>{
    console.log(name)
}
showName('Shaluka')*/

//RETURN KEYWORD
/*function printName(myName){
    return myName + ' ' +'Udara'
}

console.log(printName('Kalpana'))

function getTotal(num1,num2){
    return num1 + num2
}

const total = getTotal(20,30)
console.log(total)*/

// const getTotal = (num1,num2) => {
//     return num1 + num2
// }
// OR
// const getTotal = (num1,num2) => 
//      num1 + num2

// const total = getTotal(20,30)
// console.log(total)

const getTotal = (num1,num2=10) => 
      num1 + num2

 const total = getTotal(20)
 console.log(total)
