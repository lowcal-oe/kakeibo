document.querySelector('.plus-item-box').addEventListener('click', () => {
    // 2つのinput要素を追加ボタンを押すたびに増やす
    const container = document.getElementById('container');
    const newForm = document.createElement('div');
    newForm.classList.add('item-price-box');

    const itemNameInput = document.createElement('input');
    itemNameInput.type = 'text';
    itemNameInput.name = 'item-name';

    const priceNameInput = document.createElement('input');
    priceNameInput.type = 'number';
    priceNameInput.name = 'price-name';
    priceNameInput.classList.add('price');
    priceNameInput.addEventListener('input', updateTotal); // 入力されるたびに合計を更新

    newForm.appendChild(itemNameInput);
    newForm.appendChild(priceNameInput);

    container.appendChild(newForm);

    updateTotal();
});

function updateTotal() {
    const priceInputs = document.querySelectorAll('.price');
    let subtotal = 0;
    priceInputs.forEach(input => {
        subtotal += parseFloat(input.value) || 0;
    });

    const totalParagraph = document.querySelector('.subtotal');
    totalParagraph.textContent = '合計: ' + subtotal;
}