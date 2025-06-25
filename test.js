//let prenom = "souleymane";
//console.log(prenom);

//const pays = "côte d'ivoire"
//console.log(pays)

//let age = 29
//console.log(age)

//console.log("prenom : " + prenom)
//console.log("age : " + age)
//console.log("pays : " + pays)

//let nom = "DIOMANDE"
//let ville = "Abobo"

//console.log("je m'appelle " + nom + " et je vis à " + ville)


//console.log(`je m'appelle ${nom} et je vis à ${ville}`);


/*let pays = "albanie"
let année = 2025
let etudiant= true
console.log(typeof pays)
console.log(typeof année)
console.log(typeof etudiant)*/

/*let c = 35
let z = 5

console.log(c + z) // pour l'addition
console.log(c - z) // pour la soustraction
console.log(z * c) // pour la multiplication
console.log(c / z) // pour la division
console.log(c % z) // pour le reste de la division
console.log(c ** z) // pour l'exponentiation
console.log(z ** c) // pour l'exponentiation

let prenom = "souleymane"
let message = `Bonjour ${prenom}`
console.log(message)*/

/*let x = 12
let y = 5

console.log(x + y)
console.log(x * y)
console.log(x % y)

let nom = "Boss"
let namet = `Bienvenue ${nom}`
console.log(namet)*/



/*let prenom = "daouda"
let age = 30
let ville ="Daloa"
let voleur = false
console.log("Salut je suis " + prenom + " ,j'ai " + age + " ans et je vis à " + ville)
let desl = `Bienvenue a toi, ${prenom}`
console.log(desl)

console.log(typeof prenom) // string
console.log(typeof age) // number
console.log(typeof ville) // string
console.log(typeof voleur) // boolean

console.log(age + 5) // addition
console.log(age * 2) // multiplication
console.log(age % 3) // reste de la division*/

//Exercice sur les variables, les types de données et les opérateurs arithmétiques 

/*let nom = "Maraim"
let age = 22
let ville = "Man"
let profession = "caissière"
let experience = 4
let disponible = true
let result = `${nom} a ${age} ans, vit à ${ville} et travaille comme ${profession}. Elle a ${experience} années d'experiences . Disponible actuellement : ${disponible}`
console.log(result)
console.log(typeof nom) // string
console.log(typeof age) // number
console.log(typeof ville) // string
console.log(typeof profession) // string
console.log(typeof experience) // number
console.log(typeof disponible) // boolean*/

// Exercice avec les conditions

/*let note = 14
if (note >= 16){
    console.log("Tres bien")
} else if (note >= 10){
    console.log("Passable")
}else {
    console.log("Echec")
}

let meteo = "soleil"

if (meteo === "pluie"){
    console.log("Prends un parapluie")
}else if (meteo === "soleil"){
    console.log("mets des lunettes")
}else {
    console.log("prepare toi a tout")
}*/

// Exercice 2 avec les conditions
/*let age = 25
if (age >= 18) {
    console.log("tu es senior");
}else if(age >= 12){
    console.log("tu es un ado")
}else if(note >= 12) {
    console.log("tu es un enfent")
}else {
    console.log("bebe")
}*/


// Exercice 3 avec les conditions
/*let nom = "Ami"
let age = 17
let experience = 3
let disponible = true

console.log(`Nom : ${nom}`)
console.log(`Age : ${age}`)
console.log(`Experience : ${experience} ans`)
console.log(`Disponible : ${disponible? "Oui" : "Non"}`)


if (age >= 18 && experience < 2 && disponible === true){
    console.log("Accepté")
}else if(age >= 18 && experience < 2 && disponible === true){
    console.log("en attente")
}else{
    console.log("refusé")
}*/

/*const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("quel est votre nom",
    function(nom){
        rl.question("quel est votre age ",
            function(age) {
                rl.question("quel est votre ville", function(ville) {
                    console.log(`Bonjour, ${nom}! Vous avez ${age} ans et vous vivez à ${ville}.`)
                    rl.close()
                })
            }
        )
    }
)*/

/*let nom = prompt("Quel est votre nom ?");
console.log(`Bonjour, ${nom}!`)*/

/*for (let i = 1; i < 10; i++){
    console.log(i * i)
}*/

/*let i = 10
while (i >= 1){
    console.log(i)
    i--
}*/

/*let n = 0
while (n <= 5){
    console.log(`louba ${n}`)
    n++
}*/

/*for (let i=0; i <= 30; i += 3) {
    console.log(i);
}*/

/*for (let i = 0; i <= 30; i++){
    if (i % 3 === 0){
        console.log(i)
    }
}*/

/*let nmb = prompt("Entrez un nombre pour voir sa table de multiplication : ")
nmb = Number(nmb)

for (let i = 1; i <= 10; i++){
    console.log(`${nmb} * ${i} = ${nmb * i}`)
}*/


