var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var btns = document.querySelectorAll('.button');
var modalButtonNo = document.querySelector('.modal__action--negative');

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < btns.length; i++) {
    (function (i) {
        btns[i].addEventListener('click', function () {
            // backdrop.style.display = 'block';
            // modal.style.display = 'block';

            // modal.className = 'open';  /* 这样会重写整个类 */

            modal.classList.add('open');
            backdrop.style.display = 'block';
            setTimeout(function () {
                backdrop.classList.add('open');
            }, 200);
        });
    })(i);
}

backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalButtonNo){
    modalButtonNo.addEventListener('click', closeModal);
}

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';

    if (modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function () {
        backdrop.style.display = 'none';
    }, 200);
}

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';

    backdrop.style.display = 'block';
    setTimeout(function () {
        mobileNav.classList.add('open');
        backdrop.classList.add('open');
    }, 200);
});