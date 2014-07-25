var questions = new Questions();
var quizView = new QuizView({
  collection: questions,
  el: '#quizzy'
});


questions.add([
{
  question: "what is your favorite color",
  answer: "a",
  a: "blue!",
  b: "african or european",
  c: "to get to the holy grail",
  d: "asdf"
},
{
  question: "what is your quest",
  answer: "c",
  a: "asd",
  b: "african or european",
  c: "to get to the holy grail",
  d: "asdf"
},
{
  question: "what is the airspeed velocity of a swallow",
  answer: "b",
  a: "asd",
  b: "african or european",
  c: "asdf",
  d: "asdf"
}
]);
quizView.render();
