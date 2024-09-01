import React from 'react';
import { Route, Switch, Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post: {postId}</h1>
    </div>
  );
};

export default BlogPost;
