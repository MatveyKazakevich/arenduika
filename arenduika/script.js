function handleBurgerClick() {
    const navbarEl = document.getElementById("navbar");
    if (navbarEl.classList.contains("burgerView")) {
      navbarEl.classList.remove("burgerView");
    } else {
      navbarEl.classList.add("burgerView");
    }
  
    const burgerItemEl = document.getElementById("navbar-burger-item");
    if (burgerItemEl.classList.contains("burgerView")) {
      burgerItemEl.classList.remove("burgerView");
    } else {
      burgerItemEl.classList.add("burgerView");
    }
  }
  
  function ready() {
    const navbarItemEls = document.getElementsByClassName("navbar-item");
    for (let item of navbarItemEls) {
      item.onclick = handleBurgerClick;
    }
  
    const burgerIconEl = document.getElementById("navbar-burger-icon");
    burgerIconEl.onclick = handleBurgerClick;
  }
  
  document.addEventListener("DOMContentLoaded", ready);
  