function onButtonClick() {
    var img = document.createElement("img");
    img.src = "images/Screenshot 2024-04-30 172438.png";
    var src = document.querySelector("h1");
    img.style = "image"; // removed .display on most recent update
    src.appendChild(img);
    //alert('Button clicked!');
  }

//const button = document.querySelector('button');
//button.addEventListener('click', onButtonClick);