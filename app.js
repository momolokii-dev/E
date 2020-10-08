let openBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");

openBtn.onclick = function () {
  document.getElementById("side-menu").style.display = "block";
  document.getElementById("menu-btn").style.display = "none";
  document.getElementById("close-btn").style.display = "block";
};

closeBtn.onclick = function () {
  document.getElementById("side-menu").style.display = "none";
  document.getElementById("menu-btn").style.display = "block";
  document.getElementById("close-btn").style.display = "none";
};

const buttons = document.getElementById("buttons").children;
const items = document.getElementById("items").children;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";

      if (items[k].getAttribute("data-id") == target) {
        items[k].style.display = "block";
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  });
}

let filter = document.getElementById("filter-search");

filter.value = "";
filter.addEventListener("keyup", function (e) {
  const term = e.target.value;
  for (let n = 0; n < items.length; n++) {
    items[n].style.display = "none";

    if (items[n].getAttribute("data-search") == term) {
      items[n].style.display = "block";
    }
  }
});

let btnn = document.getElementById("scroll");
window.onscroll = function () {
  if (window.pageYOffset >= 400) {
    btnn.style.display = "block";
  } else {
    btnn.style.display = "none";
  }
};

btnn.onclick = function () {
  window.scrollTo(0, 0);
};
