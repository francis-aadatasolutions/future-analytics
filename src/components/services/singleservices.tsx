import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { servicesContent } from 'src/utils/services';

const Singleservices = () => {
  const router = useRouter();

  const id = router.query.id;
  const singleService = servicesContent.find((item) => item.id === id);
  const serviceContent = servicesContent.filter((item) => item.id === id);

  return (
    <article className='section-center py-28'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {serviceContent.map((item, index) => {
          const {
            description,
            id,
            images,
            subDescription,
            title,
            price,
            subImages,
          } = item;
          return (
            <>
              <div key={index}>
                <h4 className='capitalize font-bold text-primary mb-3 text-3xl md:text-4xl'>
                  {title}
                </h4>
                <p className='my-4'>{subDescription}</p>
                <div className='flex space-x-4 items-center'>
                  <button className='p-3 text-white bg-primary rounded-md capitalize my-4'>
                    Get Quote
                  </button>
                  {price ? (
                    <p className='font-semibold'>From ${price}</p>
                  ) : null}
                </div>
                <p className='whitespace-pre-wrap'>{description}</p>
              </div>
              <Image
                src={images}
                alt={title}
                className='md:w-[406px] md:h-[406px] hidden md:block'
              />
            </>
          );
        })}
      </div>

      <div className='mt-12'>
        <Image
          src={singleService?.subImages as any}
          alt='Data Image'
          className='w-full'
        />
      </div>
    </article>
  );
};

export default Singleservices;
