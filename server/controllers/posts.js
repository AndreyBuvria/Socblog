const Post = require('../models/Postmodel');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ err });
  }
}

const getSinglePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const task = await Post.findOne( { _id: postId } );

    if(!task) {
      return res.status(404).json({msg: `No task with id: ${taskID}`});
    }

    res.status(201).json({ task });
  } catch (err) {
      res.status(500).json({err});
  }
}

const createPost = async (req, res) => {
  try {
    const task = await Post.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({err});
  }
}

const updatePost = async (req, res) => {
  try {
    const { id: postId } = req.params;

    const task = await Post.findOneAndUpdate({_id: postId}, req.body, {
        new: true,
        runValidators: true
    });

    if(!task) {
        return res.status(404).json({msg: `No task with id: ${taskID}`});
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json( { error });
  }
}

const deletePost = async (req, res) => {
    res.send('DELETE');
}

module.exports = {
    getAllPosts,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
}
