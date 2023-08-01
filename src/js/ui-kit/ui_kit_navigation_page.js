import "../../scss/navigation.scss";

document.addEventListener("DOMContentLoaded", function () {
  const goBackLink = document.getElementById("go-back-link");

  goBackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Redirect to a default page if there is no history
      window.location.href = "http://localhost:8080/";
    }
  });
});
