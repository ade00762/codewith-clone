// console.log('hello, world')
// let username = "Adeleke Bright"
// console.log(`My Name is ${username}`)

//     name = "wale"
//     age = 10
//     // document.write(name + "is" + age + "years old")
//     let x = 5 + 5
//     let y = 4 + "5"
//     let z =  9 + 10 + "5"
// console.log(`${x}`)
// console.log(typeof(x))
// console.log(`${y}`)
// console.log(`${z}`)
// let i = 3
// let j = 4
// ++i
// j++
// console.log(i)
// console.log(j)
// i+=1
// console.log (i*=1)

// // maths object
// // pi
// // round
// // floor
// // ceil
// // square root
// // pow
// // absolute
// // sin,cos,tan
// // Random
// console.log(Math.random)
// console.log(Math.round(5.6))
// console.log(Math.sqrt(64))
// console.log(Math.abs(-6,2))
// console.log(Math.min)
// console.log(Math.cos(90) * Math.PI/180)
// console.log(Math.random())

// let a = Math.random() 
// let b = a * 10
// let c = Math.ceil(b)
// console.log(c)

// let generate = Math.floor(Math.random() * 10)
// console.log(generate)

// // booleans
// console.log(3 > 2)

// let ab = 5
// let ay = "5"
// let ac = 4
// let ad = 9
// let at = 12
// console.log (ab == ad)
// console.log (ad > at)
// console.log (ab > at)
// console.log (ay == ab)
// console.log (ay === ab)
// console.log (5 >= ab)
// console.log ((at % ac) == 0)

// // If,If else,If else If
// let aa = 10
// if ((aa > 7)) {
//     console.log("yes")
// }
// let aaa = 2
// if (!(aa > 7)) {
//     console.log(`maybe yes`)
// }
// if (aa > 7) {
//      console.log(aa + `is greater than 7`)
// }
// if (aa < 5 && aa == 10) {
//     console.log (`And operator`)
// }
// if (!(aa < 5 && aa == 10)) {
//     console.log (`And operator`)
// }
// if (aa < 5 || aa == 10) {
//     console.log (`or operator`)
// }


// let player = `ronaldo`
// if (player == `ronald0`) {
//     console.log("he is a footballer")
// }else{
//     console.log("he is not a footballer")
// }

// let score = prompt(`enter a player name`)
// if(score ==`Messi`) {
//     alert(`he is not the goat!`)
// }else if(score == `messi`) {
//     alert(`he is the goat!`)
// }else {
//     alert(`HE is not the goat`)
// }


// let grade = prompt(`enter you score,lets judge you`)
// if(grade <= 34 && grade >=0) {
//     alert(`your grade score is F`)
// }else if(grade >= 35 && grade <= 39 ) {
//     alert(`your grade score is E`)
// }else if(grade >= 40 && grade <= 49) {
//     alert(`your grade score is D`)
// }else if(grade >= 50 && grade <= 59) {
//     alert(`your grade score is C`)
// }else if(grade >= 60 && grade <= 69) {
//     alert(`your grade score is B`)
// }else if(grade >= 70 && grade <= 100) {
//     alert(`your grade score is A`)
// }else {
//     alert(`please enter your score between 1-100`)
// }


// let device = prompt("please enter your devices")
// switch(device){
//     case `samsung`:
//         alert(`you use a good device`)
//     case `iphone`:
//         alert(`you use a good phone`)
//     case `tecno`:
//         alert(`you use a bad phone`)
//         break
//     default:
//         alert(`you use a very bad phone or we can't find that devices`)   
// }

// FOR LOOP
// for(let i= 0; i < 10; i++){
//     console.log(i)
//     // start maximum number increment
// }

// for(let number = 0; number <= 12; number+=2 ) {
//     console.log(number)
//     // start maximum number increment
// }


// assignment
// for(let i=0; i <= 20; i++) {
//     console.log(i)
// if ( i % 2 == 0 ) {
//     console.log(`even`)    
// }
// }

