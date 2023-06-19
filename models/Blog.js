const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title:{
        type: String,
    },
    mainImg:{
        type: String,
    },
    secondImg:{
        type: String,
    },
    summary:{
        type: String,
        maxLength: 120,
    },
    p1:{
        type: String,
    },
    p2:{
        type: String,
    },
    p3:{
        type: String,
    },
    p4:{
        type: String,
    },
    p5:{
        type: String,
    },
    p6:{
        type: String,
    },
})

const BlogModal = mongoose.model("article", blogSchema);

module.exports = BlogModal