(function () {

  // MODEL
  window.Question = Backbone.Model.extend({
    defaults: {
      complete: false
    }
  });

  // COLLECTION
  window.Quiz = Backbone.Collection.extend({
    model: Question
  });

})();
