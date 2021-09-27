"strict mode";
const btn = document.querySelectorAll(".btn");
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closeBTN = document.querySelectorAll(".close-modal");

////////////////////

const closeModal = function () {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add("hidden");
  }
  overlay.classList.add("hidden");
};
////////////////////
//show modal buttons

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    modal[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

////////////////////
//close modal button
for (let i = 0; i < closeBTN.length; i++) {
  closeBTN[i].addEventListener("click", closeModal);
}

///////////////
///////////////
//////escape key function
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

//////////////
/////overlay click function
overlay.addEventListener("click", closeModal);
