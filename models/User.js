const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: {
		type: string,
		required: true,
		min: 3,
		max: 25,
		unipue: true,
	},
	email: {
		type: string,
		required: true,
		max: 50,
		unique: true
	},
	password: {
		type: string,
		required: true,
		min: 6,
		max: 50,
	},
	profilePicture: {
		type: string,
		default: "",
	},
	coverPicture: {
		type: string,
		default: ""
	},
	followers: {
		type: Array,
		default: [],
	},
	followings: {
		type: Array,
		default: [],
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	desc: {
		type: string,
		max: 70,
	},
	city: {
		type: string,
		max: 50,
	},
},

{ timestamps: true }

);