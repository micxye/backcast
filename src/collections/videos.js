var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=' + window.YOUTUBE_API_KEY,
  parse: function(response) {
    return response.items;
  },

  search: function(search=''){
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
    })
  }

  // fetch: function(message){
  //   $.ajax({
  //       url: 'https://www.googleapis.com/youtube/v3/search',
  //       key: window.YOUTUBE_API_KEY,
  //       method: 'GET',
  //       data: message,
  //       // contentType: 'application/json',
  //       success: function(data){
  //         return data.items;
  //       },
  //       error: (data) => {console.error('mistakes were made',data);}
  //     });
  // }
});
