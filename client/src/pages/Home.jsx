import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  
  // Fetch posts from the backend
  useEffect(() => {
    fetch('https://crowd-wisdom-trading-full-stack-intern-p-ojas-p-joshis-projects.vercel.app//api/posts') // Replace with your backend URL
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <main>
      <h1>Welcome to My Blog!</h1>
      <p>Explore the latest blog posts below:</p>
      <div className="post-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts available. Create a new one!</p>
        )}
      </div>
    </main>
  );
};

export default Home;
    