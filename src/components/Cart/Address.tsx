import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface AddressInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  country: string;
  pincode: string;
}

const Address: React.FC<any> = ({ setActiveStepToPayment }) => {
  window.scroll(0, 0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressInputs>();

  const addressHandler: SubmitHandler<AddressInputs> = async (data) => {
    console.log(data);
    localStorage.setItem('new-order', '');
    // save data temporarily to localStorage
    localStorage.setItem('new-order', JSON.stringify(data));

    setActiveStepToPayment('payment');
  };
  return (
    <section>
      <h1 className='sr-only'>Checkout</h1>
      <div className='mx-auto grid max-w-screen-2xl justify-center grid-cols-1 px-8'>
        <div className='bg-white py-12 md:py-24'>
          <div className='mx-auto max-w-lg px-4 lg:px-8'>
            <form
              className='grid grid-cols-6 gap-4 font-lato text-subtext '
              onSubmit={handleSubmit(addressHandler)}
            >
              <div className='col-span-3'>
                <label
                  htmlFor='FirstName'
                  className='block text-xs font-medium text-gray-700'
                >
                  First Name
                </label>
                <input
                  type='text'
                  {...register('firstName', {
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                  })}
                  id='FirstName'
                  className='mt-1 w-full rounded-md border-subtext shadow-sm sm:text-sm text-primary'
                />
                {errors.firstName && (
                  <span
                    role={'alert'}
                    className='text-red-400 text-[12px] w-full text-left font-bold'
                  >
                    Please check you first name. Minimum length is 3 characters
                  </span>
                )}
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
                  {...register('lastName', {
                    required: true,
                    maxLength: 20,
                    minLength: 3,
                  })}
                  className='mt-1 w-full rounded-md border-subtext shadow-sm sm:text-sm text-primary'
                />
                {errors.lastName && (
                  <span
                    role={'alert'}
                    className='text-red-400 text-[12px] w-full text-left font-bold'
                  >
                    Please check you last name. Minimum length is 3 characters
                  </span>
                )}
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
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className='mt-1 w-full rounded-md border-subtext shadow-sm sm:text-sm text-primary'
                />
                {errors.email && (
                  <span
                    role={'alert'}
                    className='text-red-400 text-[12px] w-full text-left font-bold'
                  >
                    Please enter a valid email address.
                  </span>
                )}
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
                  id='phone'
                  {...register('phone', {
                    required: true,
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/i,
                      message: 'Invalid mobile number',
                    },
                  })}
                  className='mt-1 w-full rounded-md border-subtext shadow-sm sm:text-sm text-primary'
                />

                {errors.phone && (
                  <span
                    role={'alert'}
                    className='text-red-400 text-[12px] w-full text-left font-bold'
                  >
                    Please enter a valid mobile number.
                  </span>
                )}
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
                      {...register('country', {
                        required: true,
                      })}
                      className='relative w-full rounded-t-md border-subtext focus:z-10 sm:text-sm'
                    >
                      <option>England</option>
                      <option>Wales</option>
                      <option>Scotland</option>
                      <option>France</option>
                      <option>Belgium</option>
                      <option>Japan</option>
                    </select>
                    {errors.country && (
                      <span
                        role={'alert'}
                        className='text-red-400 text-[12px] w-full text-left font-bold'
                      >
                        Please select a country
                      </span>
                    )}
                  </div>
                  <div>
                    <label className='sr-only' htmlFor='PostalCode'>
                      {' '}
                      ZIP/Post Code{' '}
                    </label>
                    <input
                      type='text'
                      {...register('pincode', {
                        required: true,
                      })}
                      id='PostalCode'
                      placeholder='ZIP/Post Code'
                      className='relative w-full rounded-b-md border-subtext  focus:z-10 sm:text-sm text-primary placeholder:text-subtext'
                    />
                    {errors.pincode && (
                      <span
                        role={'alert'}
                        className='text-red-400  text-[12px] w-full text-left font-bold'
                      >
                        Please enter a valid ZIP/Post Code.
                      </span>
                    )}
                  </div>
                </div>
              </fieldset>
              <div className='col-span-6'>
                <button className='block w-full rounded-md bg-secondary p-2.5 text-sm text-white transition hover:shadow-lg font-josefinsans'>
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
