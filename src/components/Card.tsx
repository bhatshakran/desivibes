import { Link } from 'react-router-dom';

interface CardProps {
  details: any;
  id?: number;
  cardtype?: string;
}
const Card: React.FC<CardProps> = ({ details }) => {
  return (
    <div className='min-w-[150px] w-[270px] h-[370px] overflow-hidden bg-white rounded-lg shadow-md'>
      <div className=' overflow-hidden rounded-lg w-full p-3'>
        <img src={details.images[0]} alt='image' className='w-full h-[236px]' />
        <div className='text-center mt-4 flex flex-col gap-2'>
          <h3>
            <Link
              to={`/shop/${details.id}`}
              className=' text-secondary font-lato   block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]'
            >
              {details.name}
            </Link>
          </h3>
          <p className='text-text text-[14px] leading-relaxed font-josefinsans'>
            Code-Y523301
          </p>
          <p className='text-text  text-[14px] leading-relaxed font-josefinsans'>
            {`$${details.price}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
