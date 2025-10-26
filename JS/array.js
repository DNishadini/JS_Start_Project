/*const name = "Ruchira";
//const names = new Array('Ruchira','Kaveesha','Sahan')
//OR
const names=['Ruchira','Kaveesha','Sahan']
console.log(names)
console.log(names[1])
names.push('Pasindu')
console.log(names)
names.pop()
//add the element before the array
names.unshift('Janitha')
//remove the first element from an array
names.shift('Janitha')*/

/*const names1=['Ruchira','Kaveesha','Sahan']
const names2=['Iduni','Thathsara','Vishara']

//combine two or more arrays
//const allNames = names1.concat(names2) OR
const allNames = [...names1,...names2]

console.log(allNames)*/


/*//HIGH ORDER FUNCTION

function test(num){
    return num
}

function numberFunction(){

}
test(numberFunction())*/


/*const numbers = [5,7,11,3,19]
numbers.find(findNumber)
function findNumber(number){
    console.log(number>10)
}*/

const cars = ['Toyota','Nissan','BMW','Benz']
console.log(
    cars.find(getCarBrandStartWithLetter)
)

function getCarBrandStartWithLetter(car){
    return car.startsWith('B')
}



