var ResultView = Backbone.View.extend({

  template: _.template($('#results').html()),

  initialize: function(){

  },

  render: function() {
    var newHtml = this.template(this.model.toJSON());
    this.$el.html(newHtml);
    return this;
  }
});
