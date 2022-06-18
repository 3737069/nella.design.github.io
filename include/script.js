function mediaQueryCheck(inputQuery) {
  var content = document.getElementById("navigation");
  if (inputQuery.matches) {
    for (let el of document.querySelectorAll(".hover")) {
      let image = new Image();
      image.src = el.dataset.src;
      image.className = "followMouse";
      image.style.width = "250px";
      image.style.position = "fixed";

      el.addEventListener("mouseover", (e) => {
        document.getElementById("container").append(image);
        image.style.left = `${e.clientX * 1.1}px`;
        image.style.top = `${e.clientY * 1.05}}px`;
        console.log("mouseover has been activate", e.clientX, e.clientY);
      });

      el.addEventListener("mouseout", (e) => {
        image.remove();
      });
    }

    window.addEventListener("mousemove", (e) => {
      let image = document.querySelector(".followMouse");
      if (image) {
        image.style.left = `${e.clientX * 1.1}px`;
        image.style.top = `${e.clientY * 1.05}px`;
        console.log("mousemove has been activate", e.clientX, e.clientY);
      }
    });
  } else {
  }
}
var mobileQuery = window.matchMedia("(min-width: 900px)");
mediaQueryCheck(mobileQuery);
mobileQuery.addListener(mediaQueryCheck);
