

$(window).on('load', function () {

  // [選單GA]
  $('.nav__tab').each(function (index) {
    var gaClass = 'L';         // 代號
    var gaCategory = gaClass + '_' + index;    // 分類1
    if (index > 0) {
      if ($(window).width() > 768) {
        // 桌機
        $(this).on('click', '>a', function () {

          console.table({ 'eventCategory': gaCategory, 'eventLabel': 0 })

        })
        // 小banner
        $(this).find('.nav__pane--ad').each(function (index) {
          var gaLabel = gaClass.toLowerCase() + '_' + (index + 1); // 分類2:
          $(this).on('click', function () {

            console.table({ 'eventCategory': gaCategory, 'eventLabel': gaLabel })

          })
        })
        // 手機(看更多)
      } else {
        $(this).on('click', '.more', function () {

          console.table({ 'eventCategory': gaCategory, 'eventLabel': 0 })

        })
      }
    }
  })

  // [除了選單所有GA]
  $('[data-class]').each(function () {
    var $this = $(this);
    var isSlider = $this.hasClass('ga-slider'); // 區塊是否為輪播圖
    var gaClass = $this.data('class');          // 取得區塊 GA 代號
    var total;                                  // 區塊 ga-bn 總張數
    if (!isSlider) {
      total = $this.find('.ga-bn').length;
    } else {
      total = $this.find('.ga-bn').length - 2;  // 區塊若為輪播則-2(swiper前後自動各加一張)
    }
    var gaCategory = gaClass + '_' + total;     // GA第一類別 代號_總張數
    $this.find('.ga-bn').each(function (index) {
      var gaLabel;                              // GA第二類別 代號(小寫)_目前張數
      if (!isSlider) {
        gaLabel = gaClass.toLowerCase() + '_' + (index + 1);
      } else {
        gaLabel = gaClass.toLowerCase() + '_' + ($(this).data('swiper-slide-index') + 1)
      }
      $(this).on('click', function () {

        console.table({ 'isSlider': isSlider, 'eventCategory': gaCategory, 'eventLabel': gaLabel })

      })
    })
  })

  $('a').on('click', function (e) {
    // e.preventDefault();
  })

  // [右方輪播 & 主、次頁各大 banner 輪播]
  // $('.ga-slider').each(function () {
  //   var $this = $(this);
  //   var gaClass = $this.data('class');
  //   // 輪播總數，因swiper自動前後各加1卡，所以須扣2
  //   var total = $this.find('.ga-bn').length - 2;
  //   var gaCategory = gaClass + '_' + total;       // 判斷目前幾張
  //   $this.find('.ga-bn').each(function () {
  //     var gaLabel = gaClass.toLowerCase() + '_' + ($(this).data('swiper-slide-index') + 1)
  //     $(this).on('click', function () {

  //       console.table({ 'eventCategory': gaCategory, 'eventLabel': gaLabel })

  //     })
  //   })
  // })

  // [版身小banner] 主、次頁
  // $('[data-class]').not('.ga-slider').each(function () {
  //   var $this = $(this);
  //   var gaClass = $this.data('class');
  //   var total = $this.find('.ga-bn').length;
  //   var gaCategory = gaClass + '_' + total;    // 判斷目前幾張
  //   $this.find('.ga-bn').each(function (index) {
  //     var gaLabel = gaClass.toLowerCase() + '_' + (index + 1);
  //     $(this).on('click', function () {

  //       console.table({ 'eventCategory': gaCategory, 'eventLabel': gaLabel })

  //     })
  //   })
  // })

  //四小塊組合

  // var $bannerClass = $('.banner').data('class');
  // console.log($bannerClass);

})



// [上方輪播GA]
  // $('.top-section__slider .ga-bn').each(function (index) {
  //   var gaClass = 'A';      // 代號
  //   var gaCategory = $(this).data('swiper-slide-index') + 1;
  //   $(this).on('click', function () {

  //     console.log(gaClass + '_' + gaCategory)

  //   })
  // })

  // [banner輪播GA] 主、次頁
  // $('.banner .ga-bn').each(function (index) {
  //   var gaClass = $('.banner').data('class');     // 代號
  //   var gaCategory = $(this).data('swiper-slide-index') + 1;
  //   $(this).on('click', function () {

  //     console.log(gaClass + '_' + gaCategory)

  //   })
  // })
// 大輪播GA
// $('.ga-bn').each(function (index) {
//   var gaCategory = index + 1;
//   $(this).on('click', function () {
//     var gaClass = $(this).parents('[data-class]').data('class');
//     console.log(gaClass + '_' + gaCategory)
//   })
// })

// $('.ga-bn').on('click', function () {
//   var $thisParent = $(this).parents('[data-class]');
//   console.log($thisParent)
//   var gaClass = $thisParent.data('class');
//   $thisParent.find('.ga-bn').each(function (index, item) {
//     var gaCategory = index + 1;
//     // console.log(gaClass + '_' + gaCategory)
//     console.log(item);
//   })
// })

// function pushGa(target) {
//   var gaClass = target.data('class');
//   target.find('.swiper-slide').each(function (index) {
//     var gaCategory = index + 1;
//     $(this).on('click', function () {
//       console.log(gaClass + '_' + gaCategory)
//     })
//   })
// }
// pushGa($('.banner'));

// console.log(document.querySelectorAll('.banner .ga-bn'));
// $('.top-section__slider .swiper-slide').each(function (index) {
//   var gaClass = 'A';
//   var gaCategory = index + 1;
//   $(this).on('click', function () {
//     console.log(gaClass + '_' + gaCategory)
//   })
// })
