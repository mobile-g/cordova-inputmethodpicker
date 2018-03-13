var exec = require("cordova/exec");

function NativeSettings2() {
}

NativeSettings2.prototype.open = function(onsucess, onfail) {
	exec(onsucess, onfail, "NativeSettings2", "open", []);
};

NativeSettings2.prototype.openSetting = function(settingName, onsucess, onfail) {
	exec(onsucess, onfail, "NativeSettings2", settingName, []);
};

var NativeSettings2 = new NativeSettings2();
module.exports = NativeSettings2;
