// going form page to buy ticket
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

        clickCount++;
        if(clickCount > 4){
            seat.removeEventListener();
            
        }
        // apply bn enable
        if(clickCount >= 4){
            document.getElementById("apply-btn").removeAttribute("disabled");
        }
        

        
        // disabled btn
        e.target.setAttribute("disabled","");

        // click visible
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

        
        // total price calculate
        
        calculateTotalPrice("total-price");
        calculateTotalPrice("grand-total");

        // next btn function
        document.getElementById('input-number').addEventListener('keyup', function(){
            const inputNumber = parseInt(document.getElementById('input-number').value);
            console.log(typeof inputNumber);
                if(!isNaN(inputNumber)){
                    document.getElementById('next-btn').removeAttribute("disabled");
                }
                else{
                    document.getElementById('next-btn').setAttribute("disabled", "true");
                    alert('!!opps Please Give Me The Number.')
                    
                }
         })
        // next btn function end
        
    })
}
     
  

// apply button

document.getElementById('apply-btn').addEventListener('click', function(e){
    // when apply button click ,this button remove
    const applyBox = document.getElementById('apply-box');
    applyBox.classList.add('hidden');
    // 15 % discount
    const inputText = document.getElementById('input-text').value;
    if(inputText === "NEW15"){
        const totalPrice = parseFloat(document.getElementById("total-price").innerText);
        const discount = totalPrice * 0.15;
        const grandTotalPrice = totalPrice - discount;

        document.getElementById("grand-total").innerText = grandTotalPrice;
        document.getElementById('input-text').value = "";
       
    }
    // 20% discount
    else if(inputText === "Couple 20"){
        const totalPrice = parseFloat(document.getElementById("total-price").innerText);
        const discount = totalPrice * 0.2;
        const grandTotalPrice = totalPrice - discount;

        document.getElementById("grand-total").innerText = grandTotalPrice;
        document.getElementById('input-text').value = "";
        
    }
    else{
    
        alert('Invalid Coupon Code!');
        document.getElementById('input-text').value = "";
        const applyBox = document.getElementById('apply-box');
        applyBox.classList.remove('hidden');
    }
    
    
   
})

// next button
document.getElementById('next-btn').addEventListener('click', function(){
    
    const inputName = document.getElementById('input-name').value;
    const inputNumber = document.getElementById('input-number').value;
    const inputEmail = document.getElementById('input-email').value;


    if(inputName === "" || inputNumber === "" || inputEmail === ""){
        // 
        alert('Oppps!!! Please Fill Up Input Field.');
        document.getElementById('my_modal_1').close();
    }
    else{
        document.getElementById('my_modal_1').showModal();
    }
    

   
})
