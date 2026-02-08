function handleRouting() {
  const pageId = window.location.hash.slice(1) || "home";

  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active");
  } else {
    document.getElementById("home").classList.add("active");
  }
}

window.addEventListener("hashchange", handleRouting);

window.addEventListener("load", handleRouting);
