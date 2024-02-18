function calculateTotalPrice(id){
    const elementId = document.getElementById(id);
    const totalPrice = parseFloat(elementId.innerText) + 550;
    elementId.innerText = totalPrice;
}

// let clickCount = 0;
// function buttonClicked(tag){
//     clickCount++;
//     if(clickCount >= 4){
//         document.querySelectorAll(tag).disabled = true;
//     }
// }