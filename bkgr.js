function onButtonClick() {
  //document.createElement("p").appendChild(document.createTextNode("Hello"))
   //document.getElementByTagName("h1").appendChild(document.createTextNode("beans"));
    //var img = document.createElement("img");
    //img.src = "images/bubbysleep.png";
    //var src = document.getElementByTagName("h1");
    //src.appendChild(img);
    alert('Button clicked!');
  }

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);