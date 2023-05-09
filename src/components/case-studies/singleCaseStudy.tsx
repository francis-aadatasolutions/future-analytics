import { useRouter } from 'next/router';
import React from 'react';
import parser from 'html-react-parser';
import { successStories } from 'src/utils/successStories';
import Image from 'next/image';

const SingleCaseStudyDetails = () => {
  const router = useRouter();

  const id = router.query.id;

  const serviceContent = successStories.filter((item) => item.id === id);
  return (
    <section className='section-center py-32'>
      {serviceContent.map((item, index) => {
        const { description, id, image, title, content } = item;
        return (
          <article key={index}>
            <div className='w-full md:max-w-2xl'>
              <h4 className='capitalize font-bold text-primary mb-3 text-3xl md:text-4xl'>
                {title}
              </h4>
              <p className='mt-4 text-lg'>{description}</p>
            </div>
            <div className='whitespace-pre-wrap w-full max-w-4xl m-auto'>
              <Image
                src={image}
                alt={title}
                className='w-full h-[400px] rounded-lg my-24'
              />
              <p className='text-lg'>{parser(content)}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default SingleCaseStudyDetails;
