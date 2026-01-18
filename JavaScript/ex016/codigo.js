function calcular() {
    var inicio = document.getElementsByName('inicio')[0]
    var fim =  document.getElementsByName('fim')[0]
    var passo = document.getElementsByName('passo')[0]
    var resposta = document.getElementById('res')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    resposta.innerHTML = ''

    if (p <= 0) {
        window.alert('Passo invalido')
    }

    if (i < f) {
        for (var c = i; c <= f; c+=p) {
        resposta.innerHTML += `${c}  👉 `
    }
    }else {
        for(var c = i; c >=f; c -= p) {
            resposta.innerHTML += `${c} 👉`
        }
    }
    resposta.innerHTML += '🏁'
}