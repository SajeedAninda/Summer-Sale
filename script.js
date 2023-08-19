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
    let total = parseFloat(document.querySelector("#total-field").innerText);
    // SETTING ITEM PRICE 
    totalPrice = totalPrice + cardItemValue;
    document.querySelector("#total-price-field").innerText = totalPrice.toFixed(2);
    document.querySelector("#total-field").innerText = totalPrice.toFixed(2);
}
