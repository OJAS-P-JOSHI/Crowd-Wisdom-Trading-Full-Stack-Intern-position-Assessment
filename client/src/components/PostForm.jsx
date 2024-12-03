import React, { useState } from 'react';
import axios from '../api/posts';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts', { title, content })
      .then(() => {
        setTitle('');
        setContent('');
        alert('Post created successfully!');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block font-bold mb-2">Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="w-full border p-2 rounded" 
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Content</label>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          className="w-full border p-2 rounded" 
          required 
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default PostForm;
