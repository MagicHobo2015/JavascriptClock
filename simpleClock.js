function Clock() {
	// create the date object that holds all the time info
	let dateObject = new Date();
	
	// get the hours, minutes, and seconds from the date obj
	let hour = dateObject.getHours().toString();
	let minutes = dateObject.getMinutes().toString();
	let seconds = dateObject.getSeconds().toString();

	// bundle it all in some json
	let time = { "hour" : hour, "minute" : minutes, "seconds" : seconds }
	console.log(time["seconds"]);
	return  time;


};

function updateClock(){
	// grab the current time in the form of JSON
	let timeJSON = Clock();

	// check the checkbox to see if its military time or not
	let checkBox = document.getElementById('checkBox');
	let standardTime = checkBox.checked
	let hour; let amPm;
	// extract time a little 12 hour conversion 
	if (standardTime){
		hour = (timeJSON['hour'] % 12).toString();
		amPm = timeJSON["hour"] > 12 ? " : PM" : " : AM";
	} else {
		hour = timeJSON['hour'].toString();
		 amPm = "";
	};
	// these are simpler
	let minute = timeJSON["minute"].toString();
	let seconds = timeJSON["seconds"].toString();
	// this gets the og military time, to tell if its am, pm.
	// get my clock holder
	let divtext = document.getElementById("clockText");
	// build a string.
	let clockText = hour + " : " + minute + " : " + seconds + amPm
	divtext.innerHTML = clockText;
};