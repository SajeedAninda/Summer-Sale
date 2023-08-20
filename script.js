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
    // DISABLING AND ENABLING MAKE PURCHASE BUTTON 
    let purchaseBtn = document.querySelector("#purchase-button");
    if (totalPrice > 0) {
        purchaseBtn.removeAttribute("disabled");
        purchaseBtn.classList.remove("bg-[#e089c9]");
        purchaseBtn.classList.add("bg-[#E527B2]");
    }
    else {
        purchaseBtn.setAttribute("disabled", true);
    }
    // DISABLING AND ENABLING DISCOUNT COUPON BUTTON 
    let discountBtn = document.querySelector("#discountBtn");
    if (totalPrice >= 200) {
        discountBtn.removeAttribute("disabled");
        discountBtn.classList.remove("bg-[#e089c9]");
        discountBtn.classList.add("bg-[#E527B2]");
    }
    else {
        discountBtn.setAttribute("disabled", true);
    }
}

//  DISCOUNT FIELD VALUE AND CALCULATIONS 
document.querySelector("#discountBtn").addEventListener("click", function () {
    let discountFieldValue = document.querySelector("#discount-input-field").value;
    let totalDiscount = (totalPrice * 20) / 100;
    let discountedPrice = totalPrice - totalDiscount;
    if (discountFieldValue === "SELL200") {
        document.querySelector("#Discount-Amount-Field").innerText = totalDiscount.toFixed(2);
    }
    else {
        alert("Incorrect Discount Code");
        return;
    }
    document.querySelector("#discount-input-field").value = ""
    document.querySelector("#total-field").innerText = discountedPrice.toFixed(2);
})


// MODAL BUTTON FUNCTIONS
document.querySelector("#modal-btn").addEventListener("click", function () {
    totalPrice = 0;
    totalDiscount = 0;
    document.querySelector("#total-price-field").innerText = totalPrice.toFixed(2);
    document.querySelector("#total-field").innerText = totalPrice.toFixed(2);
    document.querySelector("#Discount-Amount-Field").innerText = totalDiscount.toFixed(2);
    let itemList = document.querySelector("#Item-List-Div");
    itemList.innerText = "";
    let purchaseBtn = document.querySelector("#purchase-button");
    if (totalPrice > 0) {
        purchaseBtn.removeAttribute("disabled");
    }
    else {
        purchaseBtn.setAttribute("disabled", true);
    }
    let discountBtn = document.querySelector("#discountBtn");
    if (totalPrice > 200) {
        discountBtn.removeAttribute("disabled");
    }
    else {
        discountBtn.setAttribute("disabled", true);
    }
    purchaseBtn.classList.remove("bg-[#E527B2]");
    purchaseBtn.classList.add("bg-[#e089c9]");
    discountBtn.classList.remove("bg-[#E527B2]");
    discountBtn.classList.add("bg-[#e089c9]");
})