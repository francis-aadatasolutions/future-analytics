import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { successStories } from 'src/utils/successStories';
import { motion } from 'framer-motion';
import { contentVariants, variants } from 'src/utils/framer';

const RecentCaseStudies = () => {
  return (
    <section className='center py-24'>
      <div className='center'>
        <h4 className='capitalize font-bold text-primary mb-3 text-3xl md:text-4xl'>
          recent case studies
        </h4>
      </div>
      <div className='section-center'>
        <div className='grid grid-cols-1 gap-24 mt-12'>
          {successStories.slice(0, 4).map((item, index) => {
            const { id, description, image, title } = item;
            return (
              <motion.article
                variants={contentVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                key={index}
                className='md:flex justify-between md:gap-12'>
                <div className='flex justify-center'>
                  <Image src={image} alt={title} className='w-[400px] h-52' />
                </div>
                <div className='my-8'>
                  <h5 className='text-2xl font-semibold text-secondary'>
                    {title}
                  </h5>
                  <p className='mt-4'>{description.substring(0, 200)}...</p>
                  <div className='mt-8'>
                    <Link
                      href={`/case-studies/case-study-details/${id}`}
                      className='p-3 text-primary  border border-primary rounded-md capitalize hover:bg-primary hover:text-white'>
                      Read more
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentCaseStudies;
