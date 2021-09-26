"strict mode";
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const modal = document.querySelectorAll(".modal");
const modal1 = document.querySelector(".modal-1");
const modal2 = document.querySelector(".modal-2");
const modal3 = document.querySelector(".modal-3");
const overlay = document.querySelector(".overlay");
const closeBTN1 = document.querySelector(".close-1");
const closeBTN2 = document.querySelector(".close-2");
const closeBTN3 = document.querySelector(".close-3");

const closeModal = function () {
  modal1.classList.add("hidden");
  modal2.classList.add("hidden");
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};
////////////////////
//show modal buttons
btn1.addEventListener("click", function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btn2.addEventListener("click", function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btn3.addEventListener("click", function () {
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBTN1.addEventListener("click", closeModal);
closeBTN2.addEventListener("click", closeModal);
closeBTN3.addEventListener("click", closeModal);
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

///////////////
/////
