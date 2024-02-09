document.querySelector('#plus-item-box').addEventListener('click', () => {
    const inputList = document.querySelectorAll('#item-price-box input');

    inputList.forEach(input => {
        const newForm = document.createElement('input')
        document.querySelector('#item-price-box').appendChild(newForm);
    });
});