// let result = 1;
// let counter = 0;
// while (counter <=20) {
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);


// for (let number = 0; number <= 100; number++ ) {
    // if (number % 3 == 0 && number % 5 == 0) {
    //     console.log(`fizzbuzz`)
    // }else if(number % 5 == 0 ) {
//         console.log(`buzz`)
//     }else if (number % 3 == 0)
//     {   console.log(`fizz`)
//     }else{
//         console.log(number)
//     }
// }

// for (let number = 0; number <= 50; number++) {
//     if (number % 2 == 1) {
//         console.log(number)
//     }
// }


// let realname = prompt("enter username please");
// let score = Number(prompt(`enter your grade please`))
// switch(true){
//     case (score >= 70 && score <= 100):
//         document.write(`Congratulations ${realname}, your Grade is A`)
//         break;
//     case (score >= 60 && score <= 69):
//         document.write(`Congratulations ${realname}, your Grade is B`)
//         break;
//     case (score >= 50 && score <= 59):
//         document.write(`Congratulations ${realname}, your Grade is C`)
//         break
//     case (score >= 49 && score <= 40):
//         document.write(`Congratulations ${realname}, your Grade is D`)
//         break
//     case (score >= 39 && score <= 36):
//         document.write(`Congratulations ${realname}, your Grade is E`)
//         break
//     case (score >=0  && score <= 35):
//         document.write(`Congratulations ${realname}, your Grade is F`)
//         break
//     default:
//         alert("no grade for the score provided")  
// }

// let sumofmultiple = 0
// let n = 0
// while (n <= 1000){
//     if (n % 5 === 0 && n % 3 === 0) {
//         sumofmultiple += 1 }
//     i++
// console.log(sumofmultiple)
// }

// for(let i = 1 ; i <=5 ; i++){
//     let output = ``
// for(let j = 1 ; j <= i ; j++){
//     output += ` ` + j
// }   
//     console.log(output)
// }


// let base = prompt(`enter your base`)
// let height = prompt(`enter you height`)
//     {alert(`1/2 x ${base} x ${height} = ${1 / 2 * base * height}`) 
// }


// let n = Number(prompt(`please enter your first number of your choice`))
// let m = Number(prompt(`please enter your second number of your choice`))
// { alert(`from the two numbers( ${n} & ${m}) provided, your result are ; 
//     ${n} + ${m} = ${(n + m)}
//     ${n} * ${m} = ${(n * m)}
//     ${n} / ${m} = ${(n / m)}
//     `)
// }


// let h = Number(prompt(`please enter your first number of your choice`))
// let n = Number(prompt(`please enter your second number of your choice`))
// let m = Number(prompt(`please enter your third number of your choice`))
// {
//     alert(`the sum of ${h},${n} and ${m} is equal to ${h + n + m}`)
// }if (m > h + n){alert(`TRUE!, ${m} is greater than the sum of ${n} & ${h}`)
// }else (!(m > h + n))
// {alert(`FALSE!, ${m} is not greater than the sum of ${n} & ${h}`)
// }


// let n = Number(prompt(`please enter an even number of your choice`))
// if (n % 2 == 0){
//     for (let m = 1; m <= n ; m++)
//     if (n % m == 0){
//         console.log(m)}
// }else (!(n % 2 == 0))
// {   alert(`please enter an even number`)
// }



// let n = Number(prompt(`please enetr any number of your choice`))
// if (n % 5 == 0){
//     alert(`${n} is a multiple of 5`)
// }else if(n % 6 == 0){
//     alert(`${n} is a multiple of 6`)
// }else if(n % 5 == 0 && n % 6 == 0){
//     alert(`${n} is both a multiple of 5 & 6`)
// }else (!(n % 5 == 0 || n % 6 == 0))
// {
//      alert(`${n} is not a multiple of both 5 & 6`)
//     }


