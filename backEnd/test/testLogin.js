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
      describe('login page testing',function(){
          it('status',function(done){
              chai.request(server).post('/login').send(data2.login).end((err,res)=>{
                  if(err){
                      console.log("error in test login"+err)
                      err.should.have.status(500)
                  }else{
                      console.log("success in test login"+res.body.token)
                      res.should.have.status(200)
                  }
                  done()
              })
          })
      })

  })