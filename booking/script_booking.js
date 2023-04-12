fetch('http://localhost:3000/booking')
.then(response => response.json())
.then(data=> {
    if(data.book.length ===0){
        document.querySelector('.card').innerHTML = 
        `<div id="title">No booking yet</div>
        <div class="info">Why not plan a trip ?</div>
        `
    }
    else{
        document.querySelector(".card").innerHTML ='';
        const timeBf = new Date().getHours();
        console.log(timeBf)
        for(let dat in data){
            for(let i =0; i<data[dat].length; i++){
                
                    console.log(data[dat][i]);
                document.querySelector(".card").innerHTML +=
                    `
                    <div id="infoTrips">
                        <div class="info">${data[dat][i].panier.departure} > ${data[dat][i].panier.arrival}</div>
                        <div class="info">${moment(data[dat][i].panier.date).format('HH:mm')}</div>
                        <div class="info">${data[dat][i].panier.price}</div>
                        <div class="info">Depeart in hours</div>
                    </div>`
                }
            }
    }
})