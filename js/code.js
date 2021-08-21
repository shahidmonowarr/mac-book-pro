function totalPrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('extra-memory').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    const totalPrice = document.getElementById('total-price');
    const finalPrice = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCharge);
    totalPrice.innerText = finalPrice;;
    payablePrice(finalPrice);
}

function payablePrice(amount) {
    const payablePrice = document.getElementById('payable-price');
    payablePrice.innerText = amount;
}

// Memory cost js 
document.getElementById('button-poor').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-memory');
    memoryCost.innerText = '0';
    totalPrice();
});
document.getElementById('button-rich').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-memory');
    memoryCost.innerText = '180';
    totalPrice();
});

// storage cost js
document.getElementById('ssd-256gb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '0';
    totalPrice();
});
document.getElementById('ssd-512gb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '100';
    totalPrice();
});
document.getElementById('ssd-1tb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '180';
    totalPrice();
});

// delivery charge js 
document.getElementById('free-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = '0';
    totalPrice()
});
document.getElementById('costly-delivery').addEventListener('click', function () {
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = '20';
    totalPrice()
});

// promo code 
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoField = document.getElementById('promo-field');
    let PayablePrice = document.getElementById('payable-price').innerText;
    if (promoField.value == 'stevekaku') {

        const discount = parseInt(PayablePrice) * 0.20;
        PayablePrice = PayablePrice - discount;
        promoField.value = '';
        payablePrice(PayablePrice);
    }
    promoField.value = '';
});