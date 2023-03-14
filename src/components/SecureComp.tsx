import Login from './Account/Login';

const SecureComp = ({ children }: any) => {
  const isLoggedIn = localStorage.getItem('token');

  if (isLoggedIn) {
    return children;
  } else {
    return <Login />;
  }
};

export default SecureComp;
