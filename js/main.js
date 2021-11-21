$(document).ready(function () {
  // Фиксированное меню
  var navbar$ = $("#navbar"),
    firstBlock$ = $("#first-section");
  startFixedPosition = firstBlock$.scrollTop() + firstBlock$.outerHeight();

  $(document).scroll(function () {
    if (window.pageYOffset >= startFixedPosition) {
      navbar$.addClass("navbar_fixed");
    } else {
      navbar$.removeClass("navbar_fixed");
    }
  });
});
