import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => (user ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
