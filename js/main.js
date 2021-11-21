$(document).ready(function () {
  // Фиксированное меню
  var navbar$ = $("#navbar"),
    firstBlock$ = $("#first-section"),
    startFixedPosition = firstBlock$.scrollTop() + firstBlock$.outerHeight(),
    menuVisibleClassName = "navbar_fixed";

  if (navbar$ && firstBlock$) {
    console.log(1, isNeededYOffset());
    if (isNeededYOffset()) {
      showMenu(navbar$);
    }

    $(document).scroll(function () {
      if (isNeededYOffset()) {
        showMenu(navbar$);
      } else {
        navbar$.removeClass(menuVisibleClassName);
      }
    });
  } else {
    console.log(navbar$, firstBlock$);
  }

  function showMenu(menu) {
    menu.addClass(menuVisibleClassName);
  }

  function isNeededYOffset() {
    return window.pageYOffset >= startFixedPosition;
  }

  // Плавная прокрутка
  $('[data-scroll="smooth"').on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
