const chatServices = require("../service/chatService");
try {
    module.exports.message = (req, callback) => {
        console.log("request", req);
        chatServices.addMessage(req, (err, data) => {
            if (err) {
                console.log("error in controller");
                callback(err);
            } else {
                console.log("controller is working fine");
                callback(null, data);
            }
        })
    }
}
catch (err) {
    console.log("Error in sending message!");

}
try {
    module.exports.getUserMsg = (req, res) => {
        console.log("Entered control");
        chatServices.getUserMsg(req, (err, data) => {
            var response = {};
            if (err) {
                data.response = false;
                data.response = err;
                res.status(500).send(responce)
            } else {
                response.success = true;
                response.result = data
                res.status(200).send(response)
            }
        })
    }
}
catch (err) {
    console.log("Error found in server chat controll!");

}