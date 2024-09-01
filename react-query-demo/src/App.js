import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import PostsComponent from './PostsComponent'; // Import your component

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;