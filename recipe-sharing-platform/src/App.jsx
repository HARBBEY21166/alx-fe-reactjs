import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddRecipeForm from './components/AddRecipeForm';  // Ensure this import is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* Check this route */}
      </Routes>
    </Router>
  );
}

export default App;
