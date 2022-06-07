

const updateLocalStorage = () => {
    const tasks = tasksContainer.childNodes

    const localStorageTasks = [...tasks].map((task) => {
        const content = task.firstChild
        const description = content.firstChild
        const isCompleted = content.classList.contains("-done")
        const taskId = content.firstChild.id

        return { description: description.innerText, isCompleted, id: taskId }
    })

    localStorage.setItem("tasks", JSON.stringify(localStorageTasks))
}

const refreshTasksUsingLocalStorage = () => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))

    console.log(tasksFromLocalStorage)


    if (!tasksFromLocalStorage) return;

    for (const task of tasksFromLocalStorage) {
        // Criando a div class="task"
        const task_element = document.createElement('div')
        task_element.classList.add('task')

        // Criando a div class="content"
        const taskContent = document.createElement('div')
        taskContent.classList.add('content')


        //Criando o Texto
        const taskText = document.createElement('p')
        taskText.innerText = task.description;

        if (task.isCompleted) {
            taskContent.classList.add('-done')
        }

        // Criando um id com o timeStamp
        const idStamp = idGenerator()
        taskText.setAttribute('id', idStamp)

        taskContent.appendChild(taskText)

        taskContent.addEventListener('click', () => handleClick(taskContent))

        // Criando o botão de DELETE
        const deleteTask = document.createElement('i')
        deleteTask.classList.add('far')
        deleteTask.classList.add('fa-trash-alt')

        deleteTask.addEventListener('click', () => handleDeleteClick(task_element))


        task_element.appendChild(taskContent)
        task_element.appendChild(deleteTask)
        tasksContainer.appendChild(task_element)
    }
}

refreshTasksUsingLocalStorage()