// Exercice 1 : mini projet pour calculatrice simple
/*let nmb = Number(prompt("Entrez un nombre : "))
let operation = prompt("Choisissez une opération (+, -, *, /) : ")
let nmb2 = Number(prompt("Entrez un autre nombre : "))
let resultat;

if (operation ==="+"){
    resultat = nmb + nmb2;
}else if (operation === "-"){
    resultat = nmb - nmb2;
}else if (operation === "*"){
    resultat = nmb * nmb2;
}else if (operation === "/"){
    if (nmb2 !== 0){
        resultat = nmb / nmb2;
    }else {
        resultat = "Erreur : Division par zero";
    }
    
}else {
    resultat = "Opération invalide";
}

alert(`Resultat : ${resultat}`);*/
// Affichage du résultat dans la console    

/*let cas = Number(prompt("Veuillez entrez un nombre :"));
if (cas % 2 === 0){
    console.log("pairs")
}else {
    console.log("impairs")
}
alert (`Le nombre ${cas} est ${cas % 2 === 0 ? "pairs" : "impairs"}.`)*/

// Exercice 2 : mini projet pour rejouer au jeu precedent

/*let rejouer = true;
let prenom = prompt("Quel est votre prénom ?");
alert(`Bienvenue ${prenom}!`);

while (rejouer){
    let cas = Number(prompt("veuillez entrez un nombre :"));

    if (cas % 2 === 0){
        console.log("pairs");
        alert(`le nombre ${cas} est pairs.`);
    }else {
        console.log("impairs");
        alert(`le nombre ${cas} est impairs.`);
    }

    let reponse = prompt("voulez-vous rejouer ? (oui/non)");
    if (reponse.toLowerCase() !== "oui") {
        rejouer = false;
        alert(`merci ${prenom} d'avoir joué !`);
    }
}*/

// Exercice 3 : mini projet pour pour le jeu de nombre magique

/*let jouer = true;
let nom = prompt("Ecrivez votre nom :");
alert(`Bienvenue ${nom}!`);

while (jouer) {
    let nmbrMagic = Math.floor(Math.random() * 10) + 1;
    let victoire = false;

    for (let essaie = 0; essaie < 3; essaie++) {
        let guess = Number(prompt(`Essaie ${essaie}/3 : Devine un nombre entre 1 et 10`));

        if (guess === nmbrMagic){
            alert(`Bravo ${nom}, vous avez trouvé le nombre magique ${nmbrMagic} !`);
            victoire = true;
            break;
        }else {
            alert("vous avez saisie la mauvaise reponse");
        }
    }

    if (!victoire){
        alert(`Désolé ${nom}, vous avez épuisé vos essais. Le nombre magique était ${nmbrMagic}.`);
    }

    let again = prompt("Voulez-vous rejouer ? (oui/non)");
    if (again.toLowerCase() !== "oui") {
        jouer = false;
        alert(`Merci d'avoir joué, ${nom}!`);
    }
}*/

// Exercice 4 : mini projet pour calculer l'année de naissance

/*let nom = prompt("quel est votre nom :");
let age = Number(prompt("quel est votre age :"));
let anneeActuelle = new Date().getFullYear();
let anneeNaissance = anneeActuelle - age;
alert(`Bonjour ${nom}, vous êtes né en ${anneeNaissance}.`);*/


//exercice 5 : mini projet pour faire un emploi du  temps
/*let jour = prompt("Quel jour sommes nous ?").toLocaleLowerCase();
if (jour === "lundi" || jour === "mercredi" || jour === "vendredi") {
    alert("Cours Gomycode");
} else if (jpur === "mardi" || jour === "jeudi"){
    alert("Revisions personnelle");
} else if (jpur === "samedi" || jour === "dimanche"){
    alert("Repos bien merité");
} else {
    alert("Jour invalide, veuillez saisir un jour de la semaine valide.");
}*/

//Exercice sur les fonction  (fonction simple)

/*function salut (){
    console.log("salut Boss !");
}
salut();

// fonction avec parametre
function saluer(nom){
    console.log(`Bonjour ${nom} !` );
}

saluer ("souleyman");
saluer ("Ami")

// fonction avec return

function addition(a, b) {
    return a + b;
  }
  
  let resultat = addition(4, 5); // 9
  console.log(resultat);*/
  
// je veux un peu d'explication sur les différente fonction énoncé pour mieux comprendre comment sa fonctionne et savoir quel type utilise lorsque j'aurai une tache a faire dans le future 
  
//exercice sur les 3 fonctions

