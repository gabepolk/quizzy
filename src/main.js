(function () {

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
    { question: "What's the capital of California?" },
    { question: "What's the capital of Texas?", complete: true },
    { question: "What's the capital of Washington?" },
    { question: "What's the capital of Oregon?" },
    { question: "What's the capital of Nevada?" }
  ]);

  // Now we create a view to handle user input. This view allows the user to create new tasks.
  // Because the input html is already on the page, we tell this view to just use it (as opposed
  // to generating the html via an underscore template).
  // var inputView = new TaskInputView({
  //   collection: questions,
  //   el: 'form.new-task'
  // });

})();
