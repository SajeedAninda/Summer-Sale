let totalPrice = parseFloat(document.querySelector("#total-price-field").innerText);
function handleDivClicks(card) {
    // FINDING CARD ELEMENTS 
    let cardItemName = card.childNodes[5].innerText;
    let itemListDiv = document.querySelector("#Item-List-Div");
    // ADDING ELEMENTS NAME TO THE CART LIST 
    const count = itemListDiv.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `<span class="text-[#111] text-lg font-medium">${count + 1}</span>. <span class="text-[#111] text-lg font-medium">${cardItemName}</span>`;
    itemListDiv.appendChild(p);
    // RETREIVING ITEM PRICES 
    let cardItemValue = parseFloat(card.childNodes[7].innerText.split(" ")[0]);
    // SETTING ITEM PRICE 
    totalPrice = totalPrice + cardItemValue;
    document.querySelector("#total-price-field").innerText = totalPrice.toFixed(2);
    document.querySelector("#total-field").innerText = totalPrice.toFixed(2);
}

//  DISCOUNT FIELD VALUE AND CALCULATIONS  
document.querySelector("#discountBtn").addEventListener("click", function () {
    let discountFieldValue = document.querySelector("#discount-input-field").value;
    let totalDiscount = (totalPrice * 20) / 100;
    let discountedPrice=totalPrice-totalDiscount;
    if (discountFieldValue === "SELL200") {
        document.querySelector("#Discount-Amount-Field").innerText = totalDiscount;
    }
    else {
        alert("Incorrect Discount Code");
        return;
    }
    document.querySelector("#discount-input-field").value=""
    document.querySelector("#total-field").innerText = discountedPrice.toFixed(2);
})