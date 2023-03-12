import hoodie from '../images/hoodie.png';
import tshirt from '../images/tshirt.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
const Banner = () => {
  return (
    <div className='bg-lightblue flex flex-wrap items-center justify-center h-auto  lg:h-[764px] gap-y-16 pb-8 lg:pb-0'>
      <div className='w-full lg:w-1/2 px-16 flex flex-col items-center lg:items-start gap-4 mt-16 lg:mt-0'>
        <h2 className='text-4xl text-primary sm:text-5xl lg:text-[64px] font-josefinsans text-center lg:text-left'>
          New desi clothing collection
        </h2>
        <p className='text-[16px] text-subtext font-lato'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
          voluptatum.
        </p>
        <button className='font-josefinsans bg-secondary text-white text-[17px] p-2 rounded-md max-w-[120px]'>
          {' '}
          Shop Now
        </button>
      </div>
      <div className='w-full lg:w-1/2 px-8 font-josefinsans flex items-center justify-center'>
        <div className='arrow-lef text-4xl cursor-pointer'>
          <BsFillArrowLeftCircleFill />
        </div>
        <div className='w-[250px] sm:w-[350px] lg:w-[500px]  rounded-lg flex overflow-hidden'>
          <img
            src={hoodie}
            alt='Firepower Hoodie - Judas Priest Zip Hoodie, HD Png Download@kindpng.com'
            className='w-[250px] sm:w-[350px] lg:w-[500px] rounded-lg'
          />
          <img
            src={tshirt}
            alt=''
            className='w-[250px] sm:w-[350px] lg:w-[500px] rounded-lg'
          />
        </div>
        <div className='arrow-lef text-4xl cursor-pointer'>
          <BsFillArrowRightCircleFill />
        </div>
      </div>
    </div>
  );
};

export default Banner;
