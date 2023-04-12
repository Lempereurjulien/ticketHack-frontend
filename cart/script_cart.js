// suite ajout trip
document.querySelector("#total-bar").style.display = "none";

  fetch(`http://localhost:3000/carts`)
  .then(response => response.json())
  .then(data => {
    if(data.carts.length === 0){
      document.querySelector('#container').innerHTML = 
      `
      <p class='nocart'>No tickets in your cart.</p>
      <p class='no cart'>Why not plan a trip ?</p>

      `}
  else {
    for(let dat in data){
      for(let i =0; i<data[dat].length; i++){
      document.querySelector('#container').innerHTML += 
       ` 
            <div id="cart">
                <h2>My cart</h2>
                  <div id="cart_trip">
                  <div>${data[dat][i].panier[0].departure} > ${data[dat][i].panier[0].arrival}</div>
                  <div>${moment(data[dat][i].panier[0].date).format('HH:mm')}</div>
                  <div class="priceDiv"><span class="price">${data[dat][i].panier[0].price}</span>€</div>
                  <span class="btn-delete" id="${data[dat][i].panier[0]._id}">X</span>
                 
              </div>
              </div>
                
  `};  
  document.querySelector("#total-bar").style.display = "block"
}
somme();
supprPanier();
}});



// Somme du panier
function somme(){
  let total =0;
    const data = document.querySelectorAll(".price");
    for(let dat in data){
      if(data[dat].textContent !== undefined){
        total+=Number(data[dat].textContent);
      }
    }
    document.querySelector("#count").textContent = total;  
  }


// mise à jour suppression trip
function supprPanier(){
  console.log(document.querySelectorAll(".btn-delete"))
  for(let i = 0; i<document.querySelectorAll(".btn-delete").length; i++){
    document.querySelectorAll(".btn-delete")[i].addEventListener('click',
    function(){
       fetch(`http://localhost:3000/carts/${this.id}`, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        
       })
       .then(() =>{
        this.parentNode.remove();
        somme();
       })
      })
    }
    
}


// MAJ bouton purchase

/*document.querySelectorAll('.btn-purchase')[i].addEventListener('click', function(){

  fetch(`http://localhost:3000/carts/purchase`){
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
    
  for (let dat in data){
    for(let i =0; i < data[dat].length; i++){
      if (data[dat][i].isBook === true){
        this.parentNode.remove(); // row supprimés
        somme();// panier vide
                  // trip envoyé page bookings

    }
}}

}
  )

*/
  fetch(`http://localhost:3000/carts/purchase`)
  .then(response => response.json())
  .then(data => {
    console.log(data.isBook)})
