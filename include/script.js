//copy to clipboard//
function copyEmail(element) {
  const email = "nellawong97@gmail.com";
  const tooltip = element.nextElementSibling;

  navigator.clipboard
    .writeText(email)
    .then(function () {
      // Show tooltip
      tooltip.classList.add("show");

      // Hide tooltip after 2 seconds
      setTimeout(function () {
        tooltip.classList.remove("show");
      }, 2000);
    })
    .catch(function (err) {
      console.error("Failed to copy: ", err);
      tooltip.textContent = "Copy failed";
      tooltip.classList.add("show");
      setTimeout(function () {
        tooltip.classList.remove("show");
        tooltip.textContent = "Copied!";
      }, 2000);
    });
}
