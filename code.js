let cards  = document.querySelectorAll('img');
let button = document.querySelector('button');
button.addEventListener('click', ()=>{
    for (const c of cards) {
        c.src = './images/card.png'
    }
})

for (const c of cards) {
    c.addEventListener('click', changeCard);
}

function changeCard(event){
     
    let card = event.currentTarget;

    console.log(card.src);
    

    card.src = './images/'+card.id + '.png';
    
}

// function heart(){
//     heartCard.src='./images/heart.png';
// }
// function diamond(){
//     diamondCard.src='./images/diamond.png';
// }
// function spade(){
   
//     spadeCard.src='./images/spade.png';
// }
// function club(){
//     clubCard.src='./images/club.png';
// }
