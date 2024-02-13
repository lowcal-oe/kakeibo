function updateTotalInSection(section) {
    const priceInputs = section.querySelectorAll('.price');
    let subtotal = 0;
    priceInputs.forEach(input => {
        subtotal += parseFloat(input.value) || 0;
    });

    const subtotalParagraph = section.querySelector('.subtotal');
    subtotalParagraph.textContent = '合計: ' + subtotal;
}


function updateTotal() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        updateTotalInSection(section);
    });
}

// 各セクションに追加ボタンのイベントを追加
function addEventListenersToPlusButtons() {
    const plusButtons = document.querySelectorAll('.plus-item-box');
    plusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const container = button.parentNode.querySelector('.container');
            const newForm = document.createElement('div');
            newForm.classList.add('item-price-box');

            const itemNameInput = document.createElement('input');
            itemNameInput.type = 'text';
            itemNameInput.name = 'item-name';

            const priceNameInput = document.createElement('input');
            priceNameInput.type = 'number';
            priceNameInput.name = 'price-name';
            priceNameInput.classList.add('price');
            priceNameInput.addEventListener('input', () => updateTotalInSection(container.parentNode)); // 入力されるたびに合計を更新

            newForm.appendChild(itemNameInput);
            newForm.appendChild(priceNameInput);

            container.appendChild(newForm);

            updateTotalInSection(container.parentNode); // テキストボックスが追加された後に合計を更新
        });
    });
}

addEventListenersToPlusButtons();
updateTotal();