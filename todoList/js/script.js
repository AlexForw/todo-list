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
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoBlock.appendChild(checkBtn)
    
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    todoBlock.appendChild(deleteBtn)
 
    

    todoList.appendChild(todoBlock)
    input.value='' 

    
    checkBtn.addEventListener('click', function(){
        todoBlock.classList.toggle('check')
    })

    deleteBtn.addEventListener('click',function(){
        todoList.removeChild(todoBlock)
    })
}

