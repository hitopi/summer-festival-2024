$(function() {
    $('#mainimg').vegas({
        slides: [
            { src: './images/1.jpg' },  // 1枚目の写真指定
            { src: './images/2.jpg' },  // 2枚目の写真指定
            { src: './images/3.jpg' },  // 3枚目の写真指定
            { src: './images/4.jpg' },  // 4枚目の写真追加
            { src: './images/5.jpg' },  // 5枚目の写真追加
        ],
        transition: 'blur',             // 切り替え時のトランジション
        animation: 'kenburns',           // スライド中のアニメーション
        delay: 6000,                     // 次の画像に切り替わるまでの時間 (ミリ秒)
        animationDuration: 10000,        // 各アニメーションの表示時間
        timer: false                     // プログレスバーを非表示に
    });
});
