//variables for operations
var number1
var number2
var operand

//Query selectors
const c1 = document.querySelector("#num1")
const c2 = document.querySelector("#num2")
const c3 = document.querySelector("#num3")
const c4 = document.querySelector("#num4")
const c5 = document.querySelector("#num5")
const c6 = document.querySelector("#num6")
const c7 = document.querySelector("#num7")
const c8 = document.querySelector("#num8")
const c9 = document.querySelector("#num9")
const c0 = document.querySelector("#num0")

const add = document.querySelector("#add")
const sub = document.querySelector("#sub")
const div = document.querySelector("#div")
const mult = document.querySelector("#mult")
const ac = document.querySelector("#AC")
const equal = document.querySelector("#equal")
const del = document.querySelector("#DEL")

const display = document.querySelector(".display")

var displayText = document.getElementById("displayText")

//Event listeners
//Digits
c1.addEventListener("click", () => {
    displayText.textContent += "1"
})
c2.addEventListener("click", () => {
    displayText.textContent += "2"
})
c3.addEventListener("click", () => {
    displayText.textContent += "3"
})
c4.addEventListener("click", () => {
    displayText.textContent += "4"
})
c5.addEventListener("click", () => {
    displayText.textContent += "5"
})
c6.addEventListener("click", () => {
    displayText.textContent += "6"
})
c7.addEventListener("click", () => {
    displayText.textContent += "7"
})
c8.addEventListener("click", () => {
    displayText.textContent += "8"
})
c9.addEventListener("click", () => {
    displayText.textContent += "9"
})
c0.addEventListener("click", () => {
    displayText.textContent += "0"
})

//Operations
add.addEventListener("click", () => {
    displayText.textContent += "+"
})
sub.addEventListener("click", () => {
    displayText.textContent += "-"
})
mult.addEventListener("click", () => {
    displayText.textContent += "*"
})
div.addEventListener("click", () => {
    displayText.textContent += "/"
})

//Equals
equal.addEventListener("click", () => {
    operPos = displayText.textContent.search(/[+\-*/]/)

    var first = Number(displayText.textContent.slice(0, operPos))
    var second = Number(displayText.textContent.slice(operPos + 1, displayText.textContent.length))
    var oper = displayText.textContent.charAt(operPos)

    displayText.textContent = operate(first, second, oper)
})

//Clearing display
ac.addEventListener("click", () => {
    displayText.textContent = ""
})
del.addEventListener("click", () => {})

//functions 
const addFunc = (num1, num2) => {
    return num1 + num2
}

const subFunc = (num1, num2) => {
    return num1 - num2
}

const divFunc = (num1, num2) => {
    return num1 / num2
}

const multFunc = (num1, num2) => {
    return num1 * num2
}

//operate function
const operate = (num1, num2, oper) => {
    switch (oper) {
        case "+":
            return addFunc(num1, num2);
        break;
        case "-":
            return subFunc(num1, num2);
        break;
        case "/":
            return divFunc(num1, num2);
        break;
        case "*":
            return multFunc(num1, num2);
        break;
    }
}