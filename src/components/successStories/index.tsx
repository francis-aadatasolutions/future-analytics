import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import BtnLink from 'src/HOC/Button';
import { motion } from 'framer-motion';
import { successStories } from 'src/utils/successStories';
import { variants } from 'src/utils/framer';
import { RiSlideshowLine } from 'react-icons/ri';
import { IoMdArrowForward } from 'react-icons/io';

const SuccessStories = () => {
  const router = useRouter();
  const id = router.query.id;

  const serviceContent = successStories.filter((item) => item.id !== id);
  return (
    <section className={id ? 'py-24' : 'bg-light-blue py-24'}>
      <div className='center'>
        <div className=' '>
          <div>
            <h4 className='capitalize font-bold text-secondary  text-3xl md:text-4xl'>
              {id ? 'Other Case Studies' : 'Case Studies'}
            </h4>
            <button className='my-8 '>
              <BtnLink
                Icon={RiSlideshowLine}
                url='/case-studies'
                text='Explore Our Case Studies'
              />
            </button>
            <p className='max-w-2xl text-base'>
              Explore how our data analytics services have helped our clients
              overcome their business challenges and achieve success.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-24 mt-12 md:max-w-[1370px] md:w-[95%] m-auto'>
          {serviceContent.slice(0, 3).map((item) => {
            const { id, description, image, title } = item;
            return (
              <motion.article
                variants={variants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                key={id}>
                <div className='flex justify-center'>
                  <Image src={image} alt={title} className='w-full h-52' />
                </div>
                <div className='my-8'>
                  <h5 className='text-lg font-semibold text-secondary'>
                    {title}
                  </h5>
                  <p className='mt-4'>{description.substring(0, 100)}...</p>
                </div>
                <BtnLink
                  Icon={IoMdArrowForward}
                  text='Read more'
                  url={`/case-studies/case-study-details/${id}`}
                  className='p-3 text-primary rounded-md border border-primary capitalize hover:bg-primary hover:text-white'
                />
                {/* <Link
                  href={`/case-studies/case-study-details/${id}`}
                  className='p-3 text-primary  border border-primary rounded-md capitalize hover:bg-primary hover:text-white'>
                  Read more
                </Link> */}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
