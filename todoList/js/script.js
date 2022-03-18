`use strict`
const mainBtn = document.querySelector('.todo-btn')             // Find main button on site
const input = document.querySelector('.todo-input')             // Find input in site
const todoList = document.querySelector('.todo-list')           // Find section which will have elem from local storage
buildTodo()                                                     // Loading elements from local storage

mainBtn.addEventListener('click',hey)                           // Listener for main button

function hey(e) {                                               // Function for main button
    
    e.preventDefault()                                          // Stop sending form/submit into the server
    
    


    if(input.value == '')return console.log('Enter input value')        // Check value if empty

    const todoBlock = document.createElement('div')                     // Create a new elem div
    todoBlock.classList.add('todo')                                     // Add class for elem div
    
    const todoText = document.createElement('p')                        // Create a new elem p
    todoText.classList.add('todo-text')                                 // Add class for elem p
    todoBlock.appendChild(todoText)                                     // Move it ,push into elem div 
    todoText.textContent = input.value                                  // Add text from input 

    storageInput(input.value)                                           // Add value in function for building todo array in local storage
    
    const checkBtn = document.createElement('button')                   // Create a new elem button for checking
    checkBtn.classList.add('check-btn')                                 // Add class for elem check button
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'            // Add icon in check cell
    todoBlock.appendChild(checkBtn)                                     // Push it in elem div
    
    const deleteBtn = document.createElement('button')                  // Create a new button for deleting
    deleteBtn.classList.add('delete-btn')                               // Add class for delete button
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'       // Add icon in delete cell
    todoBlock.appendChild(deleteBtn)                                    // Push it in elem div
 
    
    todoList.insertBefore(todoBlock, todoList.firstChild);              // Push, move main div in section in first position
    input.value=''                                                      // Refresh value cell, do empty
    
    
    
    
    checkBtn.addEventListener('click', function(){                      // Add listener for check button
        todoBlock.classList.toggle('check')                             // Switcher class for check button
        if(todoBlock.classList.contains('check')){                      // If main div have class 'check' 
            todoList.appendChild(todoBlock)                             // Push main div with elements in the end of list
        }
    })

    deleteBtn.addEventListener('click',function(){                      // Add listener for deleting button
        todoBlock.classList.add('delete-anim')                          // Add class for deleting
        todoList.removeChild(todoBlock)                                 // Remove all main div from list
        
        let todo = JSON.parse(localStorage.getItem('todo'))             // Catch and rewrite array from local storage
        let index = todo.indexOf(input.value)                           // Find index from array with value and indexOf
        todo.splice(todo[index], 1)                                     // Delete value in array with splice
        localStorage.setItem('todo', JSON.stringify(todo))              // Add array 'todo' in local storage
    },once=true)

}


function storageInput(value) {                                          // Local storage with values from input
    let todo                                                            // Add future key for local storage
    if(localStorage.getItem('todo') === null) {                         // If values from key 'todo' is empty
        todo = []                                                       // Create array 'todo'
    }else{
        todo = JSON.parse(localStorage.getItem('todo'))                 // Rewrite array in 'todo' from local storage
    }
    todo.push(value)                                                    // Push value from input in 'todo' array
    localStorage.setItem('todo', JSON.stringify(todo))                  // Create or add in array 'todo' with local storage key 'todo' 
}

function buildTodo() {                                                  // Create todo with values from local storage
    let todo                                                            // Add future key for local storage
    if(localStorage.getItem('todo') === null) {                         // If values from key 'todo' is empty
        todo = []                                                       // Create array 'todo'
    }else{
        todo = JSON.parse(localStorage.getItem('todo'))                 // Rewrite array in 'todo' from local storage
    }
    todo.forEach(function(value){                                       // For each value in array

        const todoBlock = document.createElement('div')                 // repeat blocks
        todoBlock.classList.add('todo')
        
        const todoText = document.createElement('p')
        todoText.classList.add('todo-text')
        todoBlock.appendChild(todoText)
        todoText.textContent = value
    
    
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
            let index = todo.indexOf(value)
            todo.splice(todo[index], 1)
            localStorage.setItem('todo', JSON.stringify(todo))
        },once=true)                                                            // repeat blocks

        
        
    })
}                               

