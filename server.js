const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const DBconnection = require("./config/conn");
const app = express();
dotenv.config({ path: "config.env" });

//DBconnection
DBconnection();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("app runded succesfully");
});

if (process.env.NODE_ENV == "devolpment") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

//get all blogs
const BlogModal = require("./models/Blog");
app.get("/article", async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit *1 || 2
  const skip = (page- 1) * limit;
  const blog = await BlogModal.find().sort({ $natural: -1 }).skip(skip).limit(limit)
  res.status(201).json(blog);
});

//get blog by Id
app.get("/article/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await BlogModal.findById(id);
  res.status(201).json(blog);
});

//create blog
app.post("/createBlog", async (req, res) => {
  const newBlog = new BlogModal(req.body);
  await newBlog.save();
  res.status(201).json(req.body);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
