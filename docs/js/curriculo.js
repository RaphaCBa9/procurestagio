document.addEventListener('DOMContentLoaded', function (event) {

    uls = document.querySelectorAll('.topicos')
    ulformacao = uls[0]
    ulhabilidade = uls[1]
    
    adicionarf = document.querySelector('#addf')
    adicionarf.addEventListener('click', function (event) {
        novaformacao = document.createElement('li')
        novaformacao.className = 'item'
        forma = document.createElement('p')
        forma.setAttribute('contenteditable', 'true')
        novaformacao.appendChild(forma)
        ulformacao.insertBefore(novaformacao, adicionarf)
    })

    adicionarh = document.querySelector('#addh')
    adicionarh.addEventListener('click', function (event) {
        novahabilidade = document.createElement('li')
        novahabilidade.className = 'item'
        habil = document.createElement('p')
        habil.setAttribute('contenteditable', 'true')
        novahabilidade.appendChild(habil)
        ulhabilidade.insertBefore(novahabilidade, adicionarh)
    })
})