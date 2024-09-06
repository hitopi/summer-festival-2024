$(function() {
    // main h2が画面内にきたら、スタイルlinestyleを適用する
    $('main h2').on('inview', function() {
        $(this).addClass('linestyle');
    });

    // 各スタイルのinviewアクション
    $('.up').on('inview', function() {
        $(this).addClass('upstyle');
    });

    $('.down').on('inview', function() {
        $(this).addClass('downstyle');
    });

    $('.left').on('inview', function() {
        $(this).addClass('leftstyle');
    });

    $('.right').on('inview', function() {
        $(this).addClass('rightstyle');
    });

    $('.transform1').on('inview', function() {
        $(this).addClass('transform1style');
    });

    $('.transform2').on('inview', function() {
        $(this).addClass('transform2style');
    });

    $('.transform3').on('inview', function() {
        $(this).addClass('transform3style');
    });

    // blurスタイルが画面内にきたら、スタイルblurstyleを適用する
    $('.blur').on('inview', function() {
        $(this).addClass('blurstyle');
    });

    // クラッカーアニメーション
    $('.cracker').on('inview', function() {
        if (!$(this).hasClass('added')) {
            $(this).addClass('added');
            $(this).append('<span class="crackerstyle"><img src="https://github.com/hitopi/summer-festival-2024/raw/main/cracker.gif" alt=""><img src="https://github.com/hitopi/summer-festival-2024/raw/main/cracker.gif" alt=""></span>');
        }
    });
});
