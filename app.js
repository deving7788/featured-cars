import { vehicleInfo } from "./data.js";

const articleContainer = document.querySelector(".article-container");
const openAll = document.querySelector(".open-all");
const closeAll = document.querySelector(".close-all");

openAll.addEventListener("mousedown", () => {
  openAll.classList.add("pushed-down");
});
openAll.addEventListener("mouseup", () => {
  openAll.classList.remove("pushed-down");
});

closeAll.addEventListener("mousedown", () => {
  closeAll.classList.add("pushed-down");
});
closeAll.addEventListener("mouseup", () => {
  closeAll.classList.remove("pushed-down");
});

vehicleInfo.map((item) => {
  const { list } = item;
  const article = document.createElement("article");
  article.classList.add("article");
  const articleTitleContainer = document.createElement("div");
  articleTitleContainer.classList.add("article-title");
  const articleTitle = document.createElement("p");
  articleTitle.textContent = item.title;
  articleTitleContainer.appendChild(articleTitle);
  const btnExpand = document.createElement("div");
  btnExpand.classList.add("btn-expand");
  btnExpand.addEventListener("click", () => {
    articleBody.classList.remove("hidden");
    btnExpand.classList.add("hidden");
  });
  const iconExpand = document.createElement("i");

  iconExpand.classList.add("fa-solid", "fa-angles-down");
  btnExpand.appendChild(iconExpand);
  const btnRetract = document.createElement("div");
  btnRetract.classList.add("btn-retract");
  const iconRetract = document.createElement("i");
  iconRetract.classList.add("fa-solid", "fa-angles-up");
  btnRetract.appendChild(iconRetract);
  btnRetract.addEventListener("click", () => {
    articleBody.classList.add("hidden");
    btnExpand.classList.remove("hidden");
  });

  const articleBody = document.createElement("main");
  articleBody.classList.add("article-body", "hidden");
  const listContainer = document.createElement("div");
  listContainer.classList.add("bullet-points");
  const ul = document.createElement("ul");
  ul.classList.add("listContainer");
  ul.innerHTML = list
    .map((item) => {
      const { name, url } = item;
      return `<li><a href=${url} class="model-link" target="_blank">${name}</li></a>`;
    })
    .join("");
  listContainer.appendChild(ul);
  articleBody.appendChild(listContainer);
  articleBody.appendChild(btnRetract);
  article.appendChild(articleTitleContainer);
  article.appendChild(btnExpand);
  article.appendChild(articleBody);
  articleContainer.appendChild(article);
});

const articleBodies = document.querySelectorAll(".article-body");
openAll.addEventListener("click", () => {
  articleBodies.forEach((item) => {
    item.classList.remove("hidden");
    const btnExpandRep1 = item.parentElement.firstChild.nextSibling;

    if (!btnExpandRep1.classList.contains("hidden")) {
      btnExpandRep1.classList.toggle("hidden");
    }
  });
});
closeAll.addEventListener("click", () => {
  articleBodies.forEach((item) => {
    item.classList.add("hidden");
    const btnExpandRep2 = item.parentElement.firstChild.nextSibling;

    if (btnExpandRep2.classList.contains("hidden")) {
      btnExpandRep2.classList.toggle("hidden");
    }
  });
});
