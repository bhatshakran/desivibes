import { Link } from 'react-router-dom';

const RouteGuard = ({ children }: any) => {
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem('token') ? (flag = true) : (flag = false);

    return flag;
  }
  console.log(hasJWT());

  if (hasJWT()) {
    return children;
  } else {
    return (
      <section
        className='px-32 mt-12  font-josefinsans text-primary text-center
      py-[120px]'
      >
        <p className='text-[36px]'>You need to login first</p>
        <div className='mt-8'>
          <Link
            to='/login'
            className='bg-secondary font-josefinsans text-white px-4 py-3 rounded-md '
          >
            Go to Login
          </Link>
        </div>
      </section>
    );
  }
};

export default RouteGuard;
