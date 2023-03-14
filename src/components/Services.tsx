import React from 'react';
import { IoMdBus } from 'react-icons/io';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { GiReturnArrow } from 'react-icons/gi';
import { BsFillBoxSeamFill } from 'react-icons/bs';

const Services: React.FC = () => {
  return (
    <section className='pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-12 max-w-[510px] text-center lg:mb-20'>
              <h2 className='text-primary font-josefinsans mb-4 text-3xl font-bold lg:text-[46px]'>
                What DesiVibes Offer
              </h2>
            </div>
          </div>
        </div>
        <div className='px-8 flex flex-wrap'>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10'>
              <div className='bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl text-4xl text-white'>
                <IoMdBus />
              </div>
              <h4 className='text-dark mb-3 text-xl font-semibold font-lato'>
                Assured Delivery
              </h4>
              <p className='text-body-color'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                exercitationem?
              </p>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10'>
              <div className='bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl text-4xl text-white'>
                <RiCustomerServiceFill />
              </div>
              <h4 className='text-dark mb-3 text-xl font-semibold font-lato'>
                24/7 Customer Support
              </h4>
              <p className='text-body-color'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, porro.
              </p>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10'>
              <div className='bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl text-4xl text-white'>
                <GiReturnArrow />
              </div>
              <h4 className='text-dark mb-3 text-xl font-semibold font-lato'>
                Free returns and cashback
              </h4>
              <p className='text-body-color'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam, laboriosam.
              </p>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10'>
              <div className='bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl text-4xl text-white'>
                <BsFillBoxSeamFill />
              </div>
              <h4 className='text-dark mb-3 text-xl font-semibold font-lato'>
                World Class Products
              </h4>
              <p className='text-body-color'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
                hic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
