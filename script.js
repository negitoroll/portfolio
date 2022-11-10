$(function() {

    //ページ内スクロール
    var navHeight = $(".header").outerHeight();

    $('a[href^="#"]').on("click", function() {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - navHeight;
        $("html, body").animate({ scrollTop: position, }, 300, "swing");
        return false;
    });

    //ページトップ
    $("#js-page-top").on("click", function() {
        $("body,html").animate({ scrollTop: 0, }, 300);
        return false;
    });

});

$(function() {
    $(window).on('scroll', function() {
        if ($('.mv').height() < $(this).scrollTop()) {
            $('.js-header').addClass('change-color');
        } else {
            $('.js-header').removeClass('change-color');
        }
    });
});





//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', { //アニメーションをするIDの指定
    start: 'manual', //自動再生をせずスタートをマニュアルに
    type: 'scenario-sync', // アニメーションのタイプを設定
    duration: 50, //アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false, //パスが更新された場合に再レンダリングさせない
    animTimingFunction: Vivus.EASE, //動きの加速減速設定
});

$(window).on('load', function() {
    $("#splash").delay(1500).fadeOut('slow'); //ローディング画面を1.5秒（1500ms）待機してからフェイドアウト
    $("#splash_logo").delay(1500).fadeOut('slow'); //ロゴを1.5秒（1500ms）待機してからフェイドアウト
    stroke.play(); //SVGアニメーションの実行
});


// 「同意する」のチェックボックス
// const agreeCheckbox = document.getElementById("agree");
// 送信ボタン
// const submitBtn = document.getElementById("submit-btn");

// agreeCheckbox.addEventListener("click", () => {
// チェックされている場合
// if (agreeCheckbox.checked === true) {
// submitBtn.disabled = false; 
// disabledを外す
// }
// チェックされていない場合
// else {
// submitBtn.disabled = true;
// disabledを付与
// }
// });


// h2タイトル

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
    $('.eachTextAnime').each(function() {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("appeartext");

        } else {
            $(this).removeClass("appeartext");
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function() {
    EachTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function() {
    //spanタグを追加する
    var element = $(".eachTextAnime");
    element.each(function() {
        var text = $(this).text();
        var textbox = "";
        text.split('').forEach(function(t, i) {
            if (t !== " ") {
                if (i < 10) {
                    textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
                } else {
                    var n = i / 10;
                    textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
                }

            } else {
                textbox += t;
            }
        });
        $(this).html(textbox);
    });

    EachTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// h2タイトル
