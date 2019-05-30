var chai=require('chai');
var chaihttp=require('chai-http')
chai.use(chaihttp);
chai.should();
var server=require('../server')
var fs=require('fs')
 
function test() {

    var data = fs.readFileSync('/home/admin1/Desktop/chat app/backEnd/test/test.json');
    var data1 = JSON.parse(data);
    return data1;
}
  describe("find the status of api",function(){
      var data2=test();
      console.log("data2"+data2)
      describe('forgot password page',function(){
          it('status',function(done){
            
              chai.request(server).post('/forgotPassword').send(data2.forgotPassword).end((err,res)=>{
                  if(err){
                      console.log("error"+err)
                      err.should.have.status(500)
                  }else{
                      console.log(" forgot password output"+res.body)
                      res.should.have.status(200)
                  }
                  done();
                  

              })
          })
      })
    })
