import React from 'react';
import Steps from '../Steps';

const Login: React.FC = () => {
  return (
    <section className='bg-white  '>
      <Steps heading='Login' pageName='Login' />
      <div className='container mx-auto px-8 mt-8 mb-16'>
        <div className=' flex flex-wrap shadow-lg rounded-xl max-w-xl mx-auto'>
          <div className='w-full px-4'>
            <div className='relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]'>
              <div className='mb-10 text-center md:mb-16'>
                <p className='mx-auto inline-block max-w-[160px] text-[42px] font-josefinsans'>
                  Login
                </p>
                <p className='font-lato text-[17px] text-subtext'>
                  Login with your account detail below
                </p>
              </div>
              <form>
                <div className='mb-6'>
                  <input
                    type='text'
                    placeholder='Email'
                    className='border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-subtext focus-visible:shadow-none'
                  />
                </div>
                <div className='mb-6'>
                  <input
                    type='password'
                    placeholder='Password'
                    className='border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-subtext focus-visible:shadow-none'
                  />
                </div>
                <div className='mb-10'>
                  <input
                    type='submit'
                    value='Sign In'
                    className=' w-full cursor-pointer rounded-md  bg-secondary py-3 px-5 text-base text-white transition hover:bg-opacity-90 font-lato'
                  />
                </div>
              </form>

              <a
                href='/forgot'
                className='mb-2 inline-block text-base text-subtext hover:text-primary hover:underline'
              >
                Forget Password?
              </a>
              <p className='text-base text-[#adadad]'>
                Dont have an account yet?
                <a
                  href='/signup'
                  className='text-subtext hover:text-primary hover:underline ml-2'
                >
                  Create account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
