document.querySelector('#plus-item-box').addEventListener('click', () => {
    const newForm = document.querySelector('#item-price-box input').cloneNode(true);
    newForm.type = 'text';

    document.querySelector('#item-price-box').appendChild(newForm);
});