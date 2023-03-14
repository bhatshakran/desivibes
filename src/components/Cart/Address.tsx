import React from 'react';

const Address: React.FC<any> = ({ setActiveStepToPayment }) => {
  return (
    <section>
      <h1 className='sr-only'>Checkout</h1>
      <div className='mx-auto grid max-w-screen-2xl justify-center grid-cols-1 px-8'>
        <div className='bg-white py-12 md:py-24'>
          <div className='mx-auto max-w-lg px-4 lg:px-8'>
            <form className='grid grid-cols-6 gap-4 font-lato text-subtext '>
              <div className='col-span-3'>
                <label
                  htmlFor='FirstName'
                  className='block text-xs font-medium text-gray-700'
                >
                  First Name
                </label>
                <input
                  type='text'
                  id='FirstName'
                  className='mt-1 w-full rounded-md border-subtext shadow-sm sm:text-sm text-primary'
                />
              </div>
              <div className='col-span-3'>
                <label
                  htmlFor='LastName'
                  className='block text-xs font-medium text-gray-700'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  id='LastName'
                  className='mt-1 w-full rounded-md border-subtext shadow-sm sm:text-sm text-primary'
                />
              </div>
              <div className='col-span-6'>
                <label
                  htmlFor='Email'
                  className='block text-xs font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='Email'
                  className='mt-1 w-full rounded-md border-subtext shadow-sm sm:text-sm text-primary'
                />
              </div>
              <div className='col-span-6'>
                <label
                  htmlFor='Phone'
                  className='block text-xs font-medium text-gray-700'
                >
                  Phone
                </label>
                <input
                  type='tel'
                  id='Phone'
                  className='mt-1 w-full rounded-md border-subtext shadow-sm sm:text-sm text-primary'
                />
              </div>

              <fieldset className='col-span-6'>
                <legend className='block text-sm font-medium text-gray-700'>
                  Billing Address
                </legend>
                <div className='mt-1 -space-y-px rounded-md bg-white shadow-sm'>
                  <div>
                    <label htmlFor='Country' className='sr-only'>
                      Country
                    </label>
                    <select
                      id='Country'
                      className='relative w-full rounded-t-md border-subtext focus:z-10 sm:text-sm'
                    >
                      <option>England</option>
                      <option>Wales</option>
                      <option>Scotland</option>
                      <option>France</option>
                      <option>Belgium</option>
                      <option>Japan</option>
                    </select>
                  </div>
                  <div>
                    <label className='sr-only' htmlFor='PostalCode'>
                      {' '}
                      ZIP/Post Code{' '}
                    </label>
                    <input
                      type='text'
                      id='PostalCode'
                      placeholder='ZIP/Post Code'
                      className='relative w-full rounded-b-md border-subtext focus:z-10 sm:text-sm text-primary placeholder:text-subtext'
                    />
                  </div>
                </div>
              </fieldset>
              <div className='col-span-6'>
                <button
                  className='block w-full rounded-md bg-secondary p-2.5 text-sm text-white transition hover:shadow-lg font-josefinsans'
                  onClick={() => setActiveStepToPayment('payment')}
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
