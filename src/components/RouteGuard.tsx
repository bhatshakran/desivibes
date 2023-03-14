import Login from './Account/Login';

const RouteGuard = ({ children }: any) => {
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem('token') ? (flag = true) : (flag = false);

    return flag;
  }

  if (hasJWT()) {
    return children;
  } else {
    return <Login />;
  }
};

export default RouteGuard;
