const texto = document.getElementById("texto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const munheco = document.getElementById("munheco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

let reemplazar = [
    ["e", "enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]


const remplace = (nuevoValor) =>{
   mensajeFinal.innerHTML = nuevoValor;
   munheco.style.display = "none";
   texto.value = "";
   rightInfo.style.display = "none";
   botonCopiar.style.display = "block";
   right.classList.add("ajuste");
   mensajeFinal.classList.add("ajuste");
}

botonEncriptar.addEventListener("click", () =>{
    const textoIngresado = texto.value.toLowerCase()
    if(textoIngresado != ""){

        function encriptar(newtext){
            for (let i=0; i < reemplazar.length; i++){
                if(newtext.includes(reemplazar[i][0])){
                    newtext = newtext.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return newtext;
        };
    } else {
        alert("Ingrese texto a encriptar")
    }
   
   // const textoEncriptado = encriptar(textoIngresado);

   remplace(encriptar(textoIngresado));

} 
);

botonDesencriptar.addEventListener("click", () => {
    const textoIngresado = texto.value.toLowerCase();
    if (textoIngresado != ""){
        function desencriptar (newtext){
        for(let i = 0; i < reemplazar.length; i++){
            if (newtext.includes(reemplazar[i][1])) {
                newtext = newtext.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newtext
        }
    } else {
        alert("Ingrese texto a desencriptar")
    }
    
    remplace(desencriptar(textoIngresado));
   
});

 botonCopiar.addEventListener("click", () => {
    let textoIngresado = mensajeFinal;
    //navigator.clipboard.writeText(textoIngresado.value);
    textoIngresado.select();
    document.execCommand('copy');
    alert("Texto Copiado");

    mensajeFinal.innerHTML = "";
    munheco.classList.add("oculto");
    munheco.style.display = "block";
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajuste");
    mensajeFinal.classList.remove("ajuste");
    texto.focus();

 })
