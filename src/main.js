(function () {

  var question1 = new Question({
    question: "What's the capital of California?",
    answers: ["San Francisco", "Los Angeles", "Sacramento", "San Jose"],
    correctAnswer: "Sacramento"
  });

  var question2 = new Question({
    question: "What's the capital of Texas?",
    answers: ["Austin", "Houston", "Dallas", "Waco"],
    correctAnswer: "Austin"
  });

  var question3 = new Question({
    question: "What's the capital of Washington?",
    answers: ["Redmond", "Seattle", "Tacoma", "Olympia"],
    correctAnswer: "Olympia"
  });

  // var questionsView = new new QuestionView({
  //   questions: [question1, question2, question3],
  //   collection: questions,
  //   el: '#quiz'
  // });

  // Instantiate a new, empty collection of tasks
  var questions = new Quiz();

  // Create a new list view for our collection.
  // We tell it exactly where we want it to render (#task-list).
  var questionListView = new QuestionListView({
    collection: questions,
    el: '#quiz'
  });

  // Add initial tasks AFTER we create our taskListView. This is needed so that the
  // list view can listen for the collection's 'add' events.
  questions.add([
    question1,
    question2,
    question3
  ]);

  // Now we create a view to handle user input. This view allows the user to create new tasks.
  // Because the input html is already on the page, we tell this view to just use it (as opposed
  // to generating the html via an underscore template).
  // var inputView = new TaskInputView({
  //   collection: questions,
  //   el: 'form.new-task'
  // });

})();
