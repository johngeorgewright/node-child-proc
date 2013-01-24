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
        expect(data.toString().trim()).to.be('hurrah');
      });
      proc.stderr.on('data', function(data){
        throw new Error(data);
      });
      proc.on('exit', function(code){
        if(code === 0){
          done();
        }
        else{
          throw new Error('Exit code: ' + code);
        }
      });
    });

  });

});

