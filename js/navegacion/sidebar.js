function openNav() {
    document.getElementById("sidebar").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
    document.getElementById("openbtn").style.display = "none";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openbtn").style.display = "block";

}
