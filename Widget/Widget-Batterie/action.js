self.onInit = function() {
    self.ctx.$scope.setLockedTo = function(state) {
        console.log("setLockedTo" + state);
        const url = 'http://localhost:4200/bms/config';
        const data = '{"locked": '+state+'}';
        console.log("data : " + data);
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            dataType: 'json',
            success: function (data) {
                console.log("succes : " + JSON.stringify(data));
            },
            error: function(data) {
                console.log("error : " + JSON.stringify(data));
            }
        });
    }
    
    self.ctx.$scope.setCharge = function(isCharge) {
        var data = {};
        console.log("isCharge" + isCharge);
        const url = 'http://localhost:4200/bms/config';
        if (isCharge) {
            // TODO get pour savoir si la batterie n'est pas déja à ca
            // charge maximal ?
            data = '{"force_chrg": true, "force_disch": false}';
        } else {
            // TODO get pour savoir si la batterie n'est pas vide ?
            data = '{"force_disch": true, "force_chrg": false}';
        }
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            dataType: 'json',
            success: function (data) {
                console.log("succes : " + JSON.stringify(data));
            },
            error: function(data) {
                console.log("error : " + JSON.stringify(data));
            }
        });
    }

    self.ctx.$scope.testCallConfig = function() {
        const url = 'http://localhost:4200/bms/config';
        console.log("testCallCalibration");
        var request = new Request(url, {
            method: 'GET',
        });
        fetch(request)
            .then((resp) => resp.json())
            .then(function (data) {
                console.log("data : " + JSON.stringify(data));
                console.log("force_disch : " + data.data.force_disch);
            })
            .catch(function (error) {
                console.log(JSON.stringify(error));
            });
    }
}
