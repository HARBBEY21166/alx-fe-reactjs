import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isFetching } = useQuery(
    'posts', // key
    fetchPosts, // function to fetch data
    {
      // caching settings
      staleTime: 10000, // cache for 10 seconds
    }
  );

  const queryClient = useQueryClient();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleRefetch = async () => {
    await queryClient.invalidateQueries('posts'); // invalidate cache
    await queryClient.fetchQuery('posts'); // refetch data
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleRefetch}>Refetch Posts</button>
    </div>
  );
};

export default PostsComponent;
