function onButtonClick() {
    var img = document.createElement("img");
    img.src = "images/bubbysleep.png";
    var src = document.querySelector("h1");
    img.style.display = "img";
    src.appendChild(img);
    //alert('Button clicked!');
  }

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);