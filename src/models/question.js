(function () {

  // MODEL
  window.Question = Backbone.Model.extend({
    defaults: {
      complete: false,
      answer: null
    }
  });

  // COLLECTION
  window.Quiz = Backbone.Collection.extend({
    model: Question
  });

})();
