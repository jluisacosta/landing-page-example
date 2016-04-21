var onScroll = function () {
    if(window.scrollY >= 200){
        headerElem.classList.add('header--light');
    }
    else{
        headerElem.classList.remove('header--light');
    }
}

module.exports = onScroll;
