$(function() {
    $('#mainimg').vegas({
        slides: [
            { src: 'https://via.placeholder.com/800x600' },  // 画像1
            { src: 'https://via.placeholder.com/800x600?text=Slide2' },  // 画像2
            { src: 'https://via.placeholder.com/800x600?text=Slide3' }   // 画像3
        ],
        transition: 'blur',
        animation: 'kenburns',
        delay: 6000,
        animationDuration: 10000,
        timer: false
    });
});
