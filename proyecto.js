
/*

const panel = document.querySelector("#panel");
      const buttonClose = document.querySelector("#button-close");

      //cuando hago click en boton de cerra se cierra el panel(aside completo)
      //agregar la clase ocular
      
      buttonClose.addEventListener("click",()=>{
        panel.classList.add("ocultar");
      });
const panel = document.querySelector("#panel");
      const panelImg = document.querySelector("#panel-img");
      const panelText = document.querySelector("#panel-text");

      const buttonClose = document.querySelector("#button-close");
      const buttonImg = document.querySelector("#button-img");
      const buttonText = document.querySelector("#button-text");


   


    


     

      //cuando hago click en boton de cerra se cierra el panel(aside completo)
      //agregar la clase ocular

      buttonClose.addEventListener('click', () => {
        panel.classList.add('ocultar');
      });

      // cuando hago click en el boton de imagen o en el boton texto debe verse el panel
      // quitar la clase ocular

      // cuando click al boton text abrir el panel,se ve la section de texto
      // y se oculta la imagen
      // se ve img y texto
      // se ve img
      //
    */


  //ELEMENTOS DE BOTON CLARO OSCURO 
  const boton = document.getElementById('boton');
  const textInfo = document.getElementById('textInfo');
  const body = document.querySelector('body');

 //EVENTO QUE CAMBIA DE MODO CLARO A MODO OSCURO
  boton.addEventListener("click",()=>{
            body.classList.toggle("modoOscuro");
            body.classList.toggle("modoClaro");
            if(textInfo.textContent == "Modo Oscuro"){
              textInfo.textContent = "Modo Claro";
            }else{
              textInfo.textContent = "Modo Oscuro";
            }
        })

//ELEMENTOS DE PANELES
  const panel = document.getElementById("panelAside");
  const panelImg = document.getElementById("panelImg");
  const panelText = document.getElementById("panelText");

//ELEMENTOS DEL BOTON CLOSE TEXT E IMG
  const buttonClose = document.querySelector("#buttonClose");
  const buttonImg = document.querySelector("#button-img");
  const buttonText = document.querySelector("#button-text");


//EVENTO PARA CERRAR Y ABRIR LOS PANELES
 
  buttonText.addEventListener("click",()=>{
          panel.classList.remove("ocultar");
          panelImg.classList.add("ocultar");
          panelText.classList.remove("ocultar");
        });
  
  buttonImg.addEventListener("click",()=>{
          panel.classList.remove("ocultar");
          panelText.classList.add("ocultar");
          panelImg.classList.remove("ocultar");
        })

  buttonClose.addEventListener("click",()=>{
          panel.classList.add("ocultar");
        });

//ELEMENTOS DEL TOP TITLE
  const topTitle = document.querySelector(".meme-text");
  const topText = document.getElementById("topText");
  const bottomText = document.getElementById("bottomText")
  const bottomTitle = document.querySelector(".bottom");
  
//EVENTO DE INPUT TOP      
   topText.addEventListener("input", () =>{
       topTitle.innerText = topText.value;
        });

//EVENTO DE INPUT  BOTTOM     
bottomText.addEventListener("input", () =>{
  bottomTitle.innerText = bottomText.value;
   });

//ELEMENTOS PARA OCULTAR TEXTO ARRIBA

const checkboxSup = document.getElementById ("checkTopTex");

//EVENTO PARA OCULTAR TEXTO DE ARRIBA


checkboxSup.addEventListener('change',() =>{
  if(checkboxSup.checked){
topTitle.classList.add("ocultar");
topText.disabled = true;
  }else{
    topTitle.classList.remove("ocultar");
    topText.disabled = false;
  }
  
})


//ELEMENTOS PARA OCULTAR TEXTO ABAJO

const checkboxInferior = document.getElementById ("checkBottomTex");

//EVENTO PARA OCULTAR TEXTO DE ABAJO


checkboxInferior.addEventListener('change',() =>{
  
  if(checkboxInferior.checked){
    bottomTitle.classList.add("ocultar");
    bottomText.disabled = true;
      }else{
        bottomTitle.classList.remove("ocultar");
        bottomText.disabled = false;
      }
      
    })
