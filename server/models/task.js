const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const TaskSchema = new Schema({
	ID: {
		type: String,
		required: [true, '\'ID\' field is required.']
	},
	title: {
		type: String,
		required: [true, '\'title\' field is required.']
	},
	date: {
		type: String,
		required: [true, '\'deadline\' field is required.']
	},
	type: {
		type: String,
		required: [true, '\'type\' field is required.']
	},
	description: {
		type: String,
		required: [true, '\'description\' field is required.']
	},
	isImportant: {
		type: Boolean,
		required: [true, '\'isImportant\' field is required.']
	}
})

// Creating a table within database with the defined schema
const Task = mongoose.model('message', TaskSchema)

// Exporting table for querying and mutating
module.exports = Task
