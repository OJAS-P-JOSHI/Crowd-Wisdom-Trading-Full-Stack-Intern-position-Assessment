import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Post created successfully!');
        setTitle('');
        setContent('');
      })
      .catch((error) => console.error('Error creating post:', error));
  };

  return (
    <main>
      <h1>Create a New Blog Post</h1>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </main>
  );
};

export default CreatePost;