/*function ok (){
    console.log("Bonjour Boss!");
}
ok();

function dirl (nom, ville) {
    console.log(`Bonjour je m'appelle ${nom}, je vis à ${ville}.`);
}

dirl("souleymane", "Man");
 

function  produit (a, b) {
    return a * b;
}

let resultat = produit (16, 2);
console.log(resultat);*/   

// fonction avec condition et boucle
/*function estPair(n){
    return n % 2 === 0;
}

for (let i = 0; i <= 5; i++){
    console.log(`${i} est ${estPair(i) ? "pairs" : "impairs" }`)
}

function VerificationAge(age){
    if(age >= 18) {
        return "majeur";
    }else
        return "mineur"
    
}

console.log(VerificationAge(20));
console.log(VerificationAge(15));

function tableMlti(nombre){
    for (let s = 0; s <= 10; s++){
        console.log(`${nombre} * ${s} = ${nombre * s}`);
    }
}
tableMlti(99);
tableMlti(42);

function SommeCal (max){
    let somme = 0;
    for(let d = 0; d <= max; d++){
        somme += max;
    }
    return somme;
}  

console.log(SommeCal(0));

function MentionFIn(note) {
    if (note >= 16){
        return "Tres bien";
    }else if (note >= 14) {
        return 'Bien';
    }else if (note >= 10) {
        return "Passable";
    }else{
        return "Echec";
    }
}

console.log(MentionFIn(9));

function analyserNote(note){
    if(note < 0 || note > 20){
        return "note valide";
    }else if (note >= 16) {
        return 'Bien';
    }else if (note >= 14) {
        return "Passable";
    }else {
        return "note invalide";
    }
}

analyserNote(-1);*/

/*function AfficherLanote(){
    let Nom = prompt("veuillez saisir votre nom :");
    let classe = Number(prompt("Entrez le nombre d'eleve :"));
    let reussite = 0;
    let echec = 0;
    let TotalNote = 0;

    for(let i = 1; i <= classe; i++){
    let note = Number(prompt(`veuillez saisir la note  de ${Nom}, numéro ${i} :`));

    if(note < 0 || note > 20 || isNaN(note)){
        alert("Note invalide");
        i--;
        continue;
    }

    TotalNote += note;

    if (note >= 16){
        alert('Tres bien');
        reussite++;
    }else if(note >= 14){
        alert('bien');
        reussite++;
    }else if (note >= 10){
        alert('passable');
        reussite++;
    }else {
        alert('Echec');
        echec++;
    }
   } 

   alert (
    `Résultat final :
    -Réussites : ${reussite}
    -Echec : ${echec}`
   );
}

AfficherLanote();*/

/*function analyserClasse() {
    let nbEleves = Number(prompt("Combien d'élèves y a-t-il ?"));
    let reussites = 0;
    let echecs = 0;
    let totalNotes = 0;
  
    for (let i = 1; i <= nbEleves; i++) {
      let note = Number(prompt(`Entrez la note de l'élève ${i} :`));
  
      // Vérification de la validité
      if (note < 0 || note > 20 || isNaN(note)) {
        alert("Note invalide, veuillez réessayer.");
        i--; // recommencer la saisie pour le même élève
        continue;
      }
  
      totalNotes += note; // Ajouter à la somme
  
      // Attribution de la mention
      if (note >= 16) {
        alert("Très bien");
        reussites++;
      } else if (note >= 14) {
        alert("Bien");
        reussites++;
      } else if (note >= 10) {
        alert("Passable");
        reussites++;
      } else {
        alert("Échec");
        echecs++;
      }
    }
  
    let moyenne = totalNotes / nbEleves;
  
    alert(`🎓 Résumé :
    - Réussites : ${reussites}
    - Échecs : ${echecs}
    - Moyenne générale : ${moyenne.toFixed(2)} / 20`);
  }
  
  analyserClasse();*/
  

  /*function analyserClasse() {
    let nbEleves = Number(prompt("Combien d'élèves y a-t-il ?"));
    let reussites = 0;
    let echecs = 0;
  
    for (let i = 1; i <= nbEleves; i++) {
      let note = Number(prompt(`Entrez la note de l'élève ${i} :`));
  
      if (note < 0 || note > 20 || isNaN(note)) {
        alert("Note invalide");
        i--; // on redemande la même note
        continue;
      }
  
      if (note >= 16) {
        alert("Très bien");
        reussites++;
      } else if (note >= 14) {
        alert("Bien");
        reussites++;
      } else if (note >= 10) {
        alert("Passable");
        reussites++;
      } else {
        alert("Échec");
        echecs++;
      }
    }
  
    alert(`Résultat final :
    - Réussites : ${reussites}
    - Échecs : ${echecs}`);
  }
analyserClasse();  */

// les tableaux 

