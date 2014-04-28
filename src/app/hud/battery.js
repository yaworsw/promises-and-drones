var battery = document.getElementById('battery');

module.exports = function(data) {

  battery.innerHTML = data.demo.batteryPercentage;

};
