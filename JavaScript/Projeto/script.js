let input = document.getElementById("inputText")
let button = document.getElementById("btnAdd")
let lista = document.getElementById("listaUl")
let btnDel = document.getElementById("delete")

function createListItens() {
    let li = document.createElement("li")

    let xButton = document.createElement("button")
    
    xButton.innerHTML = "X"
    xButton.className = "delete"
    
    li.appendChild(xButton)

    let valueText = document.createTextNode(input.value)
    
    li.appendChild(valueText)
     
    lista.appendChild(li)    
    
    
    input.value = ""
}

button.addEventListener("click", createListItens)

function deleteListItens() {
    
}

btnDel.addEventListener("click", deleteListItens)
