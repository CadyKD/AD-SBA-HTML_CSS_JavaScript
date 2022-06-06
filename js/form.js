const submitbtn = document.getElementById("submit-btn");
const formoutput = document.getElementById("form-output");

submitbtn.addEventListener('click', submitForm);

function submitForm(event) {
	const name = document.getElementById("name").value;
	const emoji = document.getElementById("emojipicker").value;
	var emojiImg = '../images/emoji/smile.jpg';
	formoutput.innerHTML = "";

	if (emoji === "smile") {
		emojiImg = '../images/emoji/smile.jpg';
	} else if (emoji === "goofy") {
		emojiImg = '../images/emoji/goofy.jpg';
	} else {
		emojiImg = '../images/emoji/sad.jpg';
	}

	if (document.getElementById("name").value == "") {
		alert("Please fill in the form.");
	} else {
		formoutput.innerHTML = `
		<h2>Name: </h2>
		<p>${name}</p>
		<h2>Emoji:</h2>
		<img src="${emojiImg}" width="300px">`;
	}
}