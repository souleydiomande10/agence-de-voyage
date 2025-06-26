// exercice mini projet 1

//créons une fonction commentaire qui permet d'apprecier les notes

/*function commentaire(note){
    if(note >= 16) return "tres bien";
    if(note >= 14) return "bien";
    if(note >= 10) return "passable";
    return "Echec";
}

//créons une fonction lancer Projet qui permet a l'utilisateur d'entrer ses informations

function LancerProjet(){
    let nmbrEleves = Number(prompt("entrez le nombre d'eleves dans la classe :"));
    let eleve = [];
    let totalNote = 0;
    let meilleurs = -Infinity;
    let pires = Infinity;

    for(let i = 1; i < nmbrEleves; i++){
        let nom = prompt(`entrez le nom de l'eleve ${i} :`);
        let note = Number(prompt(`entrez la note de l'eleve ${nom} :`));

        while(note < 0 || note > 20 || isNaN(note)){
             note = Number(prompt(`note invalide veuillez reprendre ppour ${nom} :`));
        }

        eleve.push({nom, note });
        totalNote += note;

        if(note > meilleurs) meilleurs = note;
        if(note < pires) pires = note;
    }

    let admis = eleve.filter(e => e.note >= 10).length;
    let recales = nmbrEleves - admis; 
    let moyenne = totalNote / nmbrEleves;

    alert(`Résumé : 
        -Totale eleve : ${nmbrEleves}
        -Moyennes Generales : ${moyenne.toFixed(2)}
        -Meilleurs note : ${meilleurs}
        -Plus mauvause note : ${pires}
        -Admis : ${admis}
        -Recales : ${recales}`);

        eleve.sort((a, b) => b.note - a.note);

        console.log(`le resultat individuel :`);

    eleve.forEach(e => {
        console.log(`${e.nom} a eu ${e.note}/20 ➤ ${commentaire(e.note)}`);
    });
}

LancerProjet();*/


//exercice pour les employée

function AfficherEmploie(){
    let nmbreEmployee = Number(prompt("veuillez saisir le nombre employés a enregistrer :"));
    let employés = [];
    let TotalSalaire = 0;
    let SalaireSuperieurs = 0;
    let SalaireMax = 0;
    let PosteSalaireMax = "";

    for(let i = 1; i <= nmbreEmployee; i++){
         let nom = prompt(`saisir le nom de l'employé ${i} :`).trim();
         let Poste = prompt(`saisir le poste de l'employé ${i} :`).trim();
         let salaire = Number(prompt(`saisir le salaire de l'employé ${nom} :`));

         if(isNaN(salaire) || salaire <= 0 ){
            alert (`salaire de ${nom} est invalide réessayer à nouveau :`);
            i--;
            continue;
         }

         employés.push({nom, Poste, salaire,});
         TotalSalaire += salaire;

         if(salaire > 100000){
            SalaireSuperieurs++;
         }

         if(salaire > SalaireMax){
            SalaireMax = salaire;
            PosteSalaireMax = Poste;
         } 
    }

    let SalaireMoyen = TotalSalaire / nmbreEmployee ;

    alert (`resumé :
        -Total des employés : ${nmbreEmployee}
        -Salaire total : ${TotalSalaire} FCFA 
        -Salaire Moyen : ${SalaireMoyen.toFixed(2)} FcFA
        -Employé Gagnant +100 000 FCFA : ${SalaireSuperieurs}
        -Plus haut salaire : ${SalaireMax} FCFA
        -Poste mieux payé : ${PosteSalaireMax}`);

        console.log("Detail des employés avant prime :");
        employés.forEach(e => {
            console.log(`${e.nom} | ${e.Poste} | ${e.salaire} FCFA`);
        })

        // prime de 10000
        employés.forEach(e => {
            if(e.salaire < 45000){
                e.salaire += 10000;
            }
        });

        console.log("Detail des employés apres prime :");
        employés.forEach(e => {
            console.log(`${e.nom} | ${e.Poste} | ${e.salaire} FCFA`);
        })
}

AfficherEmploie();