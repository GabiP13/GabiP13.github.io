function onButtonClick() {
  document.createElement("p").appendChild(document.createTextNode("Hello"))
   // document.getElementById("h1").appendChild("beans");
    //var img = document.createElement("img");
    //img.src = "images/bubbysleep.png";
    //var src = document.getElementById("h1");
    //src.appendChild(img);
  }

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);