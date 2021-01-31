function tailwindApply(){
    var x = document.querySelectorAll('*');
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].className += ' ' + getComputedStyle(x[i]).getPropertyValue('--apply');
        x[i].className = x[i].className.replace(/  /g, " ");
    }
}
window.onload = function() {
    tailwindApply();
}