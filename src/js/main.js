"use strict"

// Função para gerar ID via timestamp
function idGenerator() {
    var timestamp = new Date()
    var id = timestamp.getTime().toString()
    return id
}

const inputElement = document.querySelector('#new-task-input')
const tasksContainer = document.querySelector('#tasks')
const submitTaskButton = document.querySelector('#new-task-submit')
const taskElement = document.querySelector('.task')


const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const task = inputElement.value
    const inputIsValid = validateInput()

    if (!task) {
        alert('Please fill out the task')
        return
    }

    if (!inputIsValid) {
        alert('Please WRITE out the task')
        inputElement.value = ''
        return
    }

    // Criando a div class="task"
    const task_element = document.createElement('div')
    task_element.classList.add('task')

    // Criando a div class="content"
    const taskContent = document.createElement('div')
    taskContent.classList.add('content')

    taskContent.addEventListener('click', () => handleClick(taskContent))

    //Criando o Texto
    const taskText = document.createElement('p')
    taskText.innerText = inputElement.value;
    // Criando um id com o timeStamp
    const idStamp = idGenerator()
    taskText.setAttribute('id', idStamp)

    taskContent.appendChild(taskText)


    // Criando o botão de DELETE
    const deleteTask = document.createElement('i')
    deleteTask.classList.add('far')
    deleteTask.classList.add('fa-trash-alt')

    deleteTask.addEventListener('click', () => handleDeleteClick(task_element))


    task_element.appendChild(taskContent)
    task_element.appendChild(deleteTask)
    tasksContainer.appendChild(task_element)

    inputElement.value = ''

    updateLocalStorage()
}

// Task Done
const handleClick = (taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        const currentTaskIsBeingClicked = task.firstChild === taskContent;

        if (currentTaskIsBeingClicked) {
            task.firstChild.classList.toggle("-done");
        }
    }

    updateLocalStorage();
};

// Task Delete 
const handleDeleteClick = (task_element) => {
    if (task_element.idStamp === task_element.idStamp) {
        task_element.remove()
    }

    updateLocalStorage()
}

//Create task
submitTaskButton.addEventListener('click', () => handleAddTask())
inputElement.addEventListener('keydown', (event) => {
    const tecla = event.key
    if (tecla === 'Enter') handleAddTask()
})