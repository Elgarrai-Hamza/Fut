document.getElementById('formationSelect').addEventListener('change', function () {
    const formation = this.value; // Get the selected value
    const formationContainer = document.querySelector('.formation-container'); // Select the formation container

    if (formationContainer) {
        // Add a fade-out effect
        formationContainer.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        setTimeout(() => {
            // Clear the current formation and fade-in the new formation
            formationContainer.innerHTML = '';

            if (formation === '4-4-2') {
                // 4-4-2 Formation
                formationContainer.innerHTML = `

               

                    <div class="empty-player-card col-start-2 row-start-1">ST<button onclick="addPlayerCard('ST',11)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                     <div class="empty-player-card col-start-3 row-start-1">ST<button onclick="addPlayerCard('ST',10)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                    <div class="empty-player-card col-start-1 row-start-2">LM<button onclick="addPlayerCard('LM',9)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                   </div>
                   <div class="empty-player-card col-start-2 row-start-2">CM<button onclick="addPlayerCard('CM',8)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                   </div>
                    <div class="empty-player-card col-start-3 row-start-2">CM<button onclick="addPlayerCard('CM',7)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                    
                    <div class="empty-player-card col-start-4 row-start-2">RM<button onclick="addPlayerCard('RM',6)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                    <div class="empty-player-card col-start-1 row-start-3">LB<button onclick="addPlayerCard('LB',5)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                    <div class="empty-player-card col-start-2 row-start-3">CB<button onclick="addPlayerCard('CB',4)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                    <div class="empty-player-card col-start-3 row-start-3">CB<button onclick="addPlayerCard('RB',3)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                    <div class="empty-player-card col-start-4 row-start-3">RB<button onclick="addPlayerCard('RB', 2)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>

                     <div id="GKdiv" class="empty-player-card GK col-span-4 justify-self-center row-start-4">GK<button id="GKbtn" onclick="addPlayerCard('GK' , 1)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                        </div>

                  
                `;

            } else if (formation === '4-3-3') {
                // 4-3-3 Formation
                formationContainer.innerHTML = `
                    <div class= "empty-player-card col-start-2 row-start-1" style="margin-left:-70px;">LW<button onclick="addPlayerCard('LW',12)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                    </div>
                    <div class="empty-player-card col-start-3 row-start-1" style="margin-left:-70px;">ST<button onclick="addPlayerCard('ST', 13)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                    </div>
                    <div class="empty-player-card col-start-4 row-start-1" style="margin-left:-70px;">RW<button onclick="addPlayerCard('RW', 14)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                    <div class=" empty-player-card col-start-2 row-start-2" style="margin-left:-70px; ">CM<button onclick="addPlayerCard('CM',15)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                    </div>
                    <div class="empty-player-card col-start-3 row-start-2" style="margin-left:-70px;">CM<button onclick="addPlayerCard('CM',16)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                    </div>
                    <div class="empty-player-card col-start-4 row-start-2" style="margin-left:-70px;">CM<button onclick="addPlayerCard('CM',17)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                    <div class="empty-player-card col-start-1 row-start-3">LB<button onclick="addPlayerCard('LB',18)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                    <div class="empty-player-card col-start-2 row-start-3">CB<button onclick="addPlayerCard('CB',19)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                    <div class="empty-player-card col-start-3 row-start-3">CB<button onclick="addPlayerCard('CB',20)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>
                    <div class="empty-player-card col-start-4 row-start-3">RB<button onclick="addPlayerCard('RB',20)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                     </div>

                     <div id="GKdiv" class="empty-player-card GK col-span-4 justify-self-center row-start-4">GK<button id="GKbtn" onclick="addPlayerCard('GK' , 21)" class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                        </div>
                `;
            }

            // Fade back in
            formationContainer.classList.remove('opacity-0');
        }, 500); // Matches the transition duration
    }
});




















fetch('players.json')
  .then(response => response.json())
  .then(data => {
    if (!localStorage.getItem('players')) {
      localStorage.setItem('players', JSON.stringify(data)); 
      console.log('Players loaded:', data);
    }
  })
  .catch(error => console.error('Error:', error));

document.getElementById("addPlayerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  //validate for with regix


  

  const newPlayer = {
    name: document.getElementById("name").value,
    photo: document.getElementById("photo").value,
    position: document.getElementById("position").value,
    nationality: document.getElementById("nationality").value,
    flag: document.getElementById("flag").value,
    club: document.getElementById("club").value,
    logo: document.getElementById("logo").value,
    rating: Number(document.getElementById("rating").value),
    pace: Number(document.getElementById("pace").value),
    shooting: Number(document.getElementById("shooting").value),
    passing: Number(document.getElementById("passing").value),
    dribbling: Number(document.getElementById("dribbling").value),
    defending: Number(document.getElementById("defending").value),
    physical: Number(document.getElementById("physical").value),
  };

  const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };
 
  playersData.players.push(newPlayer);

  localStorage.setItem("players", JSON.stringify(playersData));


  document.getElementById("addPlayerForm").reset();

});






