menu = document.getElementById("mobile-menu");
menuBtn = document.getElementById("menu-btn");
menuOpen = document.getElementById("menu-open");
menuClosed = document.getElementById("menu-closed");

let isOpen = false;
menuBtn.addEventListener("click", () => {
  if (isOpen === false) {
    isOpen = true;
    document.getElementById("menu-open").className = "block";
    document.getElementById("menu-closed").className = "hidden";
    document.getElementById("mobile-menu").className = "block sm:hidden";
  } else {
    isOpen = false;
    document.getElementById("menu-closed").className = "block";
    document.getElementById("menu-open").className = "hidden";
    document.getElementById("mobile-menu").className = "hidden sm:hidden";
  }
});
