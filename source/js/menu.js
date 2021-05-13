var pageHeader = document.querySelector('.page-header');
    var navToggle = document.querySelector('.page-header__nav-toggle');

    navToggle.addEventListener('click', function() {
      if (pageHeader.classList.contains('page-header--main-nav-closed')) {
        pageHeader.classList.remove('page-header--main-nav-closed');
        pageHeader.classList.add('page-header--main-nav-open');
      } else {
        pageHeader.classList.remove('page-header--main-nav-open');
        pageHeader.classList.add('page-header--main-nav-closed');
      }
    });
