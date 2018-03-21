var Videos = Backbone.Collection.extend({

  initialize: function(){
    this.debouncedSearch = _.debounce(this.search, 500);
  },
  autoplay: 0,
  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=' + window.YOUTUBE_API_KEY,
  parse: function(response) {
    return response.items;
  },

  toggleAutoPlay: function(){
    this.autoplay = (this.autoplay) ? 0 : 1;   
  },

  search: function(search=''){
    //console.log('trigger');
    // var searchObj =  {
    //   'maxResults': '5',
    //   'part': 'snippet',
    //   'query': search,
    //   'type': '',
    //   'key': window.YOUTUBE_API_KEY
    // };
    this.fetch({
      data: { q: search }
      // error: function(data) => {console.error('mistakes were made',data);}
    });
  }

});
