'use strict'
//************************************************** */
//***************FUNCIONALIDADES DEL HEADER */
//************************************************* */


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


//***************************** */
//BOTON DESCARGAR IMAGEN
///****************************************



const descarga = document.querySelector(".botonDescargar");
const imgMeme  = document.querySelector(".recuadroMeme");


descarga.addEventListener("click", () =>{
  domtoimage.toBlob(imgMeme)
      .then(function (blob) {
      window.saveAs(blob, 'meme.png');
    });
});


//************************************* */
//************************************* */
//FUNCIONALIDADES DEL PANEL DE IMAGEN
//*************************************** */
//************************************* */

//CAMBIAR IMAGEN CON URL

const imagenMeme = document.querySelector("#colorFondoImg");
const inputurl = document.querySelector("#url-img-input");

inputurl.addEventListener("change", () => {
  imagenMeme.style.backgroundImage = `url("${inputurl.value}")`;
});



//CAMBIAR FONDO 
const color = document.getElementById("colorFondoDiv");
  function cambiarcolor( ){
 
   document.getElementById("colorFondoImg").style.backgroundColor =`${color.value}`;
}

color.addEventListener('input', cambiarcolor)


//CAMBIAR NUMERO DE COLOR DEL FONDO


const spanColorFondo = document.querySelector("#nombreColorFondoDiv");

color.addEventListener('input', () => {
  
  spanColorFondo.textContent = color.value;
});



////---- Tipos de fondo  ---// REVISAR PORQUE NO ANDAN TODOS
const tipoDeFondo = document.querySelector("#tipoDeFondo");

tipoDeFondo.addEventListener("input", () => {
  imagenMeme.style.backgroundBlendMode = tipoDeFondo.value;
});




// FILTROS


/////FILTROS DE IMAGEN/*

const brillo = document.getElementById("brillo");
const opacidad = document.getElementById("opacidad");
const contraste = document.getElementById("contraste");
const desenfoque = document.getElementById("desenfoque");
const grises = document.getElementById("grises");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturado = document.getElementById("saturado");
const negativo = document.getElementById("negativo");

const addFiltros = () =>{
    imagenMeme.style.filter = `brightness(${brillo.value}) 
    opacity(${opacidad.value}) contrast(${contraste.value}%) 
    blur(${desenfoque.value}px) grayscale(${grises.value}%) 
    sepia(${sepia.value}%) hue-rotate(${hue.value}deg) 
    saturate(${saturado.value}%) invert(${negativo.value})`;
};

brillo.addEventListener("change", addFiltros);
opacidad.addEventListener("change", addFiltros);
contraste.addEventListener("change", addFiltros);
desenfoque.addEventListener("change", addFiltros);
grises.addEventListener("change", addFiltros);
sepia.addEventListener("change", addFiltros);
hue.addEventListener("change", addFiltros);
saturado.addEventListener("change", addFiltros);
negativo.addEventListener("change", addFiltros);

//REESTABLECER FILTROS
const botonReestablecer = document.getElementById("btn-reestablecer");
const resetFiltros = () =>{
    brillo.value = 0.5; opacidad.value = 0.5; contraste.value = 100;
    desenfoque.value = 0; grises.value = 0; sepia.value = 0;
    hue.value = 0; saturado.value = 100; negativo.value = 0;
};

botonReestablecer.addEventListener("click", () =>{
    imagenMeme.style.filter = "none";
    resetFiltros();
});





//************************************* */
//************************************* */
//FUNCIONALIDADES DEL PANEL DE TEXTO
//*************************************** */
//************************************* */


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


    //CAMBIAR TAMAÑO DE FUENTE 

    const tamanioFuente = document.getElementById('tamanioFuente');
    
    
    tamanioFuente.addEventListener('input', () =>{
      const selectTamanioFuente = tamanioFuente.value;
      topTitle.style.fontSize = `${selectTamanioFuente}px`;
      bottomTitle.style.fontSize =`${selectTamanioFuente}px`;
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




    //ESPACIADO 
    const espaciado = document.getElementById('espaciado');

    espaciado.addEventListener('input', () =>{
      valorDeEspaciado = espaciado.value;
      topTitle.style.padding = `${valorDeEspaciado}px`;
      bottomTitle.style.padding = `${valorDeEspaciado}px`;
    })


    //INTERLINEADO 
    const interlineado = document.getElementById('interlineado');

    interlineado.addEventListener('input', ()=>{
      valorInterlineado = interlineado.value;
      topTitle.style.lineHeight = `${valorInterlineado}`;
      bottomTitle.style.lineHeight = `${valorInterlineado}`;
    })

