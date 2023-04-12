// suite ajout trip
function cartadded(){
  fetch(`http://localhost:3000/cart` )
  .then(response => response.json())
  .then(data => {
    if(data.carts.length === 0){
      document.querySelector('#result_card').innerHTML = 
      `
      <img src="/images/notfound.png">
      <hr>
      <p class='ErrorResult'>No trip found</p>
      `
  } else {
    const newTrip = ` 
                <div id="cart_trip">
                <div>voyage</div>
                <div>heure de départ</div>
                <div class="price">130</div>
                <span class="btn-delete">X</span>

            </div>
  
`; }
  })
};







      

//document.querySelector('#msg-container').innerHTML += newTrip;


// Somme du panier

for (let i = 0; i < document.querySelectorAll('.price').length; i++) {
   
    let cartCount = Number(document.querySelector('.price').textContent);
    
    let total = 0;
total += cartCount;
console.log(cartCount);
    document.querySelector('#count').textContent = total;
      
};





// mise à jour suppression trip
for (let i = 0; i < document.querySelectorAll('.btn-delete').length; i++) {
    document.querySelectorAll('.btn-delete')[i].addEventListener('click', function()
      {
          // row supprimés
        this.parentNode.remove();
  
  
        // panier vidé
        for (let i = 0; i < document.querySelectorAll('.price').length; i++) {
   
            let cartCount2 = Number(document.querySelector('.price').textContent);
            
            let total2 = 0;
        total2 += cartCount2;

        document.querySelector('#count').textContent = total2;
      }
    }
    )
  };



// MAJ bouton purchase
for (let i = 0; i < document.querySelectorAll('.btn-purchase').length; i++) {
  document.querySelectorAll('.btn-purchase')[i].addEventListener('click', function()
    {
        // row supprimés
      this.parentNode.remove();


      // panier vidé
      const cartCount2 = document.querySelectorAll('p').length;// à modifier
      document.querySelector('#count').textContent = cartCount2;


        // trip envoyé page bookings

    }
  )
}





function searchTrips(){
  const departure = document.querySelector('#departure').value;
  const arrival = document.querySelector('#arrival').value;
  const date = document.querySelector('#search_date').value;
  fetch(`http://localhost:3000/tripsFilter/${departure}/${arrival}/${date}`
  )
  .then(response => response.json())
  .then(data => {
      if(data.trips.length ===0){
          document.querySelector('#result_card').innerHTML = 
          `
          <img src="/images/notfound.png">
          <hr>
          <p class='ErrorResult'>No trip found</p>
          `
      }
      else{
          document.querySelector('#result_card').innerHTML ='';
          for(let dat in data){
              for(let i =0; i<data[dat].length; i++){
                  console.log(moment(data[dat][i].date).hour());
              document.querySelector('#result_card').innerHTML +=
          `<div id="ticket" >
              <div id="trajet">
                  ${data[dat][i].departure} > ${data[dat][i].arrival}
              </div>
              <div>${moment(data[dat][i].date).format('HH:mm')}</div>
              <div>${data[dat][i].price}€</div>
              <div><button>Book</button></div>
      </div>`
              }
          }

      }
  })
  
}