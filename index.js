let count = document.getElementById ("count")
let plus1 = document.getElementById ("+1")
let minus1 = document.getElementById ("-1")
let plus10 = document.getElementById ("+10")
let minus10 = document.getElementById ("-10")
let reset = document.getElementById ("reset")

let number = 0

plus1.onclick = function() {
    number += 1
    count.textContent = number
}

minus1.onclick = function() {
    number -= 1
    count.textContent = number
}

plus10.onclick = function() {
    number += 10
    count.textContent = number
}

minus10.onclick = function() {
    number -= 10
    count.textContent = number
}

reset.onclick = function() {
    number = 0
    count.textContent = number
}
