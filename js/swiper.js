// swiper

(function(){

const swiper = new Swiper('.mySwiper', {
    slidesPerView:1,//设置slider容器能够同时显示的slides数量
    // spaceBetween:30,//往左手邊推30px
    centeredSlides: true,//默认第一块居左，设置为true后居中
    autoplay: {
        delay: 2500,//延遲
        disableOnInteraction: false,//如果設置為false，用戶操作swiper之後自動切換不會停止，每次都會重新啟動autoplay。
      },
    loop: true,//循環播放使用
    effect:'fade',//輪播效果
    allowTouchMove:true, //拖曳投影片
    
    pagination: {
      el: '.swiper-pagination',//分頁圓點的css選擇器
      clickable: true,//分頁圓點通可以點選後，直接移至該頁
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',//下一頁客制化圓點的css選擇器
      prevEl: '.swiper-button-prev',//上一頁客制化圓點的css選擇器
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       slidesPerView: 3,
    //       spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
    //   }
  });
})();



// const swiper = new Swiper('.mySwiper', {
//     slidesPerView:1,//设置slider容器能够同时显示的slides数量
//     // spaceBetween:30,//往左手邊推30px
//     centeredSlides: true,//默认第一块居左，设置为true后居中
//     autoplay: {
//         delay: 10000000,//延遲
//         disableOnInteraction: false,//如果設置為false，用戶操作swiper之後自動切換不會停止，每次都會重新啟動autoplay。
//       },
//     loop: true,//循環播放使用
//     effect:'fade',//輪播效果
//     allowTouchMove:true, //拖曳投影片
    
//     pagination: {
//       el: '.swiper-pagination',//分頁圓點的css選擇器
//       clickable: true,//分頁圓點通可以點選後，直接移至該頁
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',//下一頁客制化圓點的css選擇器
//       prevEl: '.swiper-button-prev',//上一頁客制化圓點的css選擇器
//     },
  
//     // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },

//     // breakpoints: {
//     //     // when window width is >= 320px
//     //     320: {
//     //       slidesPerView: 2,
//     //       spaceBetween: 20
//     //     },
//     //     // when window width is >= 480px
//     //     480: {
//     //       slidesPerView: 3,
//     //       spaceBetween: 30
//     //     },
//     //     // when window width is >= 640px
//     //     640: {
//     //       slidesPerView: 4,
//     //       spaceBetween: 40
//     //     }
//     //   }
//   });



// today
Today = new Date();
yy = Today.getFullYear();
mm = Today.getMonth()+1;
dd = Today.getDate();


document.getElementById('today').innerHTML = yy+"年"+mm+"月"+dd+"日";

