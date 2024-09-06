$(function() {
  $('#mainimg').vegas({
    slides: [
      { src: './images/1.jpg' },  // 1枚目の画像
      { src: './images/2.jpg' },  // 2枚目の画像
      { src: './images/3.jpg' }   // 3枚目の画像
    ],
    transition: 'fade',          // フェード効果
    animation: 'kenburns',        // ケンバーンズ効果
    delay: 5000,                 // 画像が切り替わるまでの時間
    animationDuration: 8000      // アニメーションの持続時間
  });
});
