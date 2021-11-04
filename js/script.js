// 
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// 
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// 
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.



// creo array di oggetti di ciascun membro

const container = document.querySelector('.team-container');
let newHtml = '';

const cards = [
// membro 1
   {name:"wayne Barnett", 
   role:"Founder & CEO", 
   image:"wayne-barnett-founder-CEO.jpg"},
// membro 2
   {name:"Angela Carroll", 
   role:"Chief Editor", 
   image:"angela-caroll-chief-editor.jpg"},
// membro 3
   {name:"Walter Gordon", 
   role:"Office Manager", 
   image:"walter-gordon-office-manager.jpg"},
// membro 4
   {name:"Angela Lopez", 
   role:"Social Media Manager", 
   image:"angela-lopez-social-media-manager.jpg"},
// membro 5
   {name:"Scott Estrada", 
   role:"Developer", 
   image:"scott-estrada-developer.jpg"},
// membro 6
   {name:"Barbara Ramos", 
   role:"Graphic Designer", 
   image:"barbara-ramos-graphic-designer.jpg"},
      
];

for(let i = 0; i < cards.length; i++){
   // intero object
   const singleCard = cards[i]
   // console.log(singleCard);
   // nome
   const nameCard = singleCard.name;
   console.log(nameCard);
   // ruolo
   const roleCard = singleCard.role;
   console.log(roleCard);
   // image
   const imageCard = singleCard.image;
   console.log(imageCard);

   newHtml +=`<div class="team-card">
      <div class="card-image">
     <img src="img/${imageCard}"
     alt="${nameCard}"/>
      </div>
      <div class="card-text">
      <h3>${nameCard}</h3>
      <p>${roleCard}</p>
      </div>
      </div>`;
}

container.innerHTML = newHtml;

   