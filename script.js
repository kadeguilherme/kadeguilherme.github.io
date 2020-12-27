body = document.body
burguerMenu = document.querySelector('.b-menu');
main= document.querySelector('main');
nav = document.querySelector('nav');
tab = document.querySelector('.tab');

burguerMenu.addEventListener(
    'click',
    function(){
    burguerMenu.classList.toggle('open');
    nav.classList.toggle('open');
    tab.classList.toggle('open');
        }
    );

    main.addEventListener(
        'click',
        function(){
        if(nav.classList.contains('open')){   
            burguerMenu.classList.remove('open');
            nav.classList.remove('open');
            tab.classList.remove('open');
         
        }
            
    }
        );

document.querySelector('[data-switch-dark]').addEventListener(
    'click',
    function(){
        document.body.classList.toggle('dark');

        if(body.classList.contains('dark')){
            console.log("1");
            animationImage.playSegments([0,55]);
         
        }else{

            animationImage.playSegments([55,90]);
        }
    }
);

document.querySelector('[data-switch-dark-imagem]').addEventListener(
    'click',
    function(){
        document.body.classList.toggle('dark');
      
        if(body.classList.contains('dark')){
            console.log("1");
            animationImage.playSegments([0,55]);
        }else{
              
            animationImage.playSegments([55,90]);
        }
    }
);


const barra = document.querySelector(".barra");
const links = document.querySelectorAll("nav a");
const colors = ["deepskyblue", "firebrick", "magenta", "black", "darkblue", "coral","Purple", "navy"
];

var him = 0;
var colorHim = colors[Math.floor(Math.random() * colors.length)];

links[0].parentNode.classList.add("ativado");
if(links[0].parentNode.classList.contains("ativado")){
        barra.style.width = `${links[0].getBoundingClientRect().width}px`;
        barra.style.height = `${links[0].getBoundingClientRect().height}px`;
        barra.style.left = `${links[0].getBoundingClientRect().left}px`;
        barra.style.top = `${links[0].getBoundingClientRect().top}px`;
        barra.style.borderColor = colorHim;
        links[1].style.opacity = "0.25";
        links[2].style.opacity = "0.25";
       
    }





for(let i = 0; i< links.length; i++ ){
    links[i].addEventListener("click", linkSelecionado);
    links[i].addEventListener("mouseenter",mouseenterFunc);
    links[i].addEventListener("mouseleave",mouseleaveFunc);
   
}



function linkSelecionado(){

    for(him = 0; him< links.length; him++ ){
        if(links[him].parentNode.classList.contains("ativado")){
            
            links[him].parentNode.classList.remove("ativado");
            links[him].style.opacity = "0.25";
            break;
        }
    }
    this.parentNode.classList.add("ativado");
    this.style.opacity = "1";

    let width = this.getBoundingClientRect().width;
    let height = this.getBoundingClientRect().height;
    let left = -this.getBoundingClientRect().left * -1;
    let top = this.getBoundingClientRect().top;
    let color = colors[Math.floor(Math.random() * colors.length)];
    colorHim = color;

    barra.style.width = `${width}px`;
    barra.style.height = `${height}px`;
    barra.style.left = `${left}px`;
    barra.style.top = `${top}px`;
    barra.style.borderColor = color;
}

function mouseenterFunc() {
    for(let i = 0; i<links.length; i++){
        if(links[i].parentNode.classList.contains("ativado")){
            links[i].parentNode.classList.remove("ativado");
       
        }
        links[i].style.opacity = "0.25";
        links[i].style.transition ="all 0.7s";
    }
    this.parentNode.classList.add("ativado");

    this.style.opacity = "1";
    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left;
    const top = this.getBoundingClientRect().top;
    let color = colors[Math.floor(Math.random() * colors.length)];
    
    barra.style.width = `${width}px`;
    barra.style.height = `${height}px`;
    barra.style.left = `${left}px`;
    barra.style.top = `${top}px`;
    barra.style.borderColor = color;
    barra.style.transform = "none";

}

function mouseleaveFunc(){
    for(let i = 0; i< links.length; i++){
        if(i != him){
            links[i].style.opacity = "0.25";

        }
    }
  
    links[him].parentNode.classList.add("ativado");

    links[him].style.opacity = "1";

    let width = links[him].getBoundingClientRect().width;
    let height = links[him].getBoundingClientRect().height;
    let left = links[him].getBoundingClientRect().left;
    let top = links[him].getBoundingClientRect().top;
    
   
    barra.style.width = `${width}px`;
    barra.style.height = `${height}px`;
    barra.style.left = `${left}px`;
    barra.style.top = `${top}px`;
    barra.style.borderColor = colorHim;
    
    barra.style.transform = "none";
}

//ANIMATION SCRIPT
var animacao = document.querySelector("#imagem");

let animationImage = bodymovin.loadAnimation({
    container: animacao,
    renderer:'svg',
    loop: false,
    autoplay: false,
    path: 'img/animation-page.json'
})






