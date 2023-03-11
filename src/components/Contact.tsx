import React from 'react';
import Steps from './Steps';
import contact from '../images/contact.png';
import HomeSvg from '../svgs/Home';
import PhoneSvg from '../svgs/Phone';
import EmailSvg from '../svgs/Email';

const Contact: React.FC = () => {
  return (
    <div>
      <Steps heading='Contact Us' pageName='Contact' />
      <div>
        <section className='flex flex-wrap gap-8 mt-16 justify-between px-8 lg:px-36'>
          <div className='w-full lg:w-2/5'>
            <h2 className='font-josefinsans text-[28px] lg:text-[36px] text-primary mb-6'>
              Information about us
            </h2>
            <p className='font-lato text-subtext text-base lg:text-[18px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              distinctio dolor voluptatibus eligendi eaque itaque saepe
              veritatis dolorem perferendis explicabo!
            </p>
          </div>
          <div className='w-full lg:w-2/5'>
            <div className='mb-8 flex w-full max-w-[370px]'>
              <div className='bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]'>
                <HomeSvg />
              </div>
              <div className='w-full'>
                <h4 className='text-primary mb-1 text-xl font-bold'>
                  Our Location
                </h4>
                <p className='text-subtext text-base'>
                  99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                </p>
              </div>
            </div>
            <div className='mb-8 flex w-full max-w-[370px]'>
              <div className='bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]'>
                <PhoneSvg />
              </div>
              <div className='w-full'>
                <h4 className='text-primary mb-1 text-xl font-bold'>
                  Phone Number
                </h4>
                <p className='text-subtext text-base'>(+62)81 414 257 9980</p>
              </div>
            </div>
            <div className='mb-8 flex w-full max-w-[370px]'>
              <div className='bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]'>
                <EmailSvg />
              </div>
              <div className='w-full'>
                <h4 className='text-primary mb-1 text-xl font-bold'>
                  Email Address
                </h4>
                <p className='text-subtext text-base'>info@yourdomain.com</p>
              </div>
            </div>
          </div>
        </section>
        <section className='relative z-10 overflow-hidden bg-white py-20 lg:py-[120px] px-8 lg:px-36'>
          <div className='container mx-auto'>
            <div className=' flex flex-wrap items-center justify-between   gap-4'>
              <div className='w-full lg:w-2/5  '>
                <div className='mb-12 max-w-[570px] lg:mb-0'>
                  <h2 className='font-josefinsans text-[28px] lg:text-[36px] text-primary mb-6'>
                    Get in touch with us
                  </h2>
                  <p className='text-subtext font-lato mb-9 text-base leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className='w-full  font-lato'>
                    <div className='relative rounded-lg bg-white '>
                      <form>
                        <div className='mb-6'>
                          <input
                            type='text'
                            placeholder='Your Name'
                            className='text-body-color  focus:border-subtext w-full rounded border  border-[#E9EDF4] py-3 px-[14px] text-base outline-none focus-visible:shadow-none'
                          />
                        </div>
                        <div className='mb-6'>
                          <input
                            type='email'
                            placeholder='Your Email'
                            className='text-body-color  focus:border-subtext w-full rounded border border-[#E9EDF4] py-3 px-[14px] text-base outline-none focus-visible:shadow-none'
                          />
                        </div>
                        <div className='mb-6'>
                          <input
                            type='text'
                            placeholder='Subject'
                            className='text-body-color  focus:border-subtext w-full rounded border border-[#E9EDF4] py-3 px-[14px] text-base outline-none focus-visible:shadow-none'
                          />
                        </div>
                        <div className='mb-6'>
                          <textarea
                            rows={6}
                            placeholder='Your Message'
                            className='text-body-color  focus:border-subtext w-full resize-none rounded border border-[#E9EDF4] py-3 px-[14px] text-base outline-none focus-visible:shadow-none'
                          ></textarea>
                        </div>
                        <div>
                          <button
                            type='submit'
                            className='bg-secondary  w-auto rounded border p-3 text-white transition hover:bg-opacity-90'
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-2/5 lg:p-8 '>
                <img src={contact} alt='' className='w-[300px] lg:w-full ' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
