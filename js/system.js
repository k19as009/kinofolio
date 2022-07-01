// jQuery 関連関数  /////////////////////////////////////////////////////////////

$(function (){

  // レスポンシブ/////////////////////////////////

    // Window幅に応じたメニュー表示の変更
    // style.css： @media only screen and (max-width: 800px) {}
    //の幅 587px と、以下の数値を揃える
    function ShowAndHide(win){
      if(win > 800){
        $("#button").hide();
        $("#menu").show();
      }else{
        $("#button").show();
        $("#menu").hide();
      }
    }

    // 初めてページを開いた時の状態チェック
    var win = $(window).width();
    ShowAndHide(win);

    // Windowサイズが変更された時の状態チェック
    $(window).resize(function(){
      var win = $(window).width();
      ShowAndHide(win);
    });

    // MENUボタンクリック時のトグル動作
    $("#button").click( function () {
      $("#menu").slideToggle();
    });


   // Smooth Scroll ////////////////////////////////

   $('a[href^="#"]').click(function() {
      // スクロールの速度(ms)
      var speed = 500;
      // アンカーを取得
      var anchor = $(this).attr("href");
      // ターゲットの位置を取得
      var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
      var position = target.offset().top -80;
      // スクロール（アニメーション）
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

   // Slider ////////////////////////////////////
   /*
   $('.bxslider').bxSlider({
     auto:true,
     speed:1000,
     pager:true
   });
   */

});


// サブ関数 /////////////////////////////////////////////////////////////////////
