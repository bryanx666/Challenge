
function contieneMayusculasOTildes(texto) {
    return /[ÁÉÍÓÚÜÑÁÉÍÓÚ]/.test(texto) || texto !== texto.toLowerCase();
}

function encriptar() {
    let texto = document.getElementById("textoBase").value;
    
    if (contieneMayusculasOTildes(texto)) {
        ocultarElemento("resultado");
        mostrarElemento("imgError");
        return;
    }

    texto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    
    document.getElementById("resultado").value = texto;
    mostrarElemento("resultado");
    ocultarElemento("imgError");
}

function desencriptar() {
    let texto = document.getElementById("textoBase").value;
    
    if (contieneMayusculasOTildes(texto)) {
        ocultarElemento("resultado");
        mostrarElemento("imgError");
        return;
    }

    texto = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    
    document.getElementById("resultado").value = texto;
    mostrarElemento("resultado");
    ocultarElemento("imgError");
}

function ocultarElemento(id) {
    document.getElementById(id).style.display = "none";
}

function mostrarElemento(imgError) {
    document.getElementById(imgError).style.display = "block";
}

function copiar() {
    navigator.clipboard.writeText(document.getElementById('resultado').value)
}

/* Estos son algunos de los metodos que utilice para intentar mostrar la imagen del error sin embargo no funcionaron como se esperaba.

function mostrarImagenError() {
    var x = document.getElementById('imgError');
    var resultadoTextArea = document.getElementById('resultado');
    var textoBase = document.getElementById('textoBase').value;

    if (/[ÁÉÍÓÚÜÑ]/.test(textoBase) || textoBase !== textoBase.toLowerCase()) {
        x.style.display = 'block';
        resultadoTextArea.style.display = 'none';
    } else {
        x.style.display = 'none';
        resultadoTextArea.style.display = 'block';
    }
}
*/

/*
function ocultarTextArea(bool){
    let divTextArea = document.getElementsByClassName('result');
    let divImg = document.getElementById('imgError');

    if (bool){
        divTextArea.style.display = "none";
        divImg.style.display = "block";
    }else{
        divTextArea.style.display = "block";
        divImg.style.display = "none";
    }
}
*/