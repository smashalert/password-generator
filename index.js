
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
    "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passElOne = document.getElementById("pass-el")
let passElTwo = document.getElementById("pass-el-two")

let copiedTextMsg = document.getElementById("copiedText")
let copiedTextMsg2 = document.getElementById("copiedText2")

let btnCopy = document.getElementById("btnCopy")

let generatedText = false

function generatenumber() {
    passElOne.textContent = " "
    passElTwo.textContent = " "

    copiedTextMsg.textContent = " "
    copiedTextMsg2.textContent = " "

    generatedText = true

    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        passElOne.textContent += characters[randomIndex]
    }

    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        passElTwo.textContent += characters[randomIndex]
    }
}

let copyToClipboardButton = document.getElementById("copyBtn");

copyToClipboardButton.addEventListener('click', () => {
    let textToCopy = document.getElementById("pass-el").innerText;
    if(navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
        })
    } else {
        console.log('Browser Not compatible')
    }

})

let copyToClipboardButton2 = document.getElementById("copyBtn2");

copyToClipboardButton2.addEventListener('click', () => {
    let textToCopy = document.getElementById("pass-el-two").innerText;
    if(navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
        })
    } else {
        console.log('Browser Not compatible')
    }

})

function copied() {
    if (generatedText === true) {
        copiedTextMsg.textContent = "Copied!"
        copiedTextMsg2.textContent = " "
    } 
}

function copied2() {
    if (generatedText === true) {
        copiedTextMsg2.textContent = "Copied!"
        copiedTextMsg.textContent = " "
    } 
}