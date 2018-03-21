var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search();
    this.render();
    this.videoPlayer = new VideoPlayerView({'collection': this.videos});
    this.$('.player').html(this.videoPlayer.$el);
    this.videoList = new VideoListView({'collection': this.videos});
    this.$('.list').html(this.videoList.$el);
    this.search = new SearchView({ 'collection': this.videos });
    this.$('.search').html(this.search.$el);
    this.autoPlay = new AutoPlayView({ 'collection': this.videos });
    this.$('.navbar').append(this.autoPlay.$el);
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
