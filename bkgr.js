function onButtonClick() {
    var img = document.createElement("img");
    img.src = "images/Screenshot 2024-04-30 172438.png";
    var src = document.querySelector("main");
    img.style = "image"; // removed .display on most recent update
    src.appendChild(img);
    //alert('Button clicked!');
    const element = document.querySelector("button");
    element.remove();
  }

//const button = document.querySelector('button');
//button.addEventListener('click', onButtonClick);

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})