function discountApp() {
    let discount = document.getElementById("discount");
    let unit = document.getElementById("unit");
    let price = document.getElementById("price");
    let result = document.getElementById("result");
    if (discount.value >= 1) {
        discountGet = ((discount.value / 100) * (price.value * unit.value));
        priceToPay = ((price.value * unit.value) - (discountGet));
        result.innerHTML = priceToPay;
    } else {
        result.innerHTML = (price.value * unit.value);

    }
    result.innerHTML.style.color = "green"
    return result.innerHTML
}

let button = document.getElementById("button");
button.addEventListener('click', discountApp);
