var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.videoPlayer = new VideoPlayerView({'collection': this.videos});
    this.$('.player').html(this.videoPlayer.render().$el);
    this.videoList = new VideoListView({'collection': this.videos});
    this.$('.list').html(this.videoList.render().$el);
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
