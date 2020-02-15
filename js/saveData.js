
window.onload = listenerBtn();

function listenerBtn() {
    let button = document.getElementById("btnNextAnchor");
    button.addEventListener("click", saveData);
}


function saveData() {
    const local = document.getElementById("whereDlv");
    const largura = document.getElementById("larguraTxt");
    const altura = document.getElementById("alturaTxt");
    const comprimento = document.getElementById("comprimentoTxt");

    if(local) {
        localStorage.setItem("local", local.value);     
    }
   
    if(largura) {
        localStorage.setItem("largura", largura.value);
    }
    
    if(altura) {
        localStorage.setItem("altura", altura.value);    
    }
    
    if(comprimento) {
        localStorage.setItem("comprimento", comprimento.value);
    }
    
}