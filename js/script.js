document.querySelector('#plus-item-box').addEventListener('click', () => {
    const newForm = document.createElement('input');
    newForm.type = 'text';

    document.querySelector('#item-price-box').appendChild(newForm);