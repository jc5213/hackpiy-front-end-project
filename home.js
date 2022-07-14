
const btn = document.getElementById("btn")
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

$(document).ready(function () {
    const btn = $("#btn")
    $(window).on("resize", function () {
        if (window.innerWidth < 920) {
            btn[0].classList.remove("d-none")
            $("#nav-item").css("display", "none")
        }
        else if (window.innerWidth > 900) {
            btn[0].classList.add("d-none")
            $("#nav-item").css("display", "flex")
        }
        //    console.log(btn[0].classList);
    })
    $(window).on("load", function () {
        if (window.innerWidth < 950) {
            btn[0].classList.remove("d-none")
            $("#nav-item").css("display", "none")
        }
        else if (window.innerWidth > 950) {
            btn[0].classList.add("d-none")
            $("#nav-item").css("display", "flex")
        }
        //    console.log(btn[0].classList);
    })
    btn.click(function () {
        
        $("#nav-item").slideToggle(500)
    })
})