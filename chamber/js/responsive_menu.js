function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("navbutton").classList.toggle("open");
}

const x = document.getElementById("navbutton");
x.onclick = toggleMenu;