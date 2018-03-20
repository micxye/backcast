var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('select', function(video){
      this.render(video);
    }, this);
    this.render();
  },

  render: function(video=this.collection.models[0]) {
    if (this.collection.models.length===0) {return this;}
    this.$el.html(this.template(video.attributes));
  
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
