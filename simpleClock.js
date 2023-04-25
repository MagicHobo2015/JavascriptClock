function Clock() {
	// create the date object that holds all the time info
	let dateObject = new Date();
	
	// get the hours, minutes, and seconds from the date obj
	let hour = dateObject.getHours().toString();
	let minutes = dateObject.getMinutes().toString();
	let seconds = dateObject.getSeconds().toString();

	// bundle it all in some json
	let time = { "hour" : hour, "minute" : minutes, "seconds" : seconds }
	return  time;


};