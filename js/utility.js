function calculateTotalPrice(id){
    const elementId = document.getElementById(id);
    const totalPrice = parseFloat(elementId.innerText) + 550;
    elementId.innerText = totalPrice;
}

