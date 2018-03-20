var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this); //'sync?'
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    _.each(this.collection.models, function(video) {
      var entry = new VideoListEntryView({'model': video});
      this.$el.append(entry.render().$el);
    }, this);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
