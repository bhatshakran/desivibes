const images = [
  'https://www.kindpng.com/picc/m/39-398453_blue-tshirt-png-transparent-png.png',
  'https://www.kindpng.com/picc/m/114-1140581_blake-coleman-products-dill-with-it-tshirt-active.png',
  'https://www.kindpng.com/picc/m/39-398851_hockey-hounds-t-shirt-hd-png-download.png',
  'https://www.kindpng.com/picc/m/58-586598_blackbeachesback-clear-active-shirt-hd-png-download.png',
];

const latest = [
  'https://www.kindpng.com/picc/m/35-357887_transparent-blank-hoodie-png-neck-deep-red-hoodie.png',
  'https://www.kindpng.com/picc/m/88-886683_rick-and-morty-supreme-shirt-hoodie-tank-rick.png',
  'https://www.kindpng.com/picc/m/88-887088_cat-in-the-hat-supreme-hoodie-png-download.png',
  'https://www.kindpng.com/picc/m/88-887100_hoodie-hd-png-download.png',
];
interface CardProps {
  id: number;
  cardtype?: string;
}
const Card: React.FC<CardProps> = ({ id, cardtype }) => {
  return (
    <div className='min-w-[150px] w-[270px] h-[370px] overflow-hidden bg-productbg rounded-lg shadow-md'>
      <div className=' overflow-hidden rounded-lg w-full p-3'>
        <img
          src={cardtype === 'latest' ? latest[id] : images[id]}
          alt='image'
          className='w-full h-[236px]'
        />
        <div className='text-center mt-4 flex flex-col gap-2'>
          <h3>
            <a
              href=''
              className=' text-secondary font-lato   block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]'
            >
              Tee
            </a>
          </h3>
          <p className='text-text text-[14px] leading-relaxed font-josefinsans'>
            Code-Y523301
          </p>
          <p className='text-text  text-[14px] leading-relaxed font-josefinsans'>
            42$
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
