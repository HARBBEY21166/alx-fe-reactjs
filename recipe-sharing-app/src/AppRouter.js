import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RecipeList} />
        <Route path="/recipes/:recipeId" component={RecipeDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;