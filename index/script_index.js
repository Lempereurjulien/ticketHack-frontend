const cors = require('cors');


function searchTrips(){
    const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;
    const date = document.querySelector('#search_date').value;
    console.log(date)


    fetch(`http://localhost:3000/tripsFilter/${departure}/${arrival}/${date}`
    )
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.trips.length ===0){
            document.querySelector('#result_card').innerHTML = 
            `
            <img src="/images/notfound.png">
            `
        }
        else{
            document.querySelector('#result_card').innerHTML ='';
            for(let dat in data){
                for(let i =0; i<data[dat].length; i++){
                    console.log(data[dat][i].departure);
                document.querySelector('#result_card').innerHTML +=
            `<div id="ticket" >
                <div id="trajet">
                    ${data[dat][i].departure}>${data[dat][i].arrival}
                </div>
                <div>${data[dat][i].date}</div>
                <div>${data[dat][i].price}</div>
                <div><button>Book</button></div>
        </div>`
                }
            }

        }
    })
    
}