const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const ClubSchema = new Schema({
	clubname: {
		type: String,
		required: [true, '\'title\' field is required.']
	},
	account: {
		type: String,
		required: [true, '\'deadline\' field is required.']
	},
	password: {
		type: String,
		required: [true, '\'description\' field is required.']
	}
})

// Creating a table within database with the defined schema
const Club = mongoose.model('register', ClubSchema)

// Exporting table for querying and mutating
module.exports = Club