import express from "express";
import cors from "cors";
import 'dotenv/config'
import mongoose, { Schema } from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());

const PostSchema = new Schema({
  name: String,
  desc: String,
  image: String,
});
const PostModel = mongoose.model("PostModel", PostSchema);

app.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find({});
    res.json(posts);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await PostModel.findById(id);
    res.json(posts);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, desc, image } = req.body;
    const newPosts = new PostModel({ name, desc, image });
    await newPosts.save();
    res.json(newPosts);
  } catch (error) {
    res.send(error.message);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, desc, image } = req.body;
    const posts = await PostModel.findByIdAndUpdate(id, { name, desc, image });
    res.json(posts);
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await PostModel.findByIdAndDelete(id);
    res.json(posts);
  } catch (error) {
    res.send(error.message);
  }
});

mongoose
  .connect(process.env.DB_SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
