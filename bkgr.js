function onButtonClick() {
    var img = document.createElement("img");
    img.src = "./images/Resume.jpg";
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



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}