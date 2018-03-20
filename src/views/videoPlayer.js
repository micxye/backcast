var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('select', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.collection.models[0].attributes));
  
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
