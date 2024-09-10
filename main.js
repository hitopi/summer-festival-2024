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

// menubarの高さに基づいてside-btnを調整
$(window).on('load', function() {
    const menubar = document.getElementById('menubar_hdr');
    const sideBtn = document.getElementById('side-btn');

    function updateSideBtnPosition() {
        const menubarHeight = menubar.offsetHeight;
        sideBtn.style.top = `${menubarHeight}px`;
    }

    // ページ読み込み時に初回の位置調整
    updateSideBtnPosition();

    // ウィンドウのリサイズ時に再計算
    $(window).resize(function() {
        updateSideBtnPosition();
    });
});
