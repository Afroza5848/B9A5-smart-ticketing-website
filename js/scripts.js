
document.getElementById('buy-ticket').addEventListener('click', function() {
    
    const ticketForm = document.getElementById('form-details');
    ticketForm.classList.remove('hidden');
})


let clickCount = 0;
let count = 1;
let totalSeat = 40;

const seats = document.querySelectorAll(".seat");

for(const seat of seats){

    seat.addEventListener('click', function(e){

        e.target.setAttribute("disabled","");

        e.target.style.backgroundColor = "#1DD100";
        e.target.style.color = "#fff";
        
        // selected seat number show
        const seatCount = document.getElementById('seat-count');
        seatCount.innerText = count;
        count++;

        // shoe left seat from 40 seat
        const totalSeatNumber = document.getElementById('total-seat');
        totalSeat--;
        totalSeatNumber.innerText = totalSeat;
        // show the selected seat name
        const seatName = e.target.innerText;
        const seatNameContainer = document.getElementById("seat-name-container");

        const tr = document.createElement("tr");
        // seat name
        const td1 = document.createElement("td");
        td1.innerText = seatName;
        // class name
        const td2 = document.createElement("td");
        td2.innerText = "Company";
        // price
        const td3 = document.createElement("td");
        td3.innerText = "550";

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        seatNameContainer.appendChild(tr);

        // apply bn enable
        document.getElementById("apply-btn").removeAttribute("disabled");

        // total price calculate
        
        calculateTotalPrice("total-price");
        calculateTotalPrice("grand-total");
        
        console.log(seat.innerText);
        
        
        
    })
}

