let input = document.getElementById("inputText")
let button = document.getElementById("btnAdd")
let lista = document.getElementById("listaUl")
let btnDel = document.getElementsByClassName("delete")
let itens = document.getElementsByTagName("li")


function createListItens() {
    if (input.value == "") {
        alert("Você deve preencher o campo antes de adicionar :D")
    } else {
        let li = document.createElement("li")

        let xButton = document.createElement("button")
        xButton.innerHTML = "X"
        xButton.className = "delete"
        
        li.appendChild(xButton)

        let valueText = document.createTextNode(input.value)
        
        li.appendChild(valueText)
        
        lista.appendChild(li)    
        
        
        input.value = ""
        
        itensEvents()
    }
}

button.addEventListener("click", createListItens)

function deleteListItens(){
    this.parentElement.remove();
}

function itensEvents() {
    for (let i = 0; i < itens.length; i++ ) {
        btnDel[i].addEventListener("click", deleteListItens)
    }
}

itensEvents()
