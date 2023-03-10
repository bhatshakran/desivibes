import Card from './Card';

const filterHoverClass = 'hover:text-secondary cursor-pointer';

const LatestProducts: React.FC = () => {
  return (
    <section className='bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20 mt-24'>
      <div className='container mx-auto'>
        <h2 className=' font-josefinsans text-3xl lg:text-[46px] w-full text-center text-primary font-bold'>
          Latest Products
        </h2>
        <div className='filter flex justify-center mt-6 gap-4 text-primary font-lato text-[18px]'>
          <p className={filterHoverClass}>New arrivals</p>
          <p className={filterHoverClass}>Best Seller</p>
          <p className={filterHoverClass}> Featured</p>
          <p className={filterHoverClass}>Special Offer</p>
        </div>
        <div className='mt-8 flex flex-wrap justify-center gap-4 px-4'>
          <Card id={0} cardtype='latest' />
          <Card id={1} cardtype='latest' />
          <Card id={2} cardtype='latest' />
          <Card id={3} cardtype='latest' />
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
