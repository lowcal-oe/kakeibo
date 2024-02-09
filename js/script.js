document.querySelector('#plus-item-box').addEventListener('click', () => {
    const itemPriceBox = document.querySelector('#item-price-box'); // #item-price-box 要素を取得し、itemPriceBox 変数に格納

    for (let i = 0; i < 2; i++) {
        const newForm = document.createElement('input');
        itemPriceBox.appendChild(newForm); // itemPriceBox 変数を使用してテキストボックスを追加
    }
});
