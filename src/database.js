const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://leonardokim92:coderhouse@cluster0.2ca8jnw.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Succesful connection"))
.catch((error) => console.log("Connection error", error))