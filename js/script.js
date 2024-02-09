// 本日の日付を取得
const today = new Date();

// 追加ボタン
document.querySelector('#plus-item-box').addEventListener('click', () => {
    const newForm = document.createElement('input') + ('input');
    newForm.type = 'text';

    document.querySelector('#item-price-box').appendChild(newForm);
});