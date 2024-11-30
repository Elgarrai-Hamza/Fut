
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


  const regexname = /^[A-Za-z\s]+$/;
  const regexurl = /^https?:\/\/.*$/;

  if (!regexname.test(name)) {
    alert("Player name can only contain letters and spaces.");
    return;
  }

  if (!regexname.test(nationality)) {
    alert("Nationality can only contain letters and spaces.");
    return;
  }

  if (!regexurl.test(photo)) {
    alert("Please enter a valid photo URL.");
    return;
  }

  if (!regexurl.test(logo)) {
    alert("Please enter a valid logo URL.");
    return;
  }

  if (!regexurl.test(flag)) {
    alert("Please enter a valid flag URL.");
    return;
  }

  if (pace < 0 || pace > 100) {
    alert("Pace must be between 0 and 100.");
    return;
  }

  if (shooting < 0 || shooting > 100) {
    alert("Shooting must be between 0 and 100.");
    return;
  }

  if (dribbling < 0 || dribbling >100){
    alert("dribbling must be between 0 and 100.")
  }

  if (defending < 0 || defending >100){
    alert("defending must be between 0 and 100.")
  }

  if (physical < 0 || physical >100){
    alert("physical must be between 0 and 100.")
  }

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

   const addForm = document.getElementById('addForm');
   const modalContainer = document.querySelector('.modalContainer');
   const closeAdd = document.getElementById('closeAdd');
function addPlayer() {
    
  modalContainer.classList.toggle('hidden');
    
    
    
}
function addPlayerCard(filterPosition = null){

  document.getElementById("GKbtn").addEventListener("click", () => addPlayerCard("GK"));
  document.getElementById("STbtn").addEventListener("click", () => addPlayerCard("ST"));
  document.getElementById("CMbtn").addEventListener("click", () => addPlayerCard("CM"));
  document.getElementById("LBbtn").addEventListener("click", () => addPlayerCard("LB"));
  document.getElementById("RBbtn").addEventListener("click", () => addPlayerCard("RB"));
  document.getElementById("CBbtn").addEventListener("click", () => addPlayerCard("CB"));
  document.getElementById("RMbtn").addEventListener("click", () => addPlayerCard("RM"));


  playerlistContainer.classList.toggle('hidden')
  

  const playersData = JSON.parse(localStorage.getItem("players")) || { players: [] };
  // Filter players if a position is provided
  const playersToDisplay = filterPosition
    ? playersData.players.filter(player => player.position === filterPosition)
    : playersData.players;

    //
  playerDetaillsOnCard.innerHTML = "";
  playersToDisplay.forEach((player,index) => {

    const playerCard = document.createElement("div");

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
      "shadow-md", // Subtle shadow
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


    

    playerCard.addEventListener("click", () => {
      const targetDivId = `${player.position}div`; // Match the div ID with the player's position
      const targetContainer = document.getElementById(targetDivId);

      if (targetContainer) {
        // Replace the div content with the player card
        
        targetContainer.innerHTML = ""; // Clear existing content
        targetContainer.appendChild(playerCard); // Append the new card

        // Hide the player list
        playerlistContainer.classList.add("hidden");
        
      }
    });

     

    

    playerDetaillsOnCard.appendChild(playerCard)


    

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


const playerlistContainer = document.querySelector('.playerlistContainer');
const playerlist = document.getElementById('playerlist');



