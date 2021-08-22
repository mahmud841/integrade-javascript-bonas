function playerStyle (player) {
    player.style.border ='3px solid tomato';
    player.style.borderRadius = '15px';
    player.style.margin = '10px'; 
    player.style.padding ='10px'; 
}
const players = document.getElementsByClassName('player');
for (const player of players ){
    playerStyle(player);
    // console.log(player);
    player.addEventListener('click', function(){
        player.style.backgroundColor ='tomato';
    })
   
}

function addPlayer() {
    const playersContainer = document.getElementById('players-section');
    const player   = document.createElement('div');
    player.classList.add('kheloyar');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum itaque qui quo fuga, delectus impedit dolores eaque. Aut porro corrupti veritatis inventore tenetur nulla voluptate alias, tempora corporis deserunt. In.</p>`;

    console.log(player);
    // console.log(kheloyar); not working 

   /*  player.addEventListener('click', function(){
        player.style.backgroundColor ='tomato';
    }) */ 
    // num one system
    // event listener akjhane add korle apply button click korar por tar div a click korle  playerstyle function tar moto onclick style dibe 
    playerStyle(player);
    playersContainer.appendChild(player);

}


document.getElementById('players-section').addEventListener('click', function (event) {
    console.log();
    if(event.target.tagName.toLowerCase()== 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'green';
    }
})