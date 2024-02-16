<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/kakeibo/contact/css/style.css" type="text/css">
    <title>お問い合わせ</title>
</head>

<body>
<form action="/kakeibo/contact/thanks.html" method="post">
<?php
	echo "メールアドレス：「".$_POST["email"] ."」";
    echo "メールアドレス：「".$_POST["inquiry"] ."」";
?>
<button><a href="/kakeibo/contact/index.html">戻る</a></button>
<button><a href="/kakeibo/contact/thanks.html">送信する</a></button>
</form>
</body>

</html>