/** @format */

const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://testF:Password@cluster0.7owhl84.mongodb.net/testfacebook",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

var userSchema = mongoose.Schema({
	uid: String,
	token: String,
	email: String,
	name: String,
	gender: String,
	pic: String,
});

module.exports = mongoose.model("User", userSchema);
