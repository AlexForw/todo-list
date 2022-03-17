`use strict`
const mainBtn = document.querySelector('.todo-btn')
const todoText = document.querySelector('.todo-text')
const input = document.querySelector('.todo-input')

let sum = 0
mainBtn.addEventListener('click',hey)

function hey(e) {
    
    e.preventDefault()

    todoText.textContent = input.value
    input.value=''
}