window.onload = loadData();

function loadData() {
    let hasProdDim = document.getElementById("produtoDimensoes");
    let hasEndereco = document.getElementById("enderecoEntrega");
debugger;
    if (hasEndereco) {
        hasEndereco.appendChild(document.createTextNode(localStorage.getItem("local")));
    }

    debugger;

    if(hasProdDim) {
        hasProdDim.appendChild(document.createTextNode(`Produto de ${localStorage.getItem("largura")!==null?localStorage.getItem("largura"):15}cm X ${localStorage.getItem("altura")!==null?localStorage.getItem("altura"):15}cm X ${localStorage.getItem("comprimento")!==null?localStorage.getItem("comprimento"):15}cm`));
    }
}