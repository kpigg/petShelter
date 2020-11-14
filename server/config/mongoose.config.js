const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/belt_exam_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I found the database"))
    .catch(err => console.log("Lost the database"))
