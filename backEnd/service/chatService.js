const chatModel = require('../app/model/chatModel');

    exports.addMessage = (req, callback) => {
        try{

        console.log("req on service");

        chatModel.addMessage(req, (err, data) => {

            if (err) {
                console.log("err on service file", err);
                callback(err)
            } else {

                console.log("data on service file", data);
                callback(null, data)
            }

        })

} catch (err) {
    console.log("error in chatsevices add message")
}
    }

    exports.getUserMsg = (req, callback) => {
        try{
        chatModel.getUserMsg(req, (err, data) => {
            if (err) {
                console.log("chat services is not working");
                callback(err);
            } else {
                console.log("chat service is working fine")
                callback(null, data);
            }
        })
    
} catch (err) {
    console.log("error in chatsevices get usermsg")
}
    }