// Função para gerar ID via timestamp
function idGenerator() {
    var timestamp = new Date()
    var id = timestamp.getTime().toString()
    return id
}

const inputElement = document.querySelector('#new-task-input')
const taskList = document.querySelector('#tasks')
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
    const task_content = document.createElement('div') 
    task_content.classList.add('content')

    task_content.addEventListener('click', () => handleClick(task_content))

    //Criando o Input
    const task_input_element = document.createElement('input') 
    task_input_element.classList.add('text')
    task_input_element.type = 'text'
    task_input_element.value = inputElement.value
    task_input_element.setAttribute('readonly', 'readonly')

    task_content.appendChild(task_input_element)

    // Criando um id com o timeStamp
    const idStamp = idGenerator()
    task_input_element.setAttribute('id', idStamp) 

    // Criando o botão de DELETE
    const deleteTask = document.createElement('i')
    deleteTask.classList.add('far')
    deleteTask.classList.add('fa-trash-alt')

    deleteTask.addEventListener('click', () => handleDeleteClick(task_element))


    task_element.appendChild(task_content)
    task_element.appendChild(deleteTask)

    taskList.appendChild(task_element)
    inputElement.value = ''
}

// Task Done
const handleClick = (task_content) => {
    if (task_content.className === 'content') {
        task_content.classList.add('-done')
    } else {
        task_content.classList.remove('-done')
    }
}

// Task Delete 
const handleDeleteClick = (task_element) => {
    if (task_element.idStamp === task_element.idStamp) {
        task_element.remove()
    }

}

//Create task

submitTaskButton.addEventListener('click', () => handleAddTask())