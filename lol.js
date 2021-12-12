window.addEventListener("load", function() {
  
  let element = document.querySelector('.rainbow-text');
  setInterval(() => {
    if(element.innerText == "We fell in love in october"){
      element.innerText = "\nI love nika\n\n";
      const elements = document.getElementsByClassName("rainbowText");
      for (let i = 0; i < elements.length; i++) {
        generateRainbowText(elements[i]);
      }
    } else {
      element.innerText = "We fell in love in october";
      const elements = document.getElementsByClassName("rainbowText");
      for (let i = 0; i < elements.length; i++) {
        generateRainbowText(elements[i]);
      }
    }
  }, 3000)


    
    
});
  
  function generateRainbowText(element) {
    var text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      let charElem = document.createElement("span");
      charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
      charElem.innerHTML = text[i];
      element.appendChild(charElem);
    }
  }


  
  // hello world


