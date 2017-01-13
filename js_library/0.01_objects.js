
var train = {

	company: "",
	number: 0,
	time: 0,
	city: "",
};

train.company = "Great Train Company";
train.number = "12";
train.city = "Chicago";
train.time = "12:00";

var item = "the #" + train.number + " train will be arriving in " + train.city + " at " + train.time + " today."

console.log(item);