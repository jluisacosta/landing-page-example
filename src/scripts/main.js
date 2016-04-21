(function () {
    var loadCSS = require('./lib/loadCSS.js');
    var onScroll = require('./lib/onScroll.js')

    document.addEventListener('DOMContentLoaded',onDOMLoad);

    function onDOMLoad() {
        var btnMenu = document.getElementById('btnMenu');
        var navbarMenu = document.getElementById('navbarMenu');
        var headerElem = document.querySelector('.header');

        btnMenu.addEventListener('click',onClickMenu);
        window.addEventListener('scroll',onScroll);
        loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.1/css/font-awesome.min.css');
        loadCSS('https://fonts.googleapis.com/css?family=Montserrat|Lato');

        function onClickMenu() {
            navbarMenu.classList.toggle('header-menu-list--show');
        }
    }
}());
