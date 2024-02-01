let scrol = scrollY;
let navBar = document.querySelector("nav");
let shadow = document.querySelector(".shadow");
console.log(shadow);
let a = navBar.querySelectorAll(".desktop_links a");
let line = document.querySelector(".line");
let lines_mobile = document.querySelectorAll(".links_mobile .lines div");
let links_mobile = document.querySelector(".links_mobile");
let remove_button = document.querySelector(".links_mobile .links .header p");
let links = document.querySelector("ul.links");
let p = navBar.querySelector("p");
let chat = document.querySelector(".desktop_links li.chat");
let main = document.querySelector(".main");
let span_slid = document.querySelector(".slidspan");
const textSliderSpan = document.querySelector("#text__slider--span");
let sliderHight = document.querySelector(".slidspan span").clientHeight;
let sliderBanner = document.querySelector(".slider");
const worklist = document.querySelectorAll(".product");
const imageSliderControl = document.querySelectorAll(".mouse_postion");
const imgSlider = document.querySelector(".img_slider");
const imgSlider_left = document.querySelector(".img_slider .left");
const imgSlider_right = document.querySelector(".img_slider .right");
let activeImg;
const cursor = document.querySelector(".cursor");
const sliderImages = document.querySelectorAll(".img_slider .img");
const sliderStat = document.querySelectorAll(".img_slider .stat div");
sliderBanner.style.height = `${sliderHight}px`;
scrol.onchange = function () {};
let b = (document.body.style.backgroundColor = `rgb(249, 248, 244)`);
const aboutSection = document.querySelector(".meet");
const processSection = document.querySelector(".process_sec");
console.log(processSection);
let processSection_bottom = Math.round(
  window.scrollY +
    processSection.getBoundingClientRect().top -
    window.innerHeight
);
window.addEventListener("scroll", () => {
  changeColor([249, 248, 244], [13, 30, 33]);
  if (scrollY > 679) {
    document.querySelector(".links_mobile p").style.color = "#FFF";
    lines_mobile.forEach((e) => (e.style.backgroundColor = "#fff"));
    for (i = 0; i < a.length; i++) {
      a[i].style.color = "#fff";
    }
    p.style.color = "rgb(49, 60, 61)";
    chat.style.borderColor = "rgb(49, 60, 61)";
  } else {
    for (i = 0; i < a.length; i++) {
      a[i].style.color = "#313c3d";
    }
    lines_mobile.forEach((e) => (e.style.backgroundColor = "#313c3d"));
    document.querySelector(".links_mobile p").style.color = "#313c3d";
    p.style.color = "#313c3d";
    chat.style.borderColor = "rgba(10, 42, 48, 0.2)";
  }
  scrollY == 0
    ? (document.body.style.backgroundColor = `rgb(249, 248, 244)`)
    : "";
  const currentScroll = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = Math.min(currentScroll / maxScroll, 1);
  if (window.scrollY > processSection_bottom) {
    aboutSection.style.opacity = "0";
    document.body.style.backgroundColor = `rgb(249, 248, 244)`;
    shadow.style.background =
      "linear-gradient(rgb(249 248 244) 40%, transparent)";
    for (i = 0; i < a.length; i++) {
      a[i].style.color = "#313c3d";
    }
    lines_mobile.forEach((e) => (e.style.backgroundColor = "#313c3d"));
    document.querySelector(".links_mobile p").style.color = "#313c3d";
    p.style.color = "#313c3d";
    chat.style.borderColor = "rgba(10, 42, 48, 0.2)";
  } else {
    aboutSection.style.opacity = "1";
  }
});

// links Mobile
links_mobile.querySelector(".lines").addEventListener("click", () => {
  links_mobile.querySelector(".links").style.display = "flex";
});
remove_button.addEventListener("click", () => {
  links_mobile.querySelector(".links").style.display = "none";
});

