`use strict`
const mainBtn = document.querySelector('.todo-btn')
const input = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')
document.addEventListener('DOMContentLoaded', buildTodo)

let sum = 0
mainBtn.addEventListener('click',hey)

function hey(e) {
    
    e.preventDefault()
    
    


    if(input.value == '')return console.log('Enter input value')

    const todoBlock = document.createElement('div')
    todoBlock.classList.add('todo')
    
    const todoText = document.createElement('p')
    todoText.classList.add('todo-text')
    todoBlock.appendChild(todoText)
    todoText.textContent = input.value

    storageInput(input.value)

    const checkBtn = document.createElement('button')
    checkBtn.classList.add('check-btn')
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoBlock.appendChild(checkBtn)
    
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    todoBlock.appendChild(deleteBtn)
 
    
    todoList.insertBefore(todoBlock, todoList.firstChild);
    input.value='' 
    
    
    
    
    checkBtn.addEventListener('click', function(){
        todoBlock.classList.toggle('check')
        if(todoBlock.classList.contains('check')){
            todoList.appendChild(todoBlock)
        }
    })

    deleteBtn.addEventListener('click',function(){
        todoBlock.classList.add('delete-anim')
        todoList.removeChild(todoBlock)
        
        let todo = JSON.parse(localStorage.getItem('todo'))
        let index = todo.indexOf(input.value)
        todo.splice(todo[index], 1)
        // todo = []
        localStorage.setItem('todo', JSON.stringify(todo))
        // setInterval(del, 500)
        // removeTodo()
    },once=true)

    function del() {
        todoList.removeChild(todoBlock)
    }
}


function storageInput(value) {
    let todo
    if(localStorage.getItem('todo') === null) {
        todo = []
    }else{
        todo = JSON.parse(localStorage.getItem('todo'))
    }
    todo.push(value)
    // todo = []
    localStorage.setItem('todo', JSON.stringify(todo))
}

function buildTodo() {
    let todo
    if(localStorage.getItem('todo') === null) {
        todo = []
    }else{
        todo = JSON.parse(localStorage.getItem('todo'))
    }
    todo.forEach(function(todos){

        const todoBlock = document.createElement('div')
        todoBlock.classList.add('todo')
        
        const todoText = document.createElement('p')
        todoText.classList.add('todo-text')
        todoBlock.appendChild(todoText)
        todoText.textContent = todos
    
    
        const checkBtn = document.createElement('button')
        checkBtn.classList.add('check-btn')
        checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        todoBlock.appendChild(checkBtn)
        
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn')
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        todoBlock.appendChild(deleteBtn)
     
        
        todoList.insertBefore(todoBlock, todoList.firstChild);


        checkBtn.addEventListener('click', function(){
            todoBlock.classList.toggle('check')
            if(todoBlock.classList.contains('check')){
                todoList.appendChild(todoBlock)
            }
        })
    
        deleteBtn.addEventListener('click',function(){
            todoBlock.classList.add('delete-anim')
            todoList.removeChild(todoBlock)
            
            let todo = JSON.parse(localStorage.getItem('todo'))
            let index = todo.indexOf(todos)
            todo.splice(todo[index], 1)
            // todo = []
            localStorage.setItem('todo', JSON.stringify(todo))
            // setInterval(del, 500)
            // removeTodo()
        },once=true)
        
        
        
    })
}

