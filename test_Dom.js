let texT = document.getElementById("p1");
texT.textContent = "je vais au champs";

let texTs = document.getElementById("p2")
texTs.style.color = "red";

let para = document.querySelector(".p3");
para.style.display = "none";


let bouton = document.querySelector(".popu")
let paras = document.querySelector(".p1");

bouton.addEventListener("click", function(){
    paras.textContent = "j'apprends avec chat";
    paras.style.color = "green";
    paras.style.font.size(15);
})