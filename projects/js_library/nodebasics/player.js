// module.exports = {
// //this is the start of a node module

// 	saysHello : function(){
// 		console.log("Hello");
// 	}
// }
//<br />
module.exports = function(){
	return {
	name : "",
	life : "",

	challenge : function(){
		console.log(this.name + " says Fight me!");
	}
}

}
//this is now an object factory
