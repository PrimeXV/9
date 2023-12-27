const mainContainerE1 = document.querySelector(".main-container");

const btnE1 = document.querySelector(".btn");

const popupContainerE1 = document.querySelector(".popup-container");

const closeIconE1 = document.querySelector(".close-icon");

const inputE1 = document.getElementsByClassName("input");

const joinE1 = document.querySelector(".join");


btnE1.addEventListener("click", () => {
  mainContainerE1.classList.add("active");
  popupContainerE1.classList.remove("active");
});

closeIconE1.addEventListener("click", () => {
  mainContainerE1.classList.remove("active");
  popupContainerE1.classList.add("active");
});


joinE1.addEventListener("click", () => {
  if (inputE1.length > 0) {
    console.log(inputE1[0].value);
  }
});
