const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Use useEffect to fetch recipes data
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/path/to/data.json'); // Adjust path as needed
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Recipe List</h1>

      {/* Add Recipe Button */}
      <div className="mb-4">
        <Link to="/add-recipe" className="text-blue-500 hover:text-blue-700">
          Add a New Recipe
        </Link>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="border rounded-lg p-4">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover mb-2"/>
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:text-blue-700">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
