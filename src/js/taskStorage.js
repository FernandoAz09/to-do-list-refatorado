
// Criando o localStorage
const updateLocalStorage = () => {
    const tasks = tasksContainer.childNodes //Recebendo todos os filhos de tasks = div.task
    const localStorageTasks = [...tasks].map((task) => { //espalhando essa div.tasks e criando um array de task
        const content = task.firstChild //pegando o filho de task = div.content
        const description = content.firstChild // pegando o filho de content = p
        const isCompleted = content.classList.contains("-done") // verificado classe
        const taskId = content.firstChild.id // pegando o id do filho do content = p#idStamp()

        return { description: description.innerText, isCompleted, id: taskId } // formatando as inf que vou levar para o localStorage
    })

    localStorage.setItem("tasks", JSON.stringify(localStorageTasks)) // Salvando no localStorage como STRING(ele só recebe assim)
}


// Trazendo do localStorage para a tela
const refreshTasksUsingLocalStorage = () => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) // Pegando as tasks que salvei em localStorage 

    if (!tasksFromLocalStorage) return; // Checando se tem localStorage.. se não NULL

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
            taskContent.classList.add('-done') //Checando se já vem DONE
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