var app = require('../app'),
  assert = require('assert'),
  http = require('http');

describe('GET /', function(){
  before(function() {
      var port = '3001';
      app.set('port', port);
      var server = http.createServer(app);
      server.listen(port);
  });

  it('should return a 200 status code', function (done){
    http.get({ host: 'localhost', port: 3001 }, function(res) {
      assert.deepEqual(res.statusCode, 200);
      done();
    }).on('error', function(e) {
      throw new Error(e);
    });
  });

});
