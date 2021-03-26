const topSlider = function () {
  const wrap = document.querySelector("#TopSlider");
  if (!wrap) return null;

  const images = wrap.children;
  const timeout = 10000;
  let imageCount = 0;

  function changeClass() {
    setTimeout(() => {
      images[imageCount].classList.remove("active");
      if (imageCount >= 3) {
        imageCount = 0;
      } else {
        imageCount++;
      }
      images[imageCount].classList.add("active");

      changeClass();
    }, timeout);
  }

  if (images?.length) {
    images[imageCount].classList.add("active");
    changeClass();
  }
};

(function () {
  topSlider();
})();
