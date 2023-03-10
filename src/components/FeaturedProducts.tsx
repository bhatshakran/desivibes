import Card from './Card';

const FeaturedProducts: React.FC = () => {
  return (
    <section className='bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20'>
      <div className='container mx-auto'>
        <h2 className=' font-josefinsans text-4xl lg:text-[42px] w-full text-center text-text'>
          Featured Products
        </h2>
        <div className='mt-8 flex flex-wrap justify-center gap-4 px-4'>
          <Card id={0} />
          <Card id={1} />
          <Card id={2} />
          <Card id={3} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
