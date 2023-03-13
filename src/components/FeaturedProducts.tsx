import { useEffect, useState } from 'react';
import { getDocuments } from '../Firebase/Functions';
import Card from './Card';
import isEmpty from 'lodash.isempty';

const FeaturedProducts: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      const documents = await getDocuments('hoodies', 'featured');
      if (!isEmpty(documents)) {
        setData(documents);
      }
    })();
  }, []);
  return (
    <section className='bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20 mt-24'>
      <div className='container mx-auto'>
        <h2 className=' font-josefinsans text-3xl lg:text-[46px] w-full text-center text-primary font-bold'>
          Featured Products
        </h2>
        <div className='mt-8 flex flex-wrap justify-center gap-4 px-4'>
          {!isEmpty(data) ? (
            data.map((doc: any, id: number) => {
              return <Card key={id} details={doc} />;
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
