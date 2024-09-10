//タイマー
$(function() {
    var timer = false;
    $(window).resize(function() {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
        }, 500);
    });
});

// ハンバーガーメニューをクリックした際の処理
$(function() {
    $('#menubar_hdr').click(function() {
        $(this).toggleClass('ham');
        if ($(this).hasClass('ham')) {
            $('#menubar').addClass('d-b');
        } else {
            $('#menubar').removeClass('d-b');
        }
    });
});

// 同一ページへのリンクの場合に開閉メニューを閉じる処理
$(function() {
    $('#menubar a[href^="#"]').click(function() {
        $('#menubar').removeClass('d-b');
        $('#menubar_hdr').removeClass('ham');
    });
});

// ページトップボタン
$(function() {
    var scroll = $('.pagetop');
    $(scroll).hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 300) {
            $(scroll).fadeIn();
        } else {
            $(scroll).fadeOut();
        }
    });
});

// スムーススクロール
$(window).on('load', function() {
    $('a[href^="#"]').click(function() {
        var target = $(this.hash);
        var scroll = target.offset().top - 40;
        $('html, body').animate({ scrollTop: scroll }, 500);
        return false;
    });
});

// 汎用開閉処理
$(function() {
    $('.openclose').next().hide();
    $('.openclose').click(function() {
        $(this).next().slideToggle();
        $('.openclose').not(this).next().slideUp();
    });
});
