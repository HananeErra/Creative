const infos = [
    {
        "name": "Hanane ERRAJI",
        "image": "../img/hanane.jpg",
        "content": "Une étudiante en première année de Master en Technologies de l'Information et du Logiciel - Applications à l'Université de Bretagne Occidentale, en alternance chez Capgemini à Rennes, se présente comme suit : Mon parcours académique est axé sur les technologies de l'information et du logiciel, tandis que mon expérience professionnelle en alternance me permet d'appliquer mes connaissances dans un environnement professionnel concret au sein d'une entreprise de renom. Je suis ravie de pouvoir combiner théorie et pratique dans mon parcours d'études, et j'ai hâte de continuer à apprendre et à évoluer dans mon domaine."
    },
    {
        "name": "Adil ZAIM",
        "image": "../img/adil.jpg",
        "content": "Adil Zaim est un étudiant en première année de Master en Technologies de l'Information et du Logiciel - Applications à l'Université de Bretagne Occidentale, qui exerce également en tant qu'alternant chez BBS, dans le département informatique. Son parcours académique est centré sur les technologies de l'information et du logiciel, et son expérience professionnelle en alternance lui offre l'opportunité d'appliquer ses connaissances dans un contexte professionnel au sein d'une entreprise spécialisée. Il est enthousiaste à l'idée de combiner apprentissage théorique et pratique sur le terrain, et il est déterminé à progresser et à élargir ses compétences dans le domaine de l'informatique."
    },
    {
        "name": "Nicolas",
        "image": "https://i.pinimg.com/736x/63/89/bc/6389bcf52f6c857bbb9f9b0f96663e4f.jpg",
        "content": "Tempor Hac Elit Sem Eget ut, Turpis, Ante Sit Justo Semper proin? Eros Magna Ornare neque; Congue Praesent Non Iaculis Magna Rutrum Sagittis ligula. Cursus Malesuada Odio Nam Maximus Consectetur iaculis? Dolor Augue Metus Ut Varius Efficitur Finibus nulla! Iaculis At Sagittis Eget Praesent est! Donec Non Quis Sit Nulla Interdum orci! Praesent Elit A Vel Vel Feugiat varius? A Lorem Sagittis Neque Eu nulla; Scelerisque Vulputate Dolor Congue augue."
    }
];

const eName = document.getElementById("name");
const eImage = document.getElementById("image");
const eContent = document.getElementById("content");

let currentIndex = 0;
function nextCard(pos) {
    var nextIndex = currentIndex + pos;
    if (nextIndex < 0) {
        nextIndex *= -1;
    }
    nextIndex %= infos.length;
    
    var info = infos[nextIndex];
    eName.innerHTML = info.name;
    eImage.src = info.image;
    eContent.innerHTML = info.content;

    currentIndex = nextIndex;
}

nextCard(0);