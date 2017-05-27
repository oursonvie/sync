// program API
JsonRoutes.add('get', '/api', function(req, res, next) {
    console.log(req.params);
    console.log(req.query);



    JsonRoutes.sendResult(res, {
        text: 'hello world'
    });
});

JsonRoutes.add('get', '/login', function(req, res, next) {
    console.log(req.query);
    console.log(req.query.code)

    var jscode = req.query.code
    var appid = 'wx49c58d3d75baabf1'
    var secret = '49abff6b3020dd657a45534ca2f99e9c'

    var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code'

    HTTP.call( 'GET', 'https://api.weixin.qq.com/sns/jscode2session', {
      params: {
        "appid" : appid,
        "secret" : secret,
        "js_code" : jscode,
        "grant_type" : "authorization_code"
      }
    }, function( error, response ) {
      if ( error ) {
        console.log( error );
      } else {
        if (response.statusCode == 200) {
          var result = response.content
          console.log(result)
        } else {
          console.log('error')
        }
      }
    });

});

// program API
JsonRoutes.add('get', '/userInfo', function(req, res, next) {

  var userInfo = req.query.userInfo
  console.log(userInfo)
  console.log(userInfo.iv)

});
