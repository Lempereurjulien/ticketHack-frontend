
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
        for(let dat in data){
            for(let i =0; i<data[dat].length; i++){
                console.log(data)
                 const actualDate = moment(data.date);
                 const dateTrain = moment(data[dat][i].panier.date)
                 var diff = moment(dateTrain).diff(moment(actualDate));
                const duration= moment(diff).format('HH');
                document.querySelector(".card").innerHTML +=
                    `
                    <div id="infoTrips">
                        <div class="info">${data[dat][i].panier.departure} > ${data[dat][i].panier.arrival}</div>
                        <div class="info">${moment(data[dat][i].panier.date).format('HH:mm')}</div>
                        <div class="info">${data[dat][i].panier.price}€</div>
                        <div class="info">Departure in ${duration} hours</div>
                    </div>`
                }
            }
    }
})