function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);
  selectedPage.classList.add("active");
}
