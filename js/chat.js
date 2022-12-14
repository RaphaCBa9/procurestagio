document.addEventListener('DOMContentLoaded', function(event) {
    enviar = document.querySelector('.botao-enviar')
    body = document.querySelector('body')
    enviar.addEventListener('click', function (event) {
        input = document.querySelector('.entrada-msg').value
        event.preventDefault()
        msg = document.createElement('section')
        msg.className = 'msg-resposta'
        titulo = document.createElement('div')
        titulo.className = 'msg-titulo-invertida'
        msg.appendChild(titulo)
        nome = document.createElement('h2')
        nome.innerHTML = 'Você'
        nome.className = 'h2-chat'
        horario = document.createElement('h3')
        horario.innerHTML = 'Horário'
        horario.className = 'h3-chat'
        titulo.appendChild(nome)
        titulo.appendChild(horario)
        bolha = document.createElement('div')
        bolha.className = 'bolha-usuario'
        msg.appendChild(bolha)
        texto = document.createElement('p')
        texto.innerHTML = input
        bolha.appendChild(texto)
        not = document.createElement('span')
        not.setAttribute('id', 'notificacao-msg-nova')
        main = document.querySelector('.msg-panel')
        main.appendChild(msg)
    })
})