const openform = document.getElementById("openModal");
const closeform = document.getElementById("closeModal");
const playerform = document.getElementById("playerModal");
const formPlayersDisplay = document.getElementById("modalPlayersDisplay");
const playerDetaillsOnCard = document.getElementById("playerDetaillsOnCard");

const playerlistContainer = document.querySelector('.playerlistContainer');
const playerlist = document.getElementById('playerlist');

const addForm = document.getElementById('addForm');
const modalContainer = document.querySelector('.modalContainer');
const closeAdd = document.getElementById('closeAdd');


function SeeAllplayer() {
  const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };
  formPlayersDisplay.innerHTML = "";
  playersData.players.forEach((player,index) => {
    const playerCard = document.createElement("div");
    playerCard.classList.add(
      "border",
      "border-gray-300",
      "rounded",
      "p-4",
      "bg-gray-600",
      "shadow-sm",
      "text-center",
      "mr-8"
      
    );
    playerCard.innerHTML = `
      <img class="w-24 h-24 mx-auto rounded-full" src="${player.photo}" alt="${player.name}">
      <h3 class="text-lg font-semibold mt-2">${player.name}</h3>
      <p class="text-sm text-white">Position: ${player.position}</p>
      <p class="text-sm text-white">Rating: ${player.rating}</p>
      <p class="text-sm text-white">Nationality: ${player.nationality}</p>
         
    `;
    formPlayersDisplay.appendChild(playerCard);
    
  });
}

  


function addPlayer() {
    
  modalContainer.classList.toggle('hidden');
    

}


let selectedPlayers = [];

