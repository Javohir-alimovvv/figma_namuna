const sidebarEl = document.querySelector(".sidebar");
const menuEl = document.querySelector(".bi-list");
const closeEl = document.querySelector(".bi-x-lg");
const overflow = document.querySelector(".overflow");

menuEl.addEventListener("click", () => {
  sidebarEl.style.marginLeft = "0";
  overflow.style.height = "100vh";
});

closeEl.addEventListener("click", () => {
  sidebarEl.style.marginLeft = "-80%";
  overflow.style.height = "0";
});

overflow.addEventListener("click", () => {
  sidebarEl.style.marginLeft = "-80%";
  overflow.style.height = "0";
});
