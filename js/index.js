const gauche = document.getElementById("d");
const droit = document.getElementById("g");
const par = document.getElementById("paragraphe");
const titre = document.getElementById("nom");
const img = document.getElementById("image");
let i = 0;

const h = "Une étudiante en première année de Master en Technologies de l'Information et du Logiciel - Applications à l'Université de Bretagne Occidentale, en alternance chez Capgemini à Rennes, se présente comme suit : Mon parcours académique est axé sur les technologies de l'information et du logiciel, tandis que mon expérience professionnelle en alternance me permet d'appliquer mes connaissances dans un environnement professionnel concret au sein d'une entreprise de renom. Je suis ravie de pouvoir combiner théorie et pratique dans mon parcours d'études, et j'ai hâte de continuer à apprendre et à évoluer dans mon domaine."
const a = "Adil Zaim est un étudiant en première année de Master en Technologies de l'Information et du Logiciel - Applications à l'Université de Bretagne Occidentale, qui exerce également en tant qu'alternant chez BBS, dans le département informatique. Son parcours académique est centré sur les technologies de l'information et du logiciel, et son expérience professionnelle en alternance lui offre l'opportunité d'appliquer ses connaissances dans un contexte professionnel au sein d'une entreprise spécialisée. Il est enthousiaste à l'idée de combiner apprentissage théorique et pratique sur le terrain, et il est déterminé à progresser et à élargir ses compétences dans le domaine de l'informatique."
const array = [ h, a, "aurevoir"];
const nom = ["Hanane ERRAJI","Adil ZAIM","Nicolas"]
const image = ["../img/hanane.jpg","../img/adil.jpg","nicolas"]

function suivant() {
    par.innerHTML = array[i];
    titre.innerHTML = nom[i];
    img.src = image[i];
    i++;
    if (i == array.length) {
        i = 0;
    }
}

function precedent() {
    par.innerHTML = array[i];
    titre.innerHTML = nom[i];
    img.src = image[i];
    i--;
    if (i < 0) {
        i = array.length - 1;
    }
}
