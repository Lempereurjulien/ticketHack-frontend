document.querySelector('#search_date').valueAsDate = new Date();



/**Take all trips wis search */
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
                document.querySelector('#result_card').innerHTML +=
            `<div id="ticket" >
                <div id="trajet">
                    ${data[dat][i].departure} > ${data[dat][i].arrival}
                </div>
                <div>${moment(data[dat][i].date).format('HH:mm')}</div>
                <div>${data[dat][i].price}€</div>
                <div>
                <button id ="${data[dat][i]._id}" class="bookTrips">Book</button>
                </div>
        </div>`
    }
}
trips();
        }
    })  
}

/**Add trips in Cart */
function trips(){
    for (let i =0; i<document.querySelectorAll('.bookTrips').length; i++){
        document.querySelectorAll('.bookTrips')[i].addEventListener('click',
        function(){
            const data = {
                id : this.id
            }
            fetch("http://localhost:3000/tripsAddCart", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            // .then(location.assign('http://localhost:5500/cart/cart.html'))
            
        })
    }
    
}








        