import React, { useEffect, useState } from 'react';
import axios from '../api/posts';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      {posts.map(post => (
        <div key={post.id} className="mb-4 p-4 bg-white shadow-md rounded">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
