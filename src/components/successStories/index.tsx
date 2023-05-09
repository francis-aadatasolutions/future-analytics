import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import BtnLink from 'src/HOC/Button';
import { successStories } from 'src/utils/successStories';

const SuccessStories = () => {
  const router = useRouter();
  const id = router.query.id;

  const serviceContent = successStories.filter((item) => item.id !== id);
  return (
    <section className={id ? 'py-24' : 'bg-light-blue py-24'}>
      <div className='center'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div>
            <h4 className='capitalize font-bold text-primary mb-3 text-3xl md:text-4xl'>
              {id ? 'Other success stories' : 'Success stories'}
            </h4>
            <p className='max-w-2xl text-base'>
              Explore how our data analytics services have helped our clients
              overcome their business challenges and achieve success.
            </p>
          </div>
          <div className='mt-12 md:mt-0'>
            <BtnLink url='/case-studies' text='Explore Our Case Studies' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-24 mt-12 md:max-w-[1370px] md:w-[95%] m-auto'>
          {serviceContent.slice(0, 3).map((item) => {
            const { id, description, image, title } = item;
            return (
              <article key={id}>
                <div className='flex justify-center'>
                  <Image src={image} alt={title} className='w-full h-52' />
                </div>
                <div className='my-8'>
                  <h5 className='text-2xl font-semibold text-secondary'>
                    {title}
                  </h5>
                  <p className='mt-4'>{description.substring(0, 200)}...</p>
                </div>
                <Link
                  href={`/case-studies/case-study-details/${id}`}
                  className='p-3 text-primary  border border-primary rounded-md capitalize hover:bg-primary hover:text-white'>
                  Read more
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
