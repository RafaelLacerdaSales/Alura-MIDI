function tocasom(seleorAudio) {
   const elemento = document.querySelector(seleorAudio);

   if(elemento === null){
}
    if (elemento != null && elemento.localName === 'audio') {
       elemento.play(); 
    }
    else{
         // alert('Elemento não encontrado');
    console.log('Elemento não encontrado');
    }
    }

const listadeteclas = document.querySelectorAll('.tecla');

//para
for(let contador = 0; contador < listadeteclas.length; contador++) {
    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocasom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space'|| evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
    
}
