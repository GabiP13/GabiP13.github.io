function onButtonClick() {
    var img = document.createElement("img");
    img.src = "images/images/bubbysleep.png";
    var src = document.getElementById("body");
    src.appendChild(img);
  }

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);