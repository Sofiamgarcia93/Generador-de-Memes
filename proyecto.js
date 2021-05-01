
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


    //CAMBIAR DE FUENTE 

    const selecDeFuente = document.querySelector('#selectTipografias');
    

    selecDeFuente.addEventListener('change', () =>{
      topTitle.style.fontFamily = selecDeFuente.value;
      bottomTitle.style.fontFamily = selecDeFuente.value;
    })


    //CAMBIAR TAMAÑO DE FUENTE NO ME FUNCIONA**********************
    //***************************
     //***************************
      //***************************
       //***************************


    const tamanioFuente = document.getElementById('tamanioFuente');

    tamanioFuente.addEventListener('input', () =>{
      bottomTitle.style.fontSize = tamanioFuente.value;
      bottomTitle.style.fontSize = tamanioFuente.value;
    })

    //ALINEACION FUENTE

    const alineIzquierda = document.querySelector('.left');
    const alineCenter    = document.querySelector('.center');
    const alineDerecha  = document.querySelector('.right');

    alineIzquierda.addEventListener('click', () =>{
      topTitle.style = 'text-align: left;';
      bottomTitle.style = 'text-align: left;';
    })

    alineCenter.addEventListener('click', () =>{
      topTitle.style = 'text-align: center;';
      bottomTitle.style = 'text-align: center;';
    })

    alineDerecha.addEventListener('click', () =>{
      topTitle.style = 'text-align: right;';
      bottomTitle.style = 'text-align: right;';
    })

    //COLOR DEL TEXTO


    const colorDeTexto = document.getElementById('colorDeTexto');
    const refSpanTexto = document.getElementById('refSpanTexto');

    colorDeTexto.addEventListener('input', () =>{
      topTitle.style.color = colorDeTexto.value;
      bottomTitle.style.color = colorDeTexto.value;
      refSpanTexto.textContent = colorDeTexto.value;
    })


    //COLOR DE FONDO

    const colorDeFondo = document.getElementById('colorDeFondo');
    const refSpanFondo = document.getElementById('refSpanFondo');


    colorDeFondo.addEventListener('input', () =>{
      topTitle.style.backgroundColor = colorDeFondo.value;
      bottomTitle.style.backgroundColor = colorDeFondo.value;
      refSpanFondo.textContent = colorDeFondo.value;

    })



    //FONDO TRANSPARENTE

    const fondoTransparente = document.getElementById('fondoTransparente');

    fondoTransparente.addEventListener('change', () =>{
      if(fondoTransparente.checked){
        topTitle.style.backgroundColor = 'transparent';
        bottomTitle.style.backgroundColor = 'transparent';
      }else{
        topTitle.style.backgroundColor = colorDeFondo.value;
        bottomTitle.style.backgroundColor = colorDeFondo.value;
      }
    })



    //CONTORNO

    const contornoNinguno = document.querySelector('.ninguno');
    const contornoClaro = document.querySelector('.claro');
    const contornoOscuro = document.querySelector('.oscuro');


    contornoOscuro.addEventListener('click', () =>{
      topTitle.style = '-webkit-text-stroke: 2px black;'
      bottomTitle.style = '-webkit-text-stroke: 2px black;'
    })

    contornoClaro.addEventListener('click', () =>{
      topTitle.style = '-webkit-text-stroke: 2px;'
      bottomTitle.style = '-webkit-text-stroke: 2px;'
    })

    contornoNinguno.addEventListener('click', () =>{
      topTitle.style = '-webkit-text-stroke:none;'
      bottomTitle.style = '-webkit-text-stroke:none;'
    })




    //ESPACIADO NO ME SALEEEEEEEEEEEEEEEEE
    //********************
    //********************
    //********************
    //********************
    //************************ */ */
    //********************
    const espaciado = document.getElementById('espaciado');

    espaciado.addEventListener('input', () =>{
      topTitle.style.paddingTop = espaciado.value;
    })


    //INTERLINEADO NI IDEA COMO HACERLO
    //********************
    //********************
    //********************
    //********************
    //************************ */ */
    //********************
    const interlineado = document.getElementById('interlineado');

