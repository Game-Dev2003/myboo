document.addEventListener("DOMContentLoaded", () => {
  const videoSection = document.querySelector(".video");

  document.addEventListener("scroll", () => {
    const videoPosition = videoSection.getBoundingClientRect();

    if (videoPosition.top < window.innerHeight && videoPosition.bottom > 0) {
      videoSection.classList.remove("");
      videoSection.style.display = "block";
      videoSection.style.opacity = "1";
    }
  });
});
