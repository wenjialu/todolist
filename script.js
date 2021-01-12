const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUL = document.getElementById("todos")

// storage.    change string to array
const todos = JSON.parse(localStorage.getItem("todos"))

if (todos){
    todos.forEach(todo => addToDo(todo))
}


form.addEventListener("submit",(e) => {
    e.preventDefault()
    addToDo()
})

function addToDo(todo){
    let todoText = input.value

    // //localstorage 取数据的时候，取出的todo。
    // if(todo){
    //     todoText = todo.text 
    // }

    if(todoText){
        const todoEL = document.createElement("li")
        if(todo && todo.completed){
            todoEL.classList.add("completed")
        }

        todoEL.innerText = todoText

        // mark completed
        todoEL.addEventListener("click",()=>{
            todoEL.classList.toggle("completed")
            updateLS()
        })

        // remove 
        todoEL.addEventListener("contextmenu",(e)=>{
            e.preventDefault()
            todoEL.remove()
            updateLS()
        })
        
        // add
        todosUL.appendChild(todoEL)
        console.log(todosUL)
        input.value = ""

        updateLS()

    } }


function updateLS(){
    todosEL = document.querySelectorAll("li")
    
    const todos = []

    todosEL.forEach(todoEL => {
        todos.push({
            text: todoEL.innerText,
            completed: todoEL.classList.contains("completed")
        })
    })
    // todos is an object, change it to string
    localStorage.setItem("todos",JSON.stringify(todos))
}
