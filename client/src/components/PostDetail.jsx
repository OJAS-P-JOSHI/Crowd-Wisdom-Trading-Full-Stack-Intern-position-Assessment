import React from 'react';

const PostDetail = ({ title, content }) => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold">{title}</h1>
    <p className="mt-4">{content}</p>
  </div>
);

export default PostDetail;
