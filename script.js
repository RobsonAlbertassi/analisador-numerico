var resultado = document.getElementById("res")
var numeros = []

function adicionar(){
    var numero = document.getElementById("txtnum")
    num = Number(numero.value)
    var item = document.createElement("option")
    var tab = document.getElementById("tab")

    if (verificaNumero(num) && verificaLista(num, numeros)){
        numAdcionado(num)
        item.text = `Número ${num} adicionado`
        tab.appendChild(item) 
        resultado.innerHTML = ""  
    }else{
        window.alert("Valor inválido ou já inserido na lista")
    }

    numero.value = ""
    numero.focus()
}   

function finalizar(){
    if(numeros.length == 0){
        window.alert("Necessário adicionar valores antes de continuar!!")
    }else{
        let total = numeros.length
        let menorValor = numeros[0]
        let maiorValor = numeros[0]
        let soma = 0

        for(let pos in numeros){
            soma += numeros[pos]
            
            if(numeros[pos] > maiorValor){
                maiorValor = numeros[pos]
            }
            if(numeros[pos] < menorValor){
                menorValor = numeros[pos]
            }
        }

        let media = soma/total

        resultado.innerHTML = ""
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor encontrado é ${maiorValor}.`
        resultado.innerHTML += `<p>O menor valor encontrado é ${menorValor}.`
        resultado.innerHTML += `<p>A soma dos valores é ${soma}`
        resultado.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}`
    }
}

function numAdcionado(num){
    numeros.push(num)
}

function verificaNumero(num){
    if (num >= 1 && num <= 100){
        return true
    }
    else{
        return false
    } 
}

function verificaLista(num, numeros){
    if (numeros.indexOf(num) == -1){
        return true
    }else{
        return false
    }
}


