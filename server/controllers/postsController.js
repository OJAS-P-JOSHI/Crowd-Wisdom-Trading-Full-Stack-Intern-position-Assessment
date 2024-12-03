const posts = require('../data/posts');

let postId = posts.length;

const getPosts = (req, res) => {
  res.status(200).json(posts);
};

const createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  const newPost = {
    id: ++postId,
    title,
    content,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
};

module.exports = { getPosts, createPost };
