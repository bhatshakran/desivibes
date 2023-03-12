import React from 'react';
import Steps from '../../Steps';
import tshirt from '../../../images/tshirt.png';
import hoodie from '../../../images/hoodie.png';
const ProductCard: React.FC = () => {
  return (
    <section>
      <Steps heading='Product Details' pageName='Product' />
      <div className='flex flex-col w-full justify-center items-center py-[120px] gap-36'>
        <article className='flex mx-auto max-w-3xl p-4 shadow-sm rounded-md shadow-lightblue border border-lightblue'>
          <div className='w-1/2 flex gap-2'>
            <div className='w-1/3  '>
              <div className='border border-lightblue p-1 mb-2'>
                <img src={tshirt} alt='' />
              </div>
              <div className='border border-lightblue p-1'>
                <img src={tshirt} alt='' />
              </div>
            </div>
            <div className='w-2/3 border border-lightblue p-2'>
              <img src={hoodie} alt='' />
            </div>
          </div>
          <div className='w-1/2 px-5 py-8 flex flex-col gap-3'>
            <h2 className='font-josefinsans text-primary text-3xl'>
              Epic Hoodie
            </h2>
            <p className='text-[14px] font-lato text-priamry '>
              <span className=' line-through'>$32.00</span>
              <span className='text-secondary ml-2'>$30.00</span>
            </p>
            <div>
              <p className='text-subtext font-lato text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
                quis.
              </p>
            </div>

            <div>
              <button className='text-primary font-lato flex gap-2  py-3 px-4 rounded-md hover:bg-secondary hover:text-white border border-lightblue'>
                <span>Add to Cart</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </button>
            </div>
            <div className='mt-8 flex flex-col gap-2'>
              <div>
                <h4 className='text-primary font-lato text-md'>Categories</h4>
              </div>
              <div>
                <h4 className='text-primary font-lato text-md'>Tags</h4>
              </div>
              <div>
                <h4 className='text-primary font-lato text-md'>Share</h4>
              </div>
            </div>
          </div>
        </article>

        <article className='mx-auto bg-lightblue px-32 py-16'>
          <div className='flex font-josefinsans text-primary text-2xl gap-16'>
            <button className='underline'>Description</button>
            <button>Additional Info</button>
            <button>Reviews</button>
            <button>Video</button>
          </div>

          <div className='mt-16'>
            <h2 className='text-primary font-josefinsans text-xl'>
              Lorem, ipsum.
            </h2>
            <p className='text-subtext font-lato text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              recusandae soluta aliquid qui in voluptates alias odit dolores,
              labore, architecto molestias non ipsum pariatur! Rem iusto culpa
              facilis cupiditate nisi.
            </p>
          </div>

          <div className='mt-16'>
            <h2 className='text-primary font-josefinsans text-xl inline-flex'>
              <span className='mr-2'>More details</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </h2>

            <p className='text-subtext font-lato text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              ipsa.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductCard;
