function onButtonClick() {
    var img = document.createElement("img");
    img.src = "images/bubbysleep.png";
    var src = document.getElementById("button");
    src.appendChild(img);
  }

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);