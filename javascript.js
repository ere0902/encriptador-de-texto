let textIn = document.getElementById( "text-in" );

let textOut = document.getElementById( "text-out" );

let btnEncrypt = document.getElementById( "btn-encrypt" );

let btnDecrypt = document.getElementById( "btn-decrypt" );

let btnCopiar = document.getElementById( "btn-copy" );

let btnClean = document.getElementById( "btn-clean" );





// -------------------eventos--------------------------  //



textIn.focus();

btnEncrypt.addEventListener("click", encrypt);

btnDecrypt.addEventListener("click", decrypt);

btnCopiar.addEventListener("click", copy);

btnClean.addEventListener('click', clean);



// ------------------funciones-------------------------  //



function validate(text) {

    let validation = Boolean(text.match(/[A-ZÀ-ÖØ-öø-ÿ\u00E0-\u00FC]/));

    return validation;
}


function encrypt() {

    let encryptedText = textIn.value; 

    if (validate(encryptedText) == true) {
        textIn.value = "Sólo letras minúsculas, sin acento, ni carateres especiales";
        setTimeout(clean, 5000); 
    }
    else {

        encryptedText = encryptedText.replace(/e/img, "enter");
        encryptedText = encryptedText.replace(/i/img, "imes");
        encryptedText = encryptedText.replace(/a/img, "ai");
        encryptedText = encryptedText.replace(/o/img, "ober");
        encryptedText = encryptedText.replace(/u/img, "ufat");
        encryptedText = encryptedText.replace(/''/img, "");

        textOut.classList.toggle("radiationS");

        textOut.innerHTML = encryptedText;
        textOut.focus();
    }
    
}


function decrypt() {

    let encryptedText = textIn.value;

    if (validate(encryptedText) == true) {
        textIn.value = "Sólo se aceptan minúsculas y palabras sin acento";
        setTimeout(clean, 5000); 
    }
    else {

        encryptedText = encryptedText.replace (/enter/img, "e");
        encryptedText = encryptedText.replace  (/imes/img, "i");
        encryptedText = encryptedText.replace    (/ai/img, "a");
        encryptedText = encryptedText.replace  (/ober/img, "o");
        encryptedText = encryptedText.replace  (/ufat/img, "u");
        encryptedText = encryptedText.replace    (/''/img,  "");

        textOut.classList.toggle("radiationS");

        textOut.innerHTML = encryptedText;
        textOut.focus();
    }

}


function copy() {

    if (textOut.value !== "") {
        textOut.select(); 
        textOut.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(textOut.value); 
        textOut.innerHTML = "Tu mensaje se ha copiado correctamente";
    }

}


function clean() {

    textIn.value = "";
    textOut.value = "";
    textIn.placeholder = "Ingrese el texto...";
    textOut.placeholder = "No se encontró ningún texto";
    textIn.focus();
    location.reload();

}


