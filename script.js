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


//Event listeners
c1.addEventListener("click", () => {})
c2.addEventListener("click", () => {})
c3.addEventListener("click", () => {})
c4.addEventListener("click", () => {})
c5.addEventListener("click", () => {})
c6.addEventListener("click", () => {})
c7.addEventListener("click", () => {})
c8.addEventListener("click", () => {})
c9.addEventListener("click", () => {})
c0.addEventListener("click", () => {})

add.addEventListener("click", () => {})
sub.addEventListener("click", () => {})
mult.addEventListener("click", () => {})
div.addEventListener("click", () => {})
equal.addEventListener("click", () => {})
ac.addEventListener("click", () => {})
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