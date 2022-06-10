document.getElementById('menu_icon').addEventListener("click", myScript);
function myScript() {
    var menu = document.getElementById('menu_wrapper');
    var close = document.getElementById('cross');
    menu.classList.toggle("show");
    close.classList.toggle("close_show");
}
