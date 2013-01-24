var expect    = require('expect.js'),
    base      = require('child_process'),
    childProc = require('../');

describe('child-proc', function(){

  it('will have the methods found in the child_process module', function(){
    var method;
    for(method in base){
      if(base.hasOwnProperty(method)){
        expect(childProc).to.have.property(method);
      }
    }
  });

  describe('#spawn()', function(){

    it('should run as expected in any environment', function(done){
      var proc = childProc.spawn('echo', ['hurrah']);
      proc.stdout.on('data', function(data){
        expect(data.toString()).to.be("hurrah\n");
        done();
      });
    });

  });

});

