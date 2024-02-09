document.querySelector('#plus-item-box').addEventListener('click', () => {
    const itemPriceBox = document.querySelector('#item-price-box');

    for (let i = 0; i < 2; i++) {
        const newForm = document.createElement('input');
        newForm.type = 'number';
        newForm.name = 'price-name';
        itemPriceBox.appendChild(newForm);
    }
});

function calculateTotal() {
    // 金額のテキストボックスをすべて取得
    const priceInputs = document.querySelectorAll('input[name="price-name"]');
    let totalAmount = 0;

    // 金額のテキストボックスの値を合計
    priceInputs.forEach(input => {
        totalAmount += parseFloat(input.value) || 0;
    });

    // 合計金額をHTMLに表示
    document.getElementById('totalAmount').innerText = "小計：" + totalAmount + "円";
}

// ボタンがクリックされたときに合計金額を計算する
document.querySelector('#calculateButton').addEventListener('click', calculateTotal);