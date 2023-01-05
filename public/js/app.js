// PATIENT


class patient {
    constructor(nom, maladie, argent, poche, etatSante, traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;

    }
    goTo(){

    }
    takeCare(){

    }
    paye(){

    }
}

let Marcus = new patient('Marcus','mal indenté',100,[],'malade','traitement');
let Optimus = new patient('Optimus','unsave',200,[],'malade','traitement');
let Sangoku = new patient('Sangoku','404',80,[],'malade','traitement');
let DarthVader = new patient('DarthVader','azmatique',110,[],'malade','traitement');
let Semicolon = new patient('Semicolon','syntaxError',60,[],'malade','traitement');

console.log(' ');
console.log('Patient :');
console.log(Marcus);
console.log(Optimus);
console.log(Sangoku);
console.log(DarthVader);
console.log(Semicolon);



// DOCTEUR


class docteur {
    constructor(nom, argent, cabinet, diagnostique){
        this.nom = nom;
        this.argent = argent;
        this.cabinet = cabinet;
        this.diagnostique = diagnostique;
        this.nom = nom;
    }
    patientIn(){
        
    }
    diagnostique(){
    
    }
    patientOut(){
        
    }
}

let Debugger = new docteur('Debugger',0,'chat');

console.log(' ');
console.log('Docteur :');
console.log(Debugger);



// PHARMACIE


class pharmacie {
    constructor(traitement, prix){
        this.traitement = traitement;
        this.prix = prix;
    }
}

let ctrl = new pharmacie(`ctrl+maj+f`,60);
let save = new pharmacie(`saveOnFocusChange`,100);
let check = new pharmacie(`CheckLinkRelation`,35);
let ventoline = new pharmacie(`Ventoline`,40);
let f12 = new pharmacie(`f12+doc`,20);

console.log(' ');
console.log('Pharmacie / Traitements : ');
console.log(ctrl);
console.log(save);
console.log(check);
console.log(ventoline);
console.log(f12);
