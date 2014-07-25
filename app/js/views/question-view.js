var QuestionView = Backbone.View.extend({
  template: _.template($('#question').html()),
  initialize: function(options){
    console.log(options);
  },

  render: function(){
    var newHtml = this.template;
    this.$el.html(newHtml(this.model.toJSON()));
    return this;
  },

  events:{
  "change .ans":"selectAnswer"
  },

  selectAnswer: function(e){
    var answer = $(e.currentTarget)[0].id;
    this.model.set({selectedAnswer: answer});
  }
});
