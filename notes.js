console.log("Starting notes.js");

const fs = require("fs");
// module.exports.addNote = () => {
// 	console.log("addNote");
// 	return "New note";
//

var addNote = (title, body) => {
	//console.log("Adding note", title, body);
	var notes = [];
	var note = {
		title,
		body
	};

	try {
		var notesString = fs.readFileSync("notes-data.json");
		notes = JSON.parse(notesString);
	} catch (e) {}

	notes.push(note);

	fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var getAll = () => {
	console.log("Getting all notes");
};

var getNote = title => {
	console.log("Getting note", title);
};

var removeNote = title => {
	console.log("Removing note", title);
};
module.exports = { addNote, getAll, getNote, removeNote };
