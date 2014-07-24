(function () {

  // LIST VIEW
  window.QuestionListView = Backbone.View.extend({

    initialize: function (options) {
      // Call our assignNewTaskView function whenever our collection gets a new task.
      this.listenTo(this.collection, 'add', this.assignNewQuestionView);
    },

    assignNewQuestionView: function (question) {
      // Create a new view and assign it to the question model.
      // We're assigning it to the model instance so we can grab it later in `render`
      question.view = new QuestionView({ model: question });

      // Render the new view and add it to our element
      question.view.render();
      $(this.el).append( question.view.el );
    },

    render: function () {
      // Here we are basically re-renders the collection.
      // Useful for calling when the collection removes a model
      $(this.el).empty();

      // Performs the assignNewTaskView function on each model in our collection.
      // We need to specifically tell .each to use this TaskList view as the caller.
      // We do that by passing it as the second argument.
      this.collection.each(this.assignNewQuestionView, this);
    }

  });

})();