function addPlayerCard(filterPosition = null , index = null){



  playerlistContainer.classList.toggle('hidden')
  

  const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };
  // Filter players if a position is provided
  const playersToDisplay = filterPosition
    ? playersData.players.filter(player => player.position === filterPosition) 
    : playersData.players;

    

    //
  playerDetaillsOnCard.innerHTML = "";


  playersToDisplay.forEach((player) => {

    const playerCard = document.createElement("div");
    const optionbar = document.createElement("div");
    

    playerDetaillsOnCard.classList.add(
      "grid", // Grid layout
      "grid-cols-2", // Two cards per row
      "gap-4", // Spacing between cards
      "p-4" // Padding around the grid
    );
    
    playerCard.classList.add(
    
      "relative",
      "bg-[url('/assets/images/badge_gold.webp')]", // Background image
      "bg-cover", // Ensure background image covers the card
      "bg-center", // Center the background image
      "rounded-lg", // Rounded corners
      "w-48", // Fixed width
      "h-auto", // Dynamic height
      "text-white", // White text
      "p-4", // Padding inside the card
      "cursor-pointer", 
        

      
      
    );
  
    playerCard.innerHTML = `

    

    
      <div class="absolute top-6 left-6 text-xl font-bold">${player.rating}
      <p class="text-sm text-center ">${player.position}</p>
      </div>
      
      <img class="w-18 h-18 mx-auto " src="${player.photo}" alt="${player.name}">
      <h3 class="text-lg font-bold  text-center">${player.name}</h3>

      <div class="flex justify-around text-center mt-[2px] gap-0 text-xs w-36 mx-auto">
      <div class="flex flex-col items-center">
        <span>PAC</span>
        <span>${player.pace}</span>
      </div>
      <div class="flex flex-col items-center">
        <span >SHO</span>
        <span>${player.shooting}</span>
      </div>
      <div class="flex flex-col items-center">
        <span >PAS</span>
        <span>${player.passing}</span>
      </div>
      <div class="flex flex-col items-center">
        <span >DRI</span>
        <span>${player.dribbling}</span>
      </div>
      <div class="flex flex-col items-center">
        <span >DEF</span>
        <span>${player.defending}</span>
      </div>
      <div class="flex flex-col items-center">
        <span >PHY</span>
        <span>${player.physical}</span>
      </div>
    </div>


    <div class="absolute top-6 right-6">

    <img class="w-6 h-6  rounded-full mx-auto mt-1" src="${player.flag}" alt="${player.nationality}">
      
      <img class="w-6 h-6 rounded-full mx-auto mt-1" src="${player.logo}" alt="${player.club}">
      

    </div>


    
      
      
      
      </div>
    `;

    playerDetaillsOnCard.appendChild(playerCard)





    playerCard.addEventListener("click", () => {

      if (selectedPlayers.some((selected) => selected.name === player.name)) {
        alert(`${player.name} is already on the field.`);
        return;
      }

 

      if (index !== null) {
        const targetDiv = document.querySelector(
          `.formation-wraper button[onclick*="${filterPosition}"][onclick*="${index}"]`
        );

        if (targetDiv) {

          selectedPlayers.push(player);
      
          


          targetDiv.innerHTML = `<button  class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>`;

          
          
          optionbar.classList.add(
            "absolute", "top-2", "-right-4", "bg-black", "text-white",
            "p-2", "rounded", "cursor-pointer", "text-sm", "font-bold"
          );
          optionbar.textContent = "X";



          targetDiv.appendChild(optionbar);




          playerCard.classList.add(
            "relative",
            "bg-[url('/assets/images/badge_gold.webp')]", // Background image
            "bg-cover", // Ensure background image covers the card
            "bg-center", // Center the background image
            "rounded-lg", // Rounded corners
            "w-[150px]", // Smaller fixed width
            "h-[175px]", // Dynamic height
              // Subtle shadow
            "text-white", // White text
            "p-2", // Smaller padding inside the card
            "cursor-pointer",
            
          );
          
          playerCard.innerHTML = `
            <div class =" mb-4">

            <div class="absolute top-10  left-4 text-lg  font-bold ">${player.rating}
              <p class="text-xs text-center">${player.position}</p>
            </div>

            <div class="absolute top-12 right-4">
              <img class="w-4 h-4 rounded-full mx-auto mb-1  " src="${player.flag}" alt="${player.nationality}">
              <img class="w-4 h-4 rounded-full mx-auto " src="${player.logo}" alt="${player.club}">
            </div>

            <div class="mb-0">

              <img class="w-18 h-18 " src="${player.photo}" alt="${player.name}">
              <h6 class="text-xs font-bold text-center ">${player.name}</h6>
            
            </div>
            
            
          
            <div class="flex justify-around text-center gap-0.5 text-[8px] -ml-1 ">
              <div class="flex flex-col items-center">
                <span>PAC</span>
                <span>${player.pace}</span>
              </div>
              <div class="flex flex-col items-center">
                <span>SHO</span>
                <span>${player.shooting}</span>
              </div>
              <div class="flex flex-col items-center">
                <span>PAS</span>
                <span>${player.passing}</span>
              </div>
              <div class="flex flex-col items-center">
                <span>DRI</span>
                <span>${player.dribbling}</span>
              </div>
              <div class="flex flex-col items-center">
                <span>DEF</span>
                <span>${player.defending}</span>
              </div>
              <div class="flex flex-col items-center">
                <span>PHY</span>
                <span>${player.physical}</span>
              </div>
            </div>
            
            </div>
            
          
            
          `;

        


           // Clear the target div
          targetDiv.appendChild(playerCard); // Append the new player card
          


         
          playerlistContainer.classList.add("hidden"); // Hide the player list
        } else {
          console.error("Target div not found for index:", index);
        }


        

        




        optionbar.addEventListener("click", (e)=> {

          selectedPlayers = selectedPlayers.filter((selected) => selected.name !== player.name);
          e.stopPropagation();
          playerCard.remove();
          optionbar.remove();
          

        })

        
      }

      

      
      
    

      
    });


    

    





  });




 



   

   




   

  
}


