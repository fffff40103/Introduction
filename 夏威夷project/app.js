let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header ul li a");
let headerLogo = document.querySelector("header div img");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "rgba(0,0,0,0.8)";
    header.style.color = "white";
    headerAnchor.forEach((anchor) => {
      anchor.style.color = "white";
    });
    headerLogo.style.backgroundColor = "rgba(0,0,0,0.01)";
  } else {
    header.style = "";
    headerAnchor.forEach((anchor) => {
      anchor.style.color = "#09777d";
      headerLogo.style = "";
    });
  }
});
