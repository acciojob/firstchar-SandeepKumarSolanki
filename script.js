function firstChar(text) {
  // your code here
	for(let t of text){
		if(t >= "A" && t <= "Z" || t >= "a" && t <= "z"){
			return t;
		}
	}
	return '';
}


// Do not change the code below
//Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));
