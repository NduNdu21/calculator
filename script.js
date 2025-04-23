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

var displayText = document.getElementById("displayText").textContent

//Event listeners
//Digits
c1.addEventListener("click", () => {
    displayText += "1"
})
c2.addEventListener("click", () => {
    displayText += "2"
})
c3.addEventListener("click", () => {
    displayText += "3"
})
c4.addEventListener("click", () => {
    displayText += "4"
})
c5.addEventListener("click", () => {
    displayText += "5"
})
c6.addEventListener("click", () => {
    displayText += "6"
})
c7.addEventListener("click", () => {
    displayText += "7"
})
c8.addEventListener("click", () => {
    displayText += "8"
})
c9.addEventListener("click", () => {
    displayText += "9"
})
c0.addEventListener("click", () => {
    displayText += "0"
})

//Operations
add.addEventListener("click", () => {
    displayText += "+"
})
sub.addEventListener("click", () => {
    displayText += "-"
})
mult.addEventListener("click", () => {
    displayText += "*"
})
div.addEventListener("click", () => {
    displayText += "/"
})

//Equals
equal.addEventListener("click", () => {
    operPos = displayText.search(/[+\-*/]/)

    var first = displayText.slice(0, operPos)
    var second = displayText.slice(operPos + 1, displayText.length - 1)
    var oper = displayText.charAt(operPos)

    displayText = operate(first, second, oper)
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