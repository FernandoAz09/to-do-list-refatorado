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


