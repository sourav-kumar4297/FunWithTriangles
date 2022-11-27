const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateAreaOfTriangle(a,b) {
    const areaOfSquares = 1/2 *a * b;
    return areaOfSquares;
}
function calculateArea(){
  const areaOfTraingle = calculateAreaOfTriangle(Number(sides[0].value),Number(sides[1].value));
  outputEl.innerText = "The Area of is = " + areaOfTraingle;

}

areaBtn.addEventListener('click',calculateArea);