import {
  getTechnologyData,
  modifyTechnologyName,
  modifyTechnologyDescription,
  modifyTechnologyImg,
} from "./modules/index.js";

let index = 0;

const firstButton = document.querySelector(".button1");
const secondButton = document.querySelector(".button2");
const thirdButton = document.querySelector(".button3");
const technologyName = document.querySelector(".section__h2");
const technologyDescription = document.querySelector(".section__p");
const technologyImg = document.querySelector(".main__img");

async function modifyElements() {
  const technologyObject = await getTechnologyData();
  modifyTechnologyName(technologyObject, technologyName, index);
  modifyTechnologyDescription(technologyObject, technologyDescription, index);
  modifyTechnologyImg(technologyObject, technologyImg, index);
}

firstButton.addEventListener("click", () => {
  index = 0;
  modifyElements();
});
secondButton.addEventListener("click", () => {
  index = 1;
  modifyElements();
});
thirdButton.addEventListener("click", () => {
  index = 2;
  modifyElements();
});