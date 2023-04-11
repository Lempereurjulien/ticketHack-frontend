document.querySelector('#search_date').valueAsDate = new Date();

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