// Change Text
let times = 0;
let runs = 0;
const change_text = setInterval(() => {
  times === 7 ? (times = 0) : "";
  span_slid.style.transform = `translateY(${-sliderHight * times}px)`;
  times++;
}, 1500);
window.onresize = (e) => {
  sliderHight = document.querySelector(".slidspan span").clientHeight;
  processSection_bottom =
    window.scrollY +
    processSection.getBoundingClientRect().top -
    window.innerHeight;
  console.log(sliderHight);
  sliderBanner.style.height = `${sliderHight}px`;
};
worklist.forEach((e) => {
  e.addEventListener("click", () => {
    const activeContent = e.querySelector(".info-product");
    worklist.forEach((e) => {
      e.querySelector(".info-product").setAttribute("aria-hidden", "true");
    });
    activeContent.setAttribute("aria-hidden", "false");
  });
});
imageSliderControl.forEach((e) => {
  e.addEventListener("click", () => {
    SliderImgStat(e.id);
  });
});

function SliderImgStat(action) {
  activeImg = document.querySelector(".img_slider .active");
  if (activeImg) {
    let activeId = +activeImg.getAttribute("data-id");
    if (action == "left") {
      activeId--;
    } else {
      activeId++;
    }
    if (activeId < 1 && action == "left") return;
    else if (activeId > 3 && action == "right") return;
    sliderImages.forEach((e) => {
      let imgID = +e.getAttribute("data-id");
      if (imgID == activeId) {
        e.classList.add("active");
      } else {
        e.classList.remove("active");
      }
    });
    sliderStat.forEach((e) => {
      if (+e.getAttribute("data-id") == activeId) {
        e.classList.add("active");
      } else if (+e.getAttribute("data-id") > activeId) {
        e.classList.remove("active");
        e.classList.remove("full");
      } else if (+e.getAttribute("data-id") < activeId) {
        e.classList.add("full");
        e.classList.remove("active");
      }
    });
  }
}
let position;
let scale = 0;
let center;
imgSlider_right.addEventListener("mouseenter", () => {
  scale = "-1";
  center = imgSlider_left.getBoundingClientRect().left - cursor.offsetWidth / 2;
});
imgSlider_left.addEventListener("mouseenter", () => {
  scale = "1";
  center = imgSlider_left.getBoundingClientRect().left + cursor.offsetWidth / 2;
});
imgSlider.addEventListener("mousemove", (e) => {
  position = {
    X: e.clientX,
    Y: e.clientY,
  };
  console.log(e.clientX);
  cursor.style.transform = `scale(1) translateX(${
    position.X - center
  }px) translateY( ${
    position.Y - imgSlider_left.getBoundingClientRect().top + 50
  }px) scaleX(${scale})  rotateZ(-90deg) `;
});
imgSlider.addEventListener("mouseleave", (e) => {
  cursor.style.transform = `scale(0)`;
});
function changeColor(start, end) {
  let a, b, c;
  const currentScroll = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = currentScroll / maxScroll;
  const [startR, startG, startB] = start;
  const [endR, endG, endB] = end;
  r = Math.round(startR + (endR - startR) * progress * 9.45);
  g = Math.round(startG + (endG - startG) * progress * 9.45);
  b = Math.round(startB + (endB - startB) * progress * 9.45);
  startR + (endR - startR) * progress * 9.45;
  let newColor;
  if (window.scrollY >= 567) {
    newColor = `rgba(13, 30, 33, 1)`;
  } else {
    newColor = `rgb(${r},${g},${b})`;
  }
  document.body.style.backgroundColor = `${newColor}`;
  shadow.style.background = `linear-gradient(180deg, ${newColor} 40%, transparent)`;
}
// Procces Section
const processItems = document.querySelectorAll(".process_items .process");
processItems.forEach((e) => {
  e.addEventListener("click", () => {
    const processContent = e.querySelector("div");
    let wantedAction = processContent.getAttribute("aria-hidden");
    processItems.forEach((e) => {
      e.querySelector("div").setAttribute("aria-hidden", "true");
    });
    if (wantedAction == "true") {
      processContent.setAttribute("aria-hidden", "false");
    }
    console.log(processContent);
  });
});
