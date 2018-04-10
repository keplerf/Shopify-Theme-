
$.getScript("{{ 'instafeed.min.js' | asset_url }}", function(){
    var feed = new Instafeed({
        get: 'user',
        tagName: 'itsyoursole',
        target: 'keplerweb.com',
        userId: '399294868',
        clientId: '5f5aa1ec23cf4d2cae03bebfe15523c3',
        sortBy: 'most-recent',
        limit: '12',
        accessToken: 'adf42566996a451c9f3a1ee4e168abac',
        template: '<div class="swiper-slide"><img src="{{image}}" /></div>',
        resolution: 'standard_resolution'
        
    });
    feed.run();
    });
    