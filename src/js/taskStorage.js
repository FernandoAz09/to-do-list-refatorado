// Função para gerar ID via timestamp
function idGenerator() {
    var timestamp = new Date()
    var id = timestamp.getTime().toString()
    return id
}

let bdLocalStorage = [
    {'task_txt': 'Estudar JS', 'status': ''},
    {'task_txt': 'Estudar CSS', 'status': '-done'}
]


// -------------------------------- CRIAR TASK --------------------------------

const criarTask = (taskTxt, status) => {
    const task = document.createElement('div');
    task.classList.add('task')
    task.innerHTML = `
        <div class="content ${status}">
        <input
            id=${idGenerator()}
            type="text"
            class="text"
            value="${taskTxt}"
            readonly />
        </div>
        <div class="actions">
            <button class="done">
                <span class="material-symbols-outlined">
                    check_circle
                </span>
            </button>
            <button class="edit">
                Edit
            </button>
            <button class="delete">
                <span class="material-symbols-outlined">
                    delete
                </span>
            </button>
    `
    document.getElementById('tasks').appendChild(task)
}


// -------------------------------- Update localStorage list --------------------------------
const  tasksClear = () => {
    const tasksList = document.getElementById('tasks')
    while (tasksList.firstChild) {
        tasksList.removeChild(tasksList.lastChild)
    }
}


// -------------------------------- Update Screen list --------------------------------
const updateScreen = () => {
    tasksClear()
    bdLocalStorage.forEach (task => criarTask (task.task_txt, task.status, task.id))
}

updateScreen(console.log(bdLocalStorage))