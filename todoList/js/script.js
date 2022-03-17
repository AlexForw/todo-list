`use strict`
const mainBtn = document.querySelector('.todo-btn')
const input = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')


let sum = 0
mainBtn.addEventListener('click',hey)

function hey(e) {
    
    e.preventDefault()
    
    const todoBlock = document.createElement('div')
    todoBlock.classList.add('todo')
    
    const todoText = document.createElement('p')
    todoText.classList.add('todo-text')
    todoBlock.appendChild(todoText)
    todoText.textContent = input.value

    const checkBtn = document.createElement('button')
    checkBtn.classList.add('check-btn')
    todoBlock.appendChild(checkBtn)
    console.log(checkBtn)
    
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    todoBlock.appendChild(deleteBtn)
    console.log(deleteBtn)
    

    todoList.appendChild(todoBlock)
    
}
/* console.log(todoBlock)
todoBlock.textContent = input.value
input.value='' */