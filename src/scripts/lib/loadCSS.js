var loadCSS = function (url) {
    var elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.href = url;
    document.head.appendChild(elem);
}

module.exports = loadCSS;
