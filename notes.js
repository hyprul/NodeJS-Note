console.log("Starting notes.js");

const fs = require("fs");
// module.exports.addNote = () => {
// 	console.log("addNote");
// 	return "New note";
//

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync("notes-data.json");
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
};

var saveNotes = notes => {
	fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
	//console.log("Adding note", title, body);
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter(note => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	console.log("Getting all notes");
};

var getNote = title => {
	console.log("Getting note", title);
};

var removeNote = title => {
	//fetch notes
	var notes = fetchNotes();
	var filtered = notes.filter(note => note.title !== title);
	saveNotes(filtered);
	//filter notes, remove the one with title of argument
	//save new notesa rray

	return notes.length !== filtered.length;
};
module.exports = { addNote, getAll, getNote, removeNote };
