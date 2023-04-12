// suite ajout trip
const newTrip = ` 
<div id="cart_trip">
                <div>voyage</div>
                <div>heure de départ</div>
                <div class="price">130</div>
                <span class="btn-delete">X</span>

            </div>
  
`;

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