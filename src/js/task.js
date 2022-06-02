// Enxergando os elementos do HTML

window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')

    // Iniciando os eventos do CRUD
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const task = input.value

        if (!task) {
            alert('Please fill out the task')
            return
        }

        // ------------------- CREATE/READ -------------------
        const task_el = document.createElement('div')
        task_el.classList.add('task')
        

        const task_content_el = document.createElement('div')
        task_content_el.classList.add('content')

        task_el.appendChild(task_content_el)

        const task_input_el = document.createElement('input')
        task_input_el.classList.add('text')
        task_input_el.type = 'text'
        task_input_el.value = task
        task_input_el.setAttribute('readonly', 'readonly')
        task_input_el.setAttribute('id', idGenerator())

        task_content_el.appendChild(task_input_el)

        const task_actions_el = document.createElement('div')
        task_actions_el.classList.add('actions')

        const task_done_el = document.createElement('button')
        task_done_el.classList.add('done')
        const done_button = document.createElement('span')
        done_button.classList.add('material-symbols-outlined')
        done_button.textContent = 'check_circle'


        const task_edit_el = document.createElement('button')
        task_edit_el.classList.add('edit')
        task_edit_el.innerHTML = 'Edit'
        
        const task_delete_el = document.createElement('button')
        task_delete_el.classList.add('delete')
        const delete_button = document.createElement('span')
        delete_button.classList.add('material-symbols-outlined')
        delete_button.textContent = 'delete'

        task_actions_el.appendChild(task_done_el)
        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task_delete_el)

        task_done_el.appendChild(done_button)
        task_delete_el.appendChild(delete_button)


        task_el.appendChild(task_actions_el)

        list_el.appendChild(task_el)

        input.value = ''


        // ------------------- UPDATE -------------------
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerHTML.toLowerCase() === 'edit') {
                task_input_el.removeAttribute('readonly')
                task_input_el.focus()
                task_edit_el.innerHTML = 'Save'
            } else {
                task_input_el.setAttribute('readonly', 'readonly')
                task_edit_el.innerHTML = 'Edit'
            }
        })

        // ------------------- DONE -------------------

        done_button.addEventListener('click', () => {
            if (task_content_el.className === 'content') {
                task_content_el.classList.add('-done')
                task_actions_el.removeChild(task_edit_el)
                
            } else {
                task_content_el.classList.remove('-done')
                task_actions_el.appendChild(task_edit_el)
                task_actions_el.appendChild(task_delete_el)
            }        
        })


        // ------------------- DELETE -------------------
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })
    })
})
