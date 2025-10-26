/*//automatic hoisting
myName = "Dinushika"
//variable hoisting
var myCity = "Kurunegala"
console.log(myName)
console.log(myCity)
alert(myName)*/

/*var myName = "Dinushika";
var myAge = 15;

function getMyName(){
    var myWeight = 80
    //redeclaration
    var myWeight = 50
    console.log(myWeight)
}


getMyName()*/


let myWeight = 60
//using let keyword we can't redeclare the variable
let myWeight = 100
console.log(myWeight)

function getMyName(){

}

getMyName()

let myWeight = 60
//but changing the scope we can create same variable name using let


function getMyName(){
    let myWeight = 100
    console.log(myWeight)
}

getMyName()

//can't redecalared but can reassigned same scope
let myWeight = 60
//using let keyword we can't redeclare the variable
myWeight = 100


function getMyName(){
    console.log(myWeight)
}

getMyName()