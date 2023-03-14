import React, { useState } from 'react';
import { signin } from '../../Firebase/Functions';
import Steps from '../Steps';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from './types';
import { setAuthToken } from '../../helpers/SetAuthToken';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [backEndErr, setBackEndErr] = useState('');

  const LoginHandler: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    setBackEndErr('');

    try {
      const { user, token } = await signin(data.email, data.password);
      //set JWT token to local
      localStorage.setItem('token', token);

      //set token to axios common header
      setAuthToken(token);
      console.log(user);
      window.location.reload();
    } catch (error: any) {
      setBackEndErr(String(error));
    }
  };

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
              <form onSubmit={handleSubmit(LoginHandler)}>
                <div className='mb-6 flex flex-col'>
                  <input
                    type='text'
                    {...register('email', {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    id='email-login'
                    placeholder='Email'
                    className='border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-subtext focus-visible:shadow-none'
                  />
                  {errors.email?.message && (
                    <span
                      role={'alert'}
                      className='text-red-400 text-[12px] w-full text-left font-bold'
                    >
                      {errors.email?.message}
                    </span>
                  )}
                </div>
                <div className='mb-6 flex flex-col'>
                  <input
                    type='password'
                    {...register('password', {
                      required: true,
                      maxLength: 20,
                      minLength: 6,
                    })}
                    aria-invalid={errors.password ? 'true' : 'false'}
                    id='password-login'
                    placeholder='Password'
                    className='border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-subtext focus-visible:shadow-none'
                  />
                  {errors.password && (
                    <span
                      role={'alert'}
                      className='text-red-400 text-[12px] w-full text-left font-bold'
                    >
                      Please check you password and try again.
                    </span>
                  )}
                  {backEndErr?.length > 0 && (
                    <span
                      role={'alert'}
                      className='text-red-400 text-[12px] w-full text-left font-bold'
                    >
                      {backEndErr}
                    </span>
                  )}
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
