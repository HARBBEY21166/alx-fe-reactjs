import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import Recipestore from './recipeStore';
import AppRouter from './AppRouter';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Recipes } from './Recipes';
import { RecipeDetail } from './RecipeDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

         <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>

      <div>
        <h1>Recipe Sharing App</h1>
        <RecipeList />
        <AddRecipeForm />
      </div>

      <div>
        <h1>Recipe Sharing App</h1>
        <AppRouter />
      </div>

      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <RecipeList />
      </div>

      <div>
        <h1>Recipe Sharing App</h1>
        <FavoritesList />
        <RecommendationsList />
      </div>
    </>
  )
}

export default App
