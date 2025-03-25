function firstChar(text) {
  // your code here
	// text.trim();
	// if(text.length === 0){
	// 	return '';
	// }
	for(let t of text){
		if(t != ' ' || t != ''){
			return t;
		}
	}
	
	return '';
}


// Do not change the code below
//Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));
