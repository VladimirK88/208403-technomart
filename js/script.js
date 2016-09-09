var link = document.querySelector(".write-us-open-window");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-content-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");

      });

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});

var linkAdd = document.querySelector(".buy");
var popupAdd = document.querySelector(".added-product");
var closeAdd = popupAdd.querySelector(".modal-content-close");

  linkAdd.addEventListener("click", function(event) {
  event.preventDefault();
  popupAdd.classList.add("modal-content-show");

    });

  closeAdd.addEventListener("click", function(event) {
  event.preventDefault();
  popupAdd.classList.remove("modal-content-show");
    });

var mapOpen = document.querySelector(".map-open");
var mapPopup = document.querySelector(".modal-content-map");
var mapclose = mapPopup.querySelector(".modal-content-close");
  mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");

    });

  mapclose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
    });
