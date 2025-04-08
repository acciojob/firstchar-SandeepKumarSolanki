function firstChar(text) {
  // your code here
	text.trim();
	if(text.length === 0){
		return '';
	}else{
		for(let t of text){
			if(t >= 'a' && t <= 'z' || t >= 'A' && t <= 'Z'){
				return t;
			}
		}
	}

	return '';
}


// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
