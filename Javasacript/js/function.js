// function greatuser(message, name){
//     console.log(`${message} ${name}`)
// }
// greatuser(`happy new year`,`precious`)
// greatuser(`have a nice day`, `faith`)


/*
function generatenumbers (n,m) {
    for (let i = n ; i <= m ; i++) {
        console.log(i)
    }
}
generatenumbers (2,4)

function generateodd (n,m) {
    for (let r = n ; r<m ; r++) {
        if(!(r % 2 == 0)){
            console.log(r)
        }
    }
}
generateodd (1,9)

// generated function is global and can apper any where in the page.
function sayhello () {
    console.log(`hello`)
}
sayhello ()

// function definition comes before the defination
const sayhelloworld = function () {
    console.log(`hello world`)
}
sayhelloworld()

// arrow fuction is straight foward
// const sayhelloworld = () => console.log(`hello world`)

// const add = (a,b) => a + b
//     console.log(add(3,5))
// const printeven = ( n => 

// )


const printA = (() => {
    let a = 50
    let b = 10
    let c = a + b
    console.log(a, c)
})

// ASSIGNMENT

let basearea = 3 ;
let heightarea = 5 ;

const areavalue = (basearea * heightarea /2) ;{
    console.log (`area of triangle is ` + {areavalue});
}


let number = prompt(`enter a number`);

if (number % 2 ==0){
    console.log(`the number is even`);
}
else {
    console.log (`the munber is odd`);
}

// 19TH NO CLASS

// function as a  firts class citizen

const sum = (a,b); 
console.log(a+b);
sum(2 , 3)

OR 

const sum = (a ,b);
sum= (a+b);

// sum(6,4) *20;
// 10*20= 200;
// console.log(sum(6,4))
// or 
// alert(sum(6,4))




const min = (a,b) => {
    if (a < b){
        return(a)// console.log(a)
    }
    return (b) // console.log(b)
}

let leastNumber = min(4 ,3)
let multiplyBy6 = min(20 ,27)*6
console.log(leastNumber ,multiplyBy6)

console.log(min(5,1))
alert(min(1,5))

const squareArea = x => x*x
let ayoLandMass = squareArea(min(8,7))
console.log(`the size of Ayo's Land is ${ayoLandMass}sq m`)


let teachersRemark = (msg)=> msg

let greaterThan30 = num => {
    if (num > 30){
        return teachersRemark (`very Good Student`)
    }
    return teachersRemark(`Bad student.please work hard`)
}

CONTINUED ON FUNTION :
what is function 
How to creat a function
Understanding Parameters and Values
invoking a function
Function Defifnition
Hoisting and the disadvantage and polluting codes wiht global variables
Immediately invoked function Expression
Arrow Function
The return keywords

*/
//greetPerson is created with a parameter.it will always need an argument
// when invoked else it will return undefined for the missing parameter.

// greetUsers(`ebuka Okafor` , 12)
// function greetUser(uaserName ,age){
//     console.log(`Hello ,${userName} , you are ${age} years old`)
// }

//An example of a IIFE
const greetStudent = (function (Name , age){
    console.log(`Hello , ${name} , you are ${age} years old`)
})(`kunle`,20)

//Creating an Arrow function

const greetTeacher = (name , age) => {
    console.log(`Hello , ${name} , you are ${age} years old`)
}

// returns odd numbers between two positive whole numbers.
// {Number} m the lesser of the two positive numbers 
// {Number} n the second positive number.

function oddNumbersBetween(m , n){
    if (m < n) {
        for (let i = m ; i <= n ; i++){
            if (i % 2 !== 0){
                console.log(i)
            }
        }
    }else {
        console.log(`please , provide valid argument`)
    }
}
oddNumbersBetween(2 ,10)




