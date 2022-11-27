const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90","right angled"];

function calculateScore(){
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  // console.log(formResults);
//   for(let entry of formResults.entries())
// {
//   console.log(entry);
// }
for(let value of formResults.values())
{
  if(value === correctAnswers[index]){
    score = score + 1;
  }
  index = index + 1;
}
console.log(score);
outputEl.innerText = "Your Score is "+ score;
}
submitAnswerBtn.addEventListener('click', calculateScore); 