
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
                console.log(data[dat][i].panier)
                 const actualDate = moment(data.date);
                 const dateTrain = moment(data[dat][i].panier.date)
                 var diff = moment(dateTrain).diff(moment(actualDate));
                const duration= moment(diff).format('HH');
                document.querySelector(".card").innerHTML +=
                    `
                    <div id="infoTrips">
                        <div class="info">${data[dat][i].panier[0].departure} > ${data[dat][i].panier[0].arrival}</div>
                        <div class="info">${moment(data[dat][i].panier[0].date).format('HH:mm')}</div>
                        <div class="info">${data[dat][i].panier[0].price}€</div>
                        <div class="info">Departure in ${duration} hours</div>
                    </div>`
                }
            }
    }
})