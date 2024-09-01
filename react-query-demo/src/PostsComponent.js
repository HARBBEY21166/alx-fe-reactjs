import React from 'react';
import { useQuery } from 'react-query';

const PostsComponent = () => {
  const { isLoading, error, data, refetch } = useQuery('posts', () => 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Data</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;