/*let fruits = ["mangues", "papaye", "salade"];
fruits [2] = "gombo"; // permet de modifier un element
fruits.push("fruits de salade", "pomme de terre", "orange"); // permet d'ajouter un element a la fin d'un tableau
fruits.unshift("banane", "alloco", "orange"); // permet d'ajouter un element au debut d'un tableau
fruits.shift(); //permet de supprimer les elements au debut d'un tableau
fruits.pop(); // permet de supprimer le dernier element
fruits.splice(1, 1); // permet de supprimmer un element a un endroit precis (par position)
let index = fruits.indexOf("fruits de salade") // permet de retrouver l'element (par valeutr)
if(index !== -1){
    fruits.splice(index, 3);
}// permet de supprimer un element a un endroit 
console.log(fruits.length) // permet de connaitre le nombre d'element dans un tableau

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}*/

/*let prenom = ["malabar","golden", "moofty", "shakala"];

for(let i = 0; i < prenom.length; i++){
    console.log(prenom[i]);
}

prenom.push("el sucre");
prenom.shift();

for(let s = 0; s < prenom.length; s++){
    console.log(`mise a jour ${prenom [s]}`);
}*/

/*let ami = ["travail", "pouvoir", "argent"];
for (let i = 0; i < ami.length; i++){
    console.log(`mon ami s'appelle ${ami[i]}.`)
}

ami.push("femme");
ami.shift();

for (let d = 0 ; d < ami.length; d++){
    console.log(`mon ami est ${ami[d]}`)
}

console.log(`votre nombre total d'ami est : ${ami.length}`);*/
/*ami.forEach(function(ami)
    {console.log(`voici mon ami : ${ami}`);}
)

ami.sort();
console.log(ami);

console.log(ami.includes("femmes"));
console.log(ami.includes("pouvoir"));

let boss = ami.join(", ");
console.log(boss);*/

/*let prenom = ["gedeon", "silvestre", "christ", "marie"];
prenom.forEach(function(prenom){
    alert(`la liste des prenoms : ${prenom}`);
})

let bic = prompt("veuillez entrez un prenom : ").toLowerCase().trim();

if (prenom.includes(bic)){
    alert("Ce prenom est dans la liste");
}else{
    alert("Ce prenom est introuvable");
}*/

// passons chapitre des chaines caractere

/*let nom = "souleymane"
let phrase = "je suis un developpeur"
console.log(nom.toUpperCase());
console.log(`${phrase}, ${nom}`);
console.log(phrase.length);
console.log(phrase.slice(0, 15));*/

/*et phrase = " JavaScript c'est cool "
console.log(phrase.length); // permet de trouver le nombre caractere
console.log(phrase.trim()); // permet de supprimer les espaces vides
console.log(phrase.toUpperCase()); // permet de mettre en majuscule
console.log(phrase.includes("cool")); // premet de retrouver le mot dans la phrase
console.log(phrase.indexOf("cool")); //permet de retrouver la position
let bos = phrase.replace("cool", "magnifique"); // permet remplacer un mot
console.log(bos);*/

// chapitre sur les objets

/*let mcp = {
    nom : "mcp mat cuisine",
    abonnée : "16",
    outils:  "utensile de cuisine",
    dateDeCretion : "2 - 01 - 2025",
    couleur : "bleu - orange",
    admin : "souleymane"
}

// comment acceder aux données d'un objet

console.log(mcp.nom); // la methode avce le point 
console.log(mcp.admin);// on prend le nom de la variable ensuite le nom de la variable a l'interieur de l'accolade

console.log(mcp["outils"]);// la methode avec le crochet
console.log(mcp["couleur"]);// on prend le nom de la variable ensuite la variable a l'interieur de l'accolade

// comment modifier ou ajouter des données dans un objet

mcp.abonnée = 30; // permet de modifier les données
console.log(mcp.abonnée);

mcp.badge = "vert"; // permet de ajouter les données
console.log(mcp.badge);*/

// exercice sur les objets

/*let voiture = {
    marque : "audi",
    modele : "v6",
    annee : 2016,
    estElectrique : true
}
console.log(voiture.marque);
console.log(voiture.modele);
console.log(voiture.annee);
console.log(voiture.estElectrique);

voiture.annee = 2023;
console.log(voiture.annee);

voiture.couleur = "bleu";
console.log(voiture.couleur);

console.log(voiture);*/

/*let Livre = {
    titre : "le vieil et la mer",
    auteur : "Enerst hemingway",
    annee : 1975,
    disponible : true
}

console.log(Livre.titre);
console.log(Livre.auteur);
console.log(Livre.annee);
console.log(Livre.disponible);

Livre.annee = 2020;

Livre.langue = "française";

console.log(Livre);

if (Livre.disponible === true){
    console.log("Livre est disponible");
}else{
    console.log("aucun resultat");
}

console.log(Livre)*/