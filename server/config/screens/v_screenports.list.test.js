let V_ScreenPortsList = require('./v_screenports.list');


V_ScreenPortsList.forEach(item => {
	console.log(item);
});

console.log("Number Of ViewPorts Found: " +V_ScreenPortsList.length)

if ( V_ScreenPortsList.length == 16) {
	console.log("[>- OK : Test Passing -<]")
} else {
	console.log("<]_!_[>- FAILED : Test NOT Passed -<]_!_[>")
}