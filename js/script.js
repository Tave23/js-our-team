// 
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// 
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// 
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.



// creo array di oggetti di ciascun membro

const cards = [
// membro 2
   {name:"Angela Carroll", 
   role:"Chief Editor", 
   image:"img/angela-caroll-chief-editor.jpg"},
// membro 3
   {name:"Walter Gordon", 
   role:"Office Manager", 
   image:"img/walter-gordon-office-manager.jpg"},
// membro 4
   {name:"Angela Lopez", 
   role:"Social Media Manager", 
   image:"img/angela-lopez-social-media-manager.jpg"},
// membro 5
   {name:"Scott Estrada", 
   role:"Developer", 
   image:"img/scott-estrada-developer.jpg"},
// membro 6
   {name:"Barbara Ramos", 
   role:"Graphic Designer", 
   image:"img/barbare-ramos-graphic-designer.jpg"},
      
];

// stampiamo le card del team (se ci riusciamo)



// funzione per creare nuove card

newCard();


function newCard() {
   // ciclo for per prendere tutti i dati
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


      // prendo team-container e ci creo un altro team-card
      const container = document.querySelector('.team-container');
      // ci creo un'altro div al suo interno (team-card)
      const newTeamCard = document.createElement('div');
      // gli dò la classe team-card
      newTeamCard.classList.add('team-card');
      // inserisco newteam card dentro container
      container.append(newTeamCard);
      console.log(container);
      // dentro al div team-card inserisco l'immagine
      // creo il div card-image con la sua relativa classe
      const newCardImage = document.createElement('div');
      // aggiungo classe
      newCardImage.classList.add('card-image');
      // inserisco newcard card dentro container
      newTeamCard.append(newCardImage);
      console.log(newTeamCard);
      console.log(newCardImage);

      // inserisco le immagini
      newCardImage.append(imageCard);
      
      // parte testuale
      const newCardtext = document.createElement('div');
   }

}

// newCardImage.innerHTML = `<img src="img/${imageCard}"
//       // alt="${nameCard}"/>`;
