const input_Area = document.querySelector("#input1")
const check_Button = document.querySelector("#button1")
const footer_Div = document.querySelector("#todo")

check_Button.addEventListener("click",addToDoList)

function addToDoList() {
    const task = input_Area.value.trim()
    if(input_Area.value.trim() === "") return;
    const todoDiv = document.createElement("div")
    const item = document.createElement("p")
    item.classList.add(
        "h-20",
        "w-[70vw]",
        "border",
        "border-gray-400",
        "px-4",
        "rounded",
        "text-purple-800",
        "font-bold",
        "flex",
        "items-center",
        "bg-white"
    )
    todoDiv.classList.add(
        "flex",
        "gap-4"
    )
    item.innerHTML = task;
    todoDiv.appendChild(item)
    footer_Div.appendChild(todoDiv)
    input_Area.value = ""

    const delete_Button = document.createElement("button")
    todoDiv.appendChild(delete_Button)
    delete_Button.innerHTML = "🚮"
    delete_Button.classList.add(
        "text-5xl",
        "h-20",
        "hover:scale-150",
    )

    delete_Button.addEventListener("click", () =>{
        todoDiv.remove()
        deleteFromLocalStorage(task)
    })
    saveToLocalStorage(task)
    input_Area.value = ""
}

function deleteFromLocalStorage(taskToDelete){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.filter(task => task !== taskToDelete)
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function saveToLocalStorage(saveToLocalStorage){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.push(task)
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
