import React, { useState } from 'react';
const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='flex w-full items-center bg-white'>
      <div className='container mx-auto'>
        <div className='relative -mx-4 flex items-center justify-center'>
          <div className='w-auto max-w-[200px]'>
            <a className='block  py-5 text-4xl font-josefinsans font-bold text-primary'>
              Desi Vibes
            </a>
          </div>
          <div className='flex  items-center justify-between px-4 font-lato'>
            <div>
              <button
                onClick={() => setShowMenu(!showMenu)}
                id='navbarToggler'
                className='ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden'
              >
                <span className='bg-body-color relative my-[6px] block h-[2px] w-[30px]'></span>
                <span className='bg-body-color relative my-[6px] block h-[2px] w-[30px]'></span>
                <span className='bg-body-color relative my-[6px] block h-[2px] w-[30px]'></span>
              </button>
              <nav
                id='navbarCollapse'
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !showMenu && 'hidden'
                }`}
              >
                <ul className='block lg:flex'>
                  <li>
                    <a className='text-textblue hover:text-secondary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex cursor-pointer'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a className='text-textblue hover:text-secondary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex cursor-pointer'>
                      Pages
                    </a>
                  </li>
                  <li>
                    <a className='text-textblue hover:text-secondary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex cursor-pointer'>
                      Products
                    </a>
                  </li>
                  <li>
                    <a className='text-textblue hover:text-secondary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex cursor-pointer'>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className='text-textblue hover:text-secondary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex cursor-pointer'>
                      Shop
                    </a>
                  </li>
                  <li>
                    <a className='text-textblue hover:text-secondary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex cursor-pointer'>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='hidden justify-end pr-16 sm:flex lg:pr-0'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search'
                  className='w-full rounded-md border border-primary border-form-stroke p-1 pl-12 text-primary placeholder-[#929DA7] outline-none transition focus:border-secondary active:border-secondary disabled:cursor-default disabled:bg-[#F5F7FD]'
                />
                <span className='absolute top-1/2 left-4 -translate-y-1/2'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g opacity='0.8'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M3.72039 12.8864C4.50179 12.105 5.5616 11.666 6.66667 11.666H13.3333C14.4384 11.666 15.4982 12.105 16.2796 12.8864C17.061 13.6678 17.5 14.7276 17.5 15.8327V17.4993C17.5 17.9596 17.1269 18.3327 16.6667 18.3327C16.2064 18.3327 15.8333 17.9596 15.8333 17.4993V15.8327C15.8333 15.1696 15.5699 14.5338 15.1011 14.0649C14.6323 13.5961 13.9964 13.3327 13.3333 13.3327H6.66667C6.00363 13.3327 5.36774 13.5961 4.8989 14.0649C4.43006 14.5338 4.16667 15.1696 4.16667 15.8327V17.4993C4.16667 17.9596 3.79357 18.3327 3.33333 18.3327C2.8731 18.3327 2.5 17.9596 2.5 17.4993V15.8327C2.5 14.7276 2.93899 13.6678 3.72039 12.8864Z'
                        fill='#637381'
                      ></path>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M10.0007 3.33268C8.61994 3.33268 7.50065 4.45197 7.50065 5.83268C7.50065 7.21339 8.61994 8.33268 10.0007 8.33268C11.3814 8.33268 12.5006 7.21339 12.5006 5.83268C12.5006 4.45197 11.3814 3.33268 10.0007 3.33268ZM5.83398 5.83268C5.83398 3.5315 7.69946 1.66602 10.0007 1.66602C12.3018 1.66602 14.1673 3.5315 14.1673 5.83268C14.1673 8.13387 12.3018 9.99935 10.0007 9.99935C7.69946 9.99935 5.83398 8.13387 5.83398 5.83268Z'
                        fill='#637381'
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
