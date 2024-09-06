$(function() {
    $('#mainimg').vegas({
        slides: [
            { src: 'https://github.com/hitopi/summer-festival-2024/raw/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E3%82%B7%E3%83%A7%E3%83%BC1.jpg' },  // 1枚目の写真指定
            { src: 'https://github.com/hitopi/summer-festival-2024/raw/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E3%82%B7%E3%83%A7%E3%83%BC2.jpg' },  // 2枚目の写真指定
            { src: 'https://github.com/hitopi/summer-festival-2024/raw/main/%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E3%82%B7%E3%83%A7%E3%83%BC3.jpg' },  // 3枚目の写真指定
        ],
        transition: 'blur',             // 切り替え時のトランジション
        animation: 'kenburns',           // スライド中のアニメーション
        delay: 6000,                     // 次の画像に切り替わるまでの時間 (ミリ秒)
        animationDuration: 10000,        // 各アニメーションの表示時間
        timer: false                     // プログレスバーを非表示に
    });
});
