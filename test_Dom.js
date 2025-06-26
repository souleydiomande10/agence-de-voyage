/*let texT = document.getElementById("p1");
texT.textContent = "je vais au champs";

let texTs = document.getElementById("p2")
texTs.style.color = "red";

let para = document.querySelector(".p3");
para.style.display = "none";


let bouton = document.querySelector(".popu");
let paras = document.querySelector(".p1");

bouton.addEventListener("click", function(){
    paras.textContent = "j'apprends avec chat";
    paras.style.color = "green";
    paras.style.fontSize = "35px";
})

let boutons = document.querySelector(".popus");
boutons.style.background = "red";
boutons.addEventListener("click", function(){
    parax.style.color = "red";
})

let boutonx = document.querySelector(".popux");
boutonx.style.background = "blue";
boutonx.addEventListener("click", function(){
    parax.style.color = "blue";
})

let boutonc = document.querySelector(".popuc");
boutonc.style.background = "green";

boutonc.addEventListener("click", function(){
    parax.style.color = "green";
})

let parax   = document.querySelector(".p12");*/

let btnCreate = document.querySelector(".btn-create");
let btnDelete = document.querySelector(".btn-delete");
let zone = document.getElementById("zone");
let paragraphe ;

btnCreate.addEventListener("click", function(){
    if (!paragraphe){
        paragraphe = document.createElement("p");
        paragraphe.textContent = "ceci un paragraphe crée dynamiquement !";
        zone.appendChild(paragraphe);
    }
});

btnDelete.addEventListener("click", function(){
    if(paragraphe){
        zone.removeChild(paragraphe);
        paragraphe = null;
    }
});

let btnAjout = document.querySelector(".btn-Ajoute");
let btndeletes = document.querySelector(".btn-deletes");
let zones = document.getElementById("zones");
let message ;

btnAjout.addEventListener("click", function(){
    if(!message){
        message = document.createElement("p");
        message.textContent = "tu vois ta vis !!!";
        zones.appendChild(message);
    }
})

btndeletes.addEventListener("click", function(){
    if(message){
        zones.removeChild(message);
        message = null;
    }
})

