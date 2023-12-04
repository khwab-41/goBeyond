let modal = document.getElementById("login_form");
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}