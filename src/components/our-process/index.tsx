import React from 'react';
import dataTrends from '../../assets/Data-Trends.png';
import Image from 'next/image';
import OurProcessSVG from 'src/assets/SVG/OurProcess.svg';

const OurProcess = () => {
  return (
    <section>
      <div className='center py-24'>
        <div className='flex justify-between items-center gap-10 flex-col md:flex-row'>
          <div>
            <h4 className='capitalize font-bold text-primary mb-3 text-3xl md:text-4xl'>
              Our process
            </h4>
            <p className='max-w-4xl text-lg mt-8'>
              At Future Analytics, we follow an agile methodology, prioritizing
              business value and rapid results. Our unique discovery portal is
              specifically designed to capture requirements for BI dashboards
              and analytics projects. This helps set the critical path and
              ensures the project's success. Our highly experienced principal
              consultant oversees the approach, while our personable and driven
              team collaborates closely with clients, offering expertise in
              various tools and technologies to help shape the future of your
              business.
            </p>
          </div>
          {/* <Image src={dataTrends} alt='Data Trends' /> */}
          <OurProcessSVG />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
