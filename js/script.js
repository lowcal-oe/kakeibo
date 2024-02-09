document.querySelector('#plus-item-box').addEventListener('click', () => {
    const itemPriceBox = document.querySelector('#item-price-box');

    for (let i = 0; i < 2; i++) {
        const newForm = document.createElement('input');
        itemPriceBox.appendChild(newForm);
    }
});

function calculateTotal() {
    const amount1 = parseFloat(document.getElementById('price-name').value) || 0;
    const amount2 = parseFloat(document.getElementById('price-name').value) || 0;
    const amount3 = parseFloat(document.getElementById('price-name').value) || 0;

    const totalAmount = amount1 + amount2 + amount3;

    document.getElementById('totalAmount').innerText = "小計：" + totalAmount;
}