var AutoPlayView = Backbone.View.extend({
  initialize: function(){
    this.render();
    //this.collection
    this.collection.on('select', this.appendAutoPlay, this );
    //var context = this;
    //this.$el.on('click', context.updateCollection, context);
    
  },

  events:{
    'click .slider': 'updateCollection'
  },

  appendAutoPlay: function(){
    var newSrc = $('iframe').attr('src') + '?autoplay=' + this.collection.autoplay;
    $('iframe').attr('src', newSrc)
  },

  updateCollection: function(event){
    //event.stopPropagation();
    //event.preventDefault();
    this.collection.toggleAutoPlay();
    console.log(this.collection.autoplay);
  },

  render: function(){
    this.$el.html(this.template());
    console.log(this.$el);
    return this;
  },

  template: templateURL('src/templates/autoplay.html')

});