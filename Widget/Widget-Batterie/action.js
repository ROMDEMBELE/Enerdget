self.onInit = function() {
    self.ctx.$scope.setLockedTo = function(state) {
        const url = 'http://localhost:4200/bms/config';
        const data = '{"locked": '+state+'}';
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
        const url = 'http://localhost:4200/bms/config';
        if (isCharge) {
            data = '{"force_chrg": true, "force_disch": false}';
        } else {
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