function addSubPlayerCard(index = null){

  playerlistContainer.classList.toggle('hidden')

  const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };

  playerDetaillsOnCard.innerHTML = "";

  playersData.players.forEach((player) => {

    const playerCard = document.createElement("div");
    const optionbar = document.createElement("div");

    playerCard.classList.add(
    
      "relative",
      "bg-[url('/assets/images/badge_gold.webp')]", // Background image
      "bg-cover", // Ensure background image covers the card
      "bg-center", // Center the background image
      "rounded-lg", // Rounded corners
      "w-48", // Fixed width
      "h-auto", // Dynamic height
      "text-white", // White text
      "p-4", // Padding inside the card
      "cursor-pointer", 
        

      
      
    );
  
    playerCard.innerHTML = `

    

    
      <div class="absolute top-6 left-6 text-xl font-bold">${player.rating}
      <p class="text-sm text-center ">${player.position}</p>
      </div>
      
      <img class="w-18 h-18 mx-auto " src="${player.photo}" alt="${player.name}">
      <h3 class="text-lg font-bold  text-center">${player.name}</h3>

      <div class="flex justify-around text-center mt-[2px] gap-0 text-xs w-36 mx-auto">
      <div class="flex flex-col items-center">
        <span>PAC</span>
        <span>${player.pace}</span>
      </div>
      <div class="flex flex-col items-center">
        <span >SHO</span>
        <span>${player.shooting}</span>
      </div>
      <div class="flex flex-col items-center">
        <span >PAS</span>
        <span>${player.passing}</span>
      </div>
      <div class="flex flex-col items-center">
        <span >DRI</span>
        <span>${player.dribbling}</span>
      </div>
      <div class="flex flex-col items-center">
        <span >DEF</span>
        <span>${player.defending}</span>
      </div>
      <div class="flex flex-col items-center">
        <span >PHY</span>
        <span>${player.physical}</span>
      </div>
    </div>


    <div class="absolute top-6 right-6">

    <img class="w-6 h-6  rounded-full mx-auto mt-1" src="${player.flag}" alt="${player.nationality}">
      
      <img class="w-6 h-6 rounded-full mx-auto mt-1" src="${player.logo}" alt="${player.club}">
      

    </div>


    
      
      
      
      </div>
    `;
    playerDetaillsOnCard.classList.add(
      "grid", // Grid layout
      "grid-cols-2", // Two cards per row
      "gap-4", // Spacing between cards
      "p-4" // Padding around the grid
    );

    playerDetaillsOnCard.appendChild(playerCard)





    playerCard.addEventListener("click", () => {

      if (index !== null) {
        const targetDiv = document.querySelector(
          `.SubstitutionContainer button[onclick*="${index}"]`
        );
  
        if (targetDiv) {

          targetDiv.innerHTML = `<button  class=" add-player-card-btn text-white "  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>`;

          
          
          optionbar.classList.add(
            "absolute", "top-2", "-right-4", "bg-black", "text-white",
            "p-2", "rounded", "cursor-pointer", "text-sm", "font-bold"
          );
          optionbar.textContent = "X";



          targetDiv.appendChild(optionbar);




          playerCard.classList.add(
            "relative",
            "bg-[url('/assets/images/badge_gold.webp')]", // Background image
            "bg-cover", // Ensure background image covers the card
            "bg-center", // Center the background image
            "rounded-lg", // Rounded corners
            "w-[150px]", // Smaller fixed width
            "h-[175px]", // Dynamic height
              // Subtle shadow
            "text-white", // White text
            "p-2", // Smaller padding inside the card
            "cursor-pointer"
          );
          
          playerCard.innerHTML = `
            <div class =" mb-4">

            <div class="absolute top-10  left-4 text-lg  font-bold ">${player.rating}
              <p class="text-xs text-center">${player.position}</p>
            </div>

            <div class="absolute top-12 right-4">
              <img class="w-4 h-4 rounded-full mx-auto mb-1  " src="${player.flag}" alt="${player.nationality}">
              <img class="w-4 h-4 rounded-full mx-auto " src="${player.logo}" alt="${player.club}">
            </div>

            <div class="mb-0">

              <img class="w-18 h-18 " src="${player.photo}" alt="${player.name}">
              <h6 class="text-xs font-bold text-center ">${player.name}</h6>
            
            </div>
            
            
          
            <div class="flex justify-around text-center gap-0.5 text-[8px] -ml-1 ">
              <div class="flex flex-col items-center">
                <span>PAC</span>
                <span>${player.pace}</span>
              </div>
              <div class="flex flex-col items-center">
                <span>SHO</span>
                <span>${player.shooting}</span>
              </div>
              <div class="flex flex-col items-center">
                <span>PAS</span>
                <span>${player.passing}</span>
              </div>
              <div class="flex flex-col items-center">
                <span>DRI</span>
                <span>${player.dribbling}</span>
              </div>
              <div class="flex flex-col items-center">
                <span>DEF</span>
                <span>${player.defending}</span>
              </div>
              <div class="flex flex-col items-center">
                <span>PHY</span>
                <span>${player.physical}</span>
              </div>
            </div>
            
            </div>
          
            
          `;

        


           // Clear the target div
          targetDiv.appendChild(playerCard); // Append the new player card
          


         
          playerlistContainer.classList.add("hidden"); // Hide the player list
        } else {
          console.error("Target div not found for index:", index);
        }
  
  
        
  
        
  
  
  
  
        optionbar.addEventListener("click", (e)=> {
  
          selectedPlayers = selectedPlayers.filter((selected) => selected.name !== player.name);
          e.stopPropagation();
          playerCard.remove();
          optionbar.remove();
          
  
        })
  
        
      }



    });



   


  });


}













openform.addEventListener("click", () => {
    SeeAllplayer();
  playerform.classList.remove("hidden");
});


closeform.addEventListener("click", () => {
  playerform.classList.add("hidden");
});

playerform.addEventListener("click", (e) => {
  if (e.target === playerform) {
    playerform.classList.add("hidden");
  }
});






