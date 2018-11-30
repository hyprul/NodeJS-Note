console.log("Starting notes.js");

// module.exports.addNote = () => {
// 	console.log("addNote");
// 	return "New note";
//

var addNote = (title, body) => {
	console.log("Adding note", title, body);
};

module.exports = { addNote };
