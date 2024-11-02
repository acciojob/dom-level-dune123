//your JS code here. If required.
function getDOMlevel(elementId){
	let element=document.getElementById(elementId);

	let level=0;
	while(element){
		level++;
		element = element.parentElement;
	}
	return level;
}

console.log(getDOMlevel("level"))