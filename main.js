addEventListener("DOMContentLoaded", (e)=>{

    document.querySelector('.content h2').insertAdjacentText("afterbegin", "PlantStore.");
    document.querySelector('.content ul li:nth-of-type(1) a ').insertAdjacentText("afterbegin", "Sobre Nosotros");
    document.querySelector('.content ul li:nth-of-type(2) a ').insertAdjacentText("afterbegin", "Equipo");
    document.querySelector('.content ul li:nth-of-type(3) a ').insertAdjacentText("afterbegin", "Galeria");
    document.querySelector('.content ul li:nth-of-type(4) a ').insertAdjacentText("afterbegin", "App");
    document.querySelector('.content ul li:nth-of-type(5) a ').insertAdjacentText("afterbegin", "Blog");
    document.querySelector('.content ul li:nth-of-type(6) a ').insertAdjacentText("afterbegin", "Contactanos");
    
    document.querySelector('.main h3').insertAdjacentText("afterbegin", "Dale vida");
    document.querySelector('.main h1').insertAdjacentText("afterbegin", "A tus espacios de");
    document.querySelector('.main h4').insertAdjacentText("afterbegin", "Trabajo");
    document.querySelector('.main p').insertAdjacentText("afterbegin", "Subcribete a mi canal para más información");
    document.querySelector('.main button').insertAdjacentText("afterbegin", "Ver más");


    let data = ["Facebook","Twitter", "Instagram", "Twitch", "Youtube", "Tiktok"];
   
    data.forEach((elemento, index) => {
        document.querySelector(`.sidebar .box:nth-of-type(${index+1}) .text`).insertAdjacentHTML("afterbegin",elemento);
    });


  
   

    

})