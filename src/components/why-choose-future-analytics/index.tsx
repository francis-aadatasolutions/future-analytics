import Image from 'next/image';
import React, { useState } from 'react';
import BtnLink from 'src/HOC/Button';
import { futureAnalyticsCardContent } from 'src/utils/futureAnalyticsCards';
import { motion } from 'framer-motion';
import { descriptionVariants } from 'src/utils/framer';
import { FiHexagon } from 'react-icons/fi';

const WhyChooseFutureAnalytics = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardHover = (index: number) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <section className='py-24 bg-light-blue'>
      <div className='center '>
        <div className='flex flex-col'>
          <div>
            <h4 className='capitalize font-bold text-secondary mb-3 text-3xl md:text-4xl'>
              Why choose future analytics?
            </h4>
          </div>
          <div className='mt-12 md:mt-8'>
            <BtnLink
              Icon={FiHexagon}
              url='/about-us'
              text='Find out more about us'
            />
          </div>
        </div>
        <div className='mt-24'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-5 drop-shadow-5xl'>
            {futureAnalyticsCardContent.map((item, index) => {
              const { icon, title, description } = item;
              const isCardSelected = index === selectedCard;
              return (
                <article
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={() => setSelectedCard(null)}
                  key={index}
                  className='flex flex-col items-center text-center p-8 bg-light-blue rounded-xl cursor-pointer'>
                  {isCardSelected ? (
                    <motion.p
                      variants={descriptionVariants}
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true, amount: 0.2 }}>
                      {description}
                    </motion.p>
                  ) : (
                    <>
                      <Image src={icon} alt={title} />
                      <p className='text-xl font-semibold mt-4'>{title}</p>
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFutureAnalytics;
