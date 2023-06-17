const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    id: Number,
    title:{
        type: String,
    },
    mainImg:{
        type: String,
    },
    secondImg:{
        type: String,
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