class Malade {
    constructor(nom, maladie, argent, poche, etatSante) {
      this.nom = nom;
      this.maladie = maladie;
      this.argent = argent;
      this.poche = poche;
      this.etatSante = etatSante;
    }
    goTo(endroit) {
      console.log(`${this.nom} se rend à ${endroit}.`);
    }
    takeCare(medicament) {
      console.log(`${this.nom} prend ${medicament}.`);
    }
    paye(montant) {
      console.log(`${this.nom} paie ${montant}.`);
    }
  }

  let malades = [
    new Malade("Marcus", "mal indenté", 100, [], "malade"),
    new Malade("Optimus", "unsave", 200, [], "malade"),
    new Malade("Sangoku", "404", 80, [], "malade"),
    new Malade("DarthVader", "azmatique", 110, [], "malade"),
    new Malade("Semicolon", "syntaxError", 60, [], "malade"),
  ];

  
  class Docteur {
    constructor(nom, cabinet) {
      this.nom = nom;
      this.cabinet = cabinet;
    }
    diagnostiquer(malade) {
      console.log(`Le docteur diagnostique ${malade.nom}.`);
    }
    prescrire(malade) {
      console.log(`Le docteur prescrit un traitement pour ${malade.nom}.`);
    }
    paiement(malade, montant) {
      console.log(`Le docteur reçoit ${montant} de ${malade.nom}.`);
    }
  }

  let docteur = new Docteur("Debugger", ["chat"]);

  
  class Pharmacie {
    constructor(nom, medicaments) {
      this.nom = nom;
      this.medicaments = medicaments;
    }
    medocs(malade, medicament, prix) {
      console.log(`La pharmacie vend ${medicament} à ${malade.nom} pour ${prix}.`);
    }
  }


  let pharmacie = new Pharmacie("Medicaments", {
    "ctrl+maj+f": 60,
    "saveOnFocusChange": 100,
    "CheckLinkRelation": 35,
    "Ventoline": 40,
    "f12+doc": 20,
  });
  
  let traitements = {
    "mal indenté": "ctrl+maj+f",
    "unsave": "saveOnFocusChange",
    "404": "CheckLinkRelation",
    "azmatique": "Ventoline",
    "syntaxError": "f12+doc",
  };
  

  while (malades.length > 0) {
    let malade = malades.shift();
  
    docteur.diagnostiquer(malade);
    docteur.prescrire(malade);
    docteur.paiement(malade, 50);
    malade.etatSante = "en traitement";
    malade.goTo("pharmacie");
  
    let medicament = traitements[malade.maladie];
    let prix = pharmacie.medicaments[medicament];
    if (malade.argent >= prix) {
      malade.argent -= prix;
      malade.poche = medicament;
      pharmacie.medocs(malade, medicament, prix);
    } else {
      console.log(`${malade.nom} est mort car il n'a pas assez d'argent pour son traitement.`);
      console.log(`${malade.nom} est poussé dans un cimetière.`);
      continue;
    }
  
    malade.takeCare(medicament);
    malade.etatSante = "guéri";
    console.log(`${malade.nom} est maintenant guéri.`);
    console.log(" ");
  }

  