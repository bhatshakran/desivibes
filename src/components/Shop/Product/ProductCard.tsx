import React, { useEffect, useState } from 'react';
import Steps from '../../Steps';
import { getDocument } from '../../../Firebase/Functions';
import isEmpty from 'lodash.isempty';
import { DocumentData } from 'firebase/firestore';
import { addToCart } from '../../../helpers/AddtoCart';

const ProductCard: React.FC = () => {
  window.scroll(0, 0);
  const idArr = window.location.href.split('/');
  const id = idArr[idArr.length - 1];

  const [productInfo, setProductInfo] = useState<DocumentData>();

  useEffect(() => {
    (async function () {
      const product = await getDocument('hoodies', id);
      if (!isEmpty(product)) {
        setProductInfo(product);
      }
    })();
  }, []);

  if (!isEmpty(productInfo)) {
    return (
      <section>
        <Steps heading='Product Details' pageName='Product' />
        <div className='flex  flex-col w-full justify-center items-center py-[120px] gap-36 '>
          <article className='flex flex-wrap   max-w-3xl p-4  rounded-md shadow-lightblue mx-4 sm:mx-8 md:mx-auto '>
            <div className='w-full md:w-1/2 flex gap-2'>
              <div className='w-1/3  '>
                <div className='border border-lightblue p-1 mb-2'>
                  <img src={productInfo.images[0]} alt='' />
                </div>
                <div className='border border-lightblue p-1'>
                  <img src={productInfo.images[0]} alt='' />
                </div>
              </div>
              <div className='w-2/3 border border-lightblue p-2'>
                <img
                  src={
                    productInfo.images[1]
                      ? productInfo.images[1]
                      : productInfo.images[0]
                  }
                  alt=''
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 px-5 py-8 flex flex-col gap-3'>
              <h2 className='font-josefinsans text-primary text-3xl'>
                {productInfo.name}
              </h2>
              <p className='text-[14px] font-lato text-priamry '>
                <span className=' line-through'>${productInfo.price}</span>
                <span className='text-secondary ml-2'>
                  ${productInfo.discountprice}
                </span>
              </p>
              <div>
                <p className='text-subtext font-lato text-base'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  quis.
                </p>
              </div>

              <div>
                <button
                  className='text-primary font-lato flex gap-2  py-3 px-4 rounded-md hover:bg-secondary hover:text-white border border-lightblue'
                  onClick={() => addToCart(productInfo)}
                >
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
                  <h4 className='text-primary font-lato text-md'>
                    Categories: {productInfo.type}
                  </h4>
                </div>
                <div>
                  <h4 className='text-primary font-lato text-md'>
                    Tags: {productInfo.tag}
                  </h4>
                </div>
                <div>
                  <h4 className='text-primary font-lato text-md'>Share</h4>
                </div>
              </div>
            </div>
          </article>

          <article className='w-full mx-auto bg-lightblue px-8 md:px-32 py-[120px] mb-[100px]'>
            <div className='flex flex-wrap font-josefinsans text-primary text-lg md:text-2xl gap-4 md:gap-16'>
              <button className='underline'>Description</button>
              <button>Additional Info</button>
              <button>Reviews</button>
              <button>Video</button>
            </div>

            <div className='mt-16'>
              <h2 className='text-primary font-josefinsans text-lg md:text-xl'>
                Details:
              </h2>
              <p className='text-subtext font-lato text-[14px] md:text-base'>
                {productInfo.description}
              </p>
            </div>

            <div className='mt-16'>
              <h2 className='text-primary font-josefinsans text-lg md:text-xl inline-flex'>
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

              <p className='text-subtext font-lato text-[14px] md:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                ipsa.
              </p>
            </div>
          </article>
        </div>
      </section>
    );
  } else {
    return <section>Loading..</section>;
  }
};

export default ProductCard;
