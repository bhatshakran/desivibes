import { Fragment, useEffect, useState } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';
import ShopCard from './ShopCard';
import { getDocuments } from '../../Firebase/Functions';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];
const subCategories = [
  { name: 'Hoodie' },
  { name: 'Tshirt' },
  { name: 'Shirt' },
];
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'featured', label: 'Featured', checked: false },
      { value: 'latest', label: 'Latest', checked: false },
      { value: 'sale', label: 'Sale', checked: true },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'sm', label: 'sm', checked: false },
      { value: 'md', label: 'md', checked: false },
      { value: 'lg', label: 'lg', checked: false },
      { value: 'xl', label: 'xl', checked: false },
      { value: '2xl', label: '2xl', checked: false },
      { value: '3xl', label: '3xl', checked: true },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ShopContent: React.FC = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const [activeFilters, setActiveFilters] = useState<Array<any>>([]);
  const [filteredProducts, setFilteredProducts] = useState<Array<any>>();

  const applyFilters = () => {
    let filtered: any = [];
    console.log(activeFilters);
    activeFilters.map((filter: string) => {
      console.log(filter);
      products.map((product: any) => {
        console.log(product.type);

        // console.log(product.type === filter);
        if (product.type.toLowerCase() === filter.toLowerCase()) {
          filtered.push(product);
        }
      });
    });

    setFilteredProducts(filtered);

    console.log(filteredProducts);
  };

  const addFilter = (cat: string) => {
    let updatedState = [...activeFilters];
    // check if filter already exists in there then remove it

    if (updatedState.length > 0) {
      const itemExists = updatedState.includes(cat);
      // if the item exists remove it from the filters
      if (itemExists) {
        updatedState = updatedState.filter((el: any) => el !== cat);
      } else {
        updatedState.push(cat);
      }
    } else {
      updatedState.push(cat);
    }

    setActiveFilters(updatedState);
  };

  useEffect(() => {
    (async function () {
      const docs = await getDocuments('hoodies');

      setProducts(docs);
    })();
  }, []);
  return (
    <div className='bg-white font-lato mx-8 lg:mx-16'>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 lg:hidden'
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='fixed inset-0 z-40 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-lightblue py-4 pb-12 shadow-xl'>
                  <div className='flex items-center justify-between px-4'>
                    <h2 className='text-lg font-medium text-gray-900 text-primary'>
                      Filters
                    </h2>
                    <button
                      type='button'
                      className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md  text-subtext p-2 text-gray-400'
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className='mt-4 border-t border-subtext'>
                    <h3 className='sr-only'>Categories</h3>
                    <ul
                      role='list'
                      className='px-2 py-3 font-medium text-gray-900'
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a
                            href='/'
                            className='block px-2 py-3 text-subtext hover:text-primary'
                          >
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as='div'
                        key={section.id}
                        className='border-t border-subtext px-4 py-6'
                      >
                        {({ open }) => (
                          <>
                            <h3 className='-mx-2 -my-3 flow-root'>
                              <Disclosure.Button className='flex w-full items-center justify-between  px-2 py-3 text-gray-400 hover:text-gray-500'>
                                <span className='font-medium text-primary'>
                                  {section.name}
                                </span>
                                <span className='ml-6 flex items-center'>
                                  {open ? (
                                    <MinusIcon
                                      className='h-5 w-5 text-primary'
                                      aria-hidden='true'
                                    />
                                  ) : (
                                    <PlusIcon
                                      className='h-5 w-5 text-primary'
                                      aria-hidden='true'
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className='pt-6'>
                              <div className='space-y-6'>
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className='flex items-center'
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type='checkbox'
                                      defaultChecked={option.checked}
                                      className='h-4 w-4 rounded border-gray-300 text-primary focus:outline-none'
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className='ml-3 min-w-0 flex-1 text-subtext'
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex items-baseline justify-between border-b border-subtext pt-24 pb-6'>
            <h1 className='text-[16px] sm:text-3xl lg:text-[46px] font-josefinsans text-primary'>
              Ecommerce Accesories - DesiVibes
            </h1>

            <div className='flex items-center'>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button className='group inline-flex items-center justify-center text-[14px] md:text-sm font-medium text-primary hover:text-gray-900'>
                    Sort
                    <ChevronDownIcon
                      className='-mr-1 ml-1 h-3 w-3 md:h-4 md:w-4 lg:w-5 lg:h-5 flex-shrink-0 text-primary group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-2 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? 'font-medium '
                                  : 'text-primary',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-subtext'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type='button'
                className='-m-2 ml-5 p-2 text-primary hover:text-gray-500 sm:ml-7'
              >
                <span className='sr-only'>View grid</span>
                <Squares2X2Icon
                  className='h-3 w-3 md:h-4 md:w-4 lg:w-5 lg:h-5'
                  aria-hidden='true'
                />
              </button>
              <button
                type='button'
                className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className='sr-only'>Filters</span>
                <FunnelIcon
                  className='h-3 w-3 md:h-4 md:w-4 lg:w-5 lg:h-5 text-primary'
                  aria-hidden='true'
                />
              </button>
            </div>
          </div>

          <section aria-labelledby='products-heading' className='pt-12 pb-24'>
            <h2 id='products-heading' className='sr-only'>
              Products
            </h2>

            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              {/* Filters */}
              <div className='hidden lg:block  col-span-1'>
                <form className=''>
                  <h3 className='sr-only'>Categories</h3>
                  <ul
                    role='list'
                    className='space-y-4 border-b border-subtext pb-6 text-sm font-medium text-gray-900'
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <span role={'button'} className='text-subtext '>
                          <input
                            id={`filter-${category.name}`}
                            name={`${category.name}`}
                            type='checkbox'
                            className='h-4 w-4 rounded text-checkbox focus:outline-none'
                            onClick={() => addFilter(category.name)}
                          />
                          <label
                            htmlFor={`filter-${category.name}`}
                            className='ml-3 text-sm text-subtext '
                          >
                            {category.name}
                          </label>
                        </span>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure
                      as='div'
                      key={section.id}
                      className='border-b border-subtext py-6'
                    >
                      {({ open }) => (
                        <>
                          <h3 className='-my-3 flow-root'>
                            <Disclosure.Button className='flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500'>
                              <span className='font-medium text-primary'>
                                {section.name}
                              </span>
                              <span className='ml-6 flex items-center'>
                                {open ? (
                                  <MinusIcon
                                    className='h-5 w-5 text-subtext'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <PlusIcon
                                    className='h-5 w-5 text-subtext'
                                    aria-hidden='true'
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className='pt-6'>
                            <div className='space-y-4'>
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className='flex items-center'
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type='checkbox'
                                    defaultChecked={option.checked}
                                    className='h-4 w-4 rounded text-checkbox focus:outline-none'
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className='ml-3 text-sm text-subtext '
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
                <button
                  className='bg-secondary text-white px-4 py-2 rounded-md mt-6'
                  onClick={applyFilters}
                >
                  Apply Filters
                </button>
              </div>

              {/* Product grid */}
              <div className='grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:col-span-3  w-full gap-x-4  gap-y-12 '>
                {filteredProducts
                  ? filteredProducts.map((el: any, id: number) => {
                      return <ShopCard key={id} details={el} />;
                    })
                  : products &&
                    products.map((el: any, id: number) => {
                      return <ShopCard key={id} details={el} />;
                    })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ShopContent;
