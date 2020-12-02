// let paragraphs = document.getElementsByTagName("p")
// console.log(paragraphs.length)

// let title = document.getElementsByClassName("article-title")
// console.log(title.length)

// let blinkButton = document.getElementsByid(blinker)
// console.log(blinkerButton)

let paragraphs = document.querySelectorAll("p")
console.log(paragraphs.length)

let title = document.querySelectorAll(".article-title")
console.log(title.length)

let blinkerButton = document.querySelector("#blinker")
console.log(blinkerButton)

let blinkingButton = document.querySelector("#blinker")
console.log(blinkingButton.textContent)
blinkingButton.textContent = "Dont click"

let dontChange = document.querySelector("#app")
console.log(dontChange.textContent)
dontChange.textContent = "This is not the section for our app"
// USE CAMELCASE METHOD when writing code in java
blinkingButton.style.backgroundColor = "blue"
blinkingButton.style.color = "#fff"
blinkingButton.style.cssText =`padding: 10px 20px;border: 5px bold yellow ;background-color:green; `
dontChange.style.color = `blue`
dontChange.style.backgroundColor =`red`

let articleTexts = Array.from(document.querySelectorAll(".article-text"))
articleTexts.map((text , index) => {
    text.style.backgroundColor ="green"   

   if(index === articleTexts.length - 1) {
    text.textContent = "i am the good guy"
   }

    if (index === 1){
       text.setAttribute("class","hide")
    }
})