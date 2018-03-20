var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(search=''){
    var searchObj =  {
      'maxResults': '5',
      'part': 'snippet',
      'query': search,
      'type': ''
    };
    return this.fetch(searchObj);
  },

  fetch: function(message){
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        key: window.YOUTUBE_API_KEY,
        method: 'GET',
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: function(data){
          return data.items;
        },
        error: (data) => {console.error('mistakes were made',data);}
      });
  }
});
