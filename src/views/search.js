var SearchView = Backbone.View.extend({
  initialize: function() {
    

  },

  events: {
    'click button': 'triggerSearch',
    'keyup input': 'triggerSearch'
  },

  enterTriggerSearch: function(event) {
    if (event.keyCode == 13) {
      this.triggerSearch();
    }
  },

  triggerSearch: function() {
    this.collection.search(this.$('input').val());
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
