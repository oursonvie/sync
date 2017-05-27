// program API
JsonRoutes.add('get', '/api', function(req, res, next) {
    console.log(req.params);
    console.log(req.query);



    JsonRoutes.sendResult(res, {
        text: 'hello world'
    });
});

JsonRoutes.add('get', '/login', function(req, res, next) {
    console.log(req.params);
    console.log(req.query);



    JsonRoutes.sendResult(res, {
        text: 'hello world'
    });
});
