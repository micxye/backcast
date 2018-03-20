var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    
  },

  events: {
    'click .video-list-entry-title': 'modelSelect'
  },
  
  modelSelect: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
