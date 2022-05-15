for (let el of document.querySelectorAll(".hover")) {
  let image = new Image();
  image.src = el.dataset.src;
  image.className = "followMouse";

  el.addEventListener("mouseover", (e) => {
    document.getElementById("container").append(image);
    image.style.left = `${e.clientX - image.width / 2}px`;
    image.style.top = `${e.clientY - image.height * 1.5}px`;
  });

  el.addEventListener("mouseout", (e) => {
    image.remove();
  });
}

window.addEventListener("mousemove", (e) => {
  let image = document.querySelector(".followMouse");
  if (image) {
    image.style.left = `${e.clientX - image.width / 2}px`;
    image.style.top = `${e.clientY - image.height * 1.5}px`;
  }
});
