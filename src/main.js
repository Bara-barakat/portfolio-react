export default function Up() {
  let span = document.querySelector(".up");

  window.onscroll = function () {
    if (window.scrollY >= 700) {
      span.classList.add("show");
      span.style.visibility = "visible";
    } else {
      span.classList.remove("show");
      span.style.visibility = "hidden";
    }
  };

  span.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    span.style.visibility = "hidden";
  };
}
