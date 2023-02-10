var lastScrollTop = 0;

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop(); // 스크롤바 수직 위치를 가져옵니다

  if (scrollTop >= 100) { // 숫자가 클수록 스크롤을 많이 내려야 메뉴가 사라집니다.
    if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
      $("header").css("top", "-59px");    // 얼마나 메뉴를 위로 끌어 올릴지 결정합니다.
    } else {
      $("header").css("top", "0px");
    }

    lastScrollTop = scrollTop;
  }
});