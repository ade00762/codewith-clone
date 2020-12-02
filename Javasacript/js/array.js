//  to add element to the last number
// scores = [20,20,5]
//     scores.push(7) 
// console.log(scores)

// // to add element to the begining
// scores = [20,20,5]
//     scores.unshift(7) 
// console.log(scores)

// to remove an element 
// scores = [20,20,5]
//     scores.shift() 
// console.log(scores)
 
// pop is to remove from the back

// let scores = [20,5,10,7]
//     console.log(scores.indexOf(10))


// let scores = [20,5,10,7,20]
//     console.log(scores.lastIndexOf(20))

// let names = ["joy","sam","vic"]
//     for(i = 0;i< names.length ;i++){
//         console.log(names[i])
//     }

    // we join array together using concatnation

    // let vowels =["a","e","i","o","u"]
    // let consonants =["b","c","d","f","g"]
    // let alphabets = vowels.concat(consonants)
    //     console.log(alphabets )

        // MAPPING ARRAY 

        // FILTER

    // let scores = [10,20,30,40,50,60,70]
    
    // let greaterthan30 = scores.filter((score) => score >= 30)
    //     console.log(greaterthan30)

    //     // REDUCE : help to find the total sum of the number inthe list

    // let totalscores = scores.reduce((a,b) => a+b,0)
    //     console.log (totalscores)

        // SORT OUT AN ARRAY
    
    // let scores = [30,40,10,20,60,70,50]

//     let sortscores = scores.sort((x,y)=> y-x ) /* [ bigger to smaller] */
//     // let sortscores = scores.sort((x,y)=> x-y ) /* [ smaller to bigger] */
//         console.log(sortscores)

// // EVERY : it will check if an Elemnet in the array meet a condition
//     scores.every((scores) =>scores >=20)

    // FIND
    // let find40 = scores.find((scores) =>scores ===40)
    //     console.log(find40)
    

    // SPLICE && SLICE
     
    // SPLICE : (start ,stop,replace)

    // scores.splice(2,1,7)
    //     console.log(scores)

        // SLICE
    // slicedscore = scores.slice(2,5)
    //     console.log(slicedscore)

    //     // SPLIT: a seprator
    //     let statement = [`john is an handsome man`]
    //     let splited = statement.split(" ")  
    //         console.log(splited)
            

        




// DOM = DOCUMENT OBJECTS MODEL






// let scores = [8,6,9,10,11,10] 
// scores.splice (1,2)
// console.log(scores)

// // const names = [`A`,`B`,`C`,`D`,`E`,`F`]
// // let splice names = name.splice(2,4)
// // console.log(splice.names)

// const babyspeach = `A quick Brown Fox jumps over a lazy dog`
// let arrayFromspeech = babyspeach.split(' ')
// console.log(arrayFromspeech)

// /** 
//  * @description
//  * returns the word(s) with the highest character from a string
//  * @param {string} sentence
//  * A collection of strings word withh highest charater we find
// */

// const findhighestchar = sentence =>{
//     let highestLength = 0
//     let words = sentence.split(" ")
//     words.map((word , index) => {
//         let wordSize = word.length
//         if (wordSize > highestLength){
//             highestLength = wordSize
//         }
//     })
//     let highestChar = words.filter(
//         word => word.length === highestLength)
//         .join(" , ")

//     return highestChar
// }

// let testString = "Lagos is a busy city in Western Nigeria"
// console.log(findhighestchar(testString))

// let mytest = "it is good to learn programming"
// console.log(findhighestchar(mytest))


// const range = (start , stop , step)=> {
//     let rangeArray = []
//     let count = step === undefined ? 1: step
//     if (start === stop)return start
//     if (start < stop) {
//         for ( let i = start ; i <= stop ; i += count){
//             rangeArray.push(i)
    
//         }
//     }else if ( start > stop ){
//         for (let i = start ; i >= stop ; i -= count) {
//             rangeArray.push(i)
//         }
//     }
//     return rangeArray
// }
// console.log(range(20,3,4))

// // const sumOfRange = arr => {
// //     if (Array.isArray(arr)) {
// //         return arr.reduce((a ,b) => a + b)
// //     }
// //     return 0

// // } ASSIGNMENT FROM 79 IN ELOQUENT JAVASCRIPT