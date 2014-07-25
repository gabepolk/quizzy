var QuizView = Backbone.View.extend({
  el:"#quizzy",
  initialize: function(options){
    // console.log(options);
    this.score = 0;
  },

  render: function(){
    this.collection.each(this.addQuestion, this);
    this.$el.append("<button type = 'submit' class = 'quiz-submit'>submit</button>");
  },

  addQuestion: function(question){
    var questionView = new QuestionView({
      model: question
    });
    this.$el.append(questionView.render().el)
  },

  events: {
    "click .quiz-submit": "checkAnswers"
  },

  checkAnswers:  function(){
    var collectionList = this.collection.models
    for(var i = 0; i < collectionList.length; i++){
      if(collectionList[i].attributes.answer === collectionList[i].attributes.selectedAnswer){
        this.score += 1;
      }
    }

    var resultView = new ResultView({
      model: new Result({
        userScore: this.score,
        total: collectionList.length
      })
    });

    this.$el.empty();
    this.$el.append(resultView.render().el);
  }
});
