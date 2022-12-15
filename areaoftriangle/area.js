const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateAreaOfTriangle(a,b) {
    const areaOfSquares = 1/2 *a * b;
    return areaOfSquares;
}
function calculateArea(){
    if (sides[0].value === "" || sides[1].value ==="") {
      outputEl.innerText = "Enter value for both base and height";
    } 
    else if (sides[0].value < 0 || sides[1].value < 0) {
      outputEl.innerText = "Base or Height can not be negative";
    } 
    else {
      const areaOfTraingle = calculateAreaOfTriangle(Number(sides[0].value),Number(sides[1].value));
      outputEl.innerText = "The Area of is = " + areaOfTraingle;
    }
}

areaBtn.addEventListener('click',calculateArea);
