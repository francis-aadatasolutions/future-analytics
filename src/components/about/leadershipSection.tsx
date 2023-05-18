import React from 'react';
import alex from '../../assets/images/talents/alex.png';
import renie from '../../assets/images/talents/renie.png';
import Image from 'next/image';

const LeadershipSection = () => {
  return (
    <section className=' py-24 bg-hero-pattern  bg-cover bg-no-repeat '>
      <section className='center'>
        <h4 className='font-bold text-4xl leading-snug text-secondary'>
          Leadership
        </h4>
        <div className='my-12'>
          <div className=''>
            <div className='flex gap-4 items-center'>
              <Image src={alex} alt='Alexander Amlani' className='w-32 h-32' />
              <div>
                <p className='font-semibold'>Alexander Amlani</p>

                <p className='italic'>CEO and Founder</p>
              </div>
            </div>
            <p className='text-lg my-4'>
              As the CEO and Founder of Future Analytics, my journey in the data
              analytics sector has been nothing short of transformative.
              Commencing my career as a Marketing Executive and Sales Analyst, I
              quickly honed my skills in business analysis, implementation and
              through working with general managers from over 20 countries to
              drive sales, service, and marketing performance through process
              efficiencies and analytics across EMEA and APAC regions.
            </p>

            <p className='text-lg my-4'>
              We led a large-scale MI Simplification project at Walgreens Boots
              Alliance. My dedication to bridging the gap between IT teams and
              business leaders led to my position as Director of Power BI
              Solutions at AA Consultancy, where I developed Power BI Models and
              Dashboards for multiple departments of a NYSE 100 listed
              manufacturing company.
            </p>

            <p className='text-lg my-4'>
              Now, as the Principal Consultant and Founder of Future Analytics,
              I'm leveraging my extensive experience to drive innovation in the
              analytics industry. From pioneering the next wave of analytics
              with semantic layers and AI technology, to crafting rich app
              experiences for visualizations, my focus is on delivering
              customer-centric solutions that translate complex requirements
              into easy-to-understand terms. I'm passionate about enabling
              businesses to make data-driven decisions, and my vision for Future
              Analytics is to continue pushing the boundaries of what's possible
              in data analytics.
            </p>
          </div>

          <div className='mt-12'>
            <div className='flex gap-4 items-center'>
              <Image src={renie} alt='Renie Velasquez' className='w-28 h-28' />
              <div>
                <p className='font-semibold'>Renie Velasquez</p>

                <p className='italic'>Team Delivery Lead</p>
              </div>
            </div>
            <p className='text-lg my-4'>
              Renie Velasquez, our Team Delivery Lead, is core to managing our
              remote technical delivery team. With a deep-rooted understanding
              of business intelligence (BI) modelling and report development,
              Renie expertly translates complex technical requirements into
              actionable strategies for our IT services team.
            </p>

            <p className='text-lg my-4'>
              His vast experience managing remote teams across the globe has
              been instrumental in ensuring seamless project delivery,
              regardless of location or time zone. Renie's proactive approach
              and clear communication have been pivotal in driving our technical
              team's performance, ensuring we consistently deliver innovative,
              high-quality solutions for our clients.
            </p>

            <p className='text-lg my-4'>
              In an era where remote work is the norm, Renie's expertise in
              leading diverse teams ensures our delivery remains agile,
              adaptable, and above all, efficient. His leadership is a testament
              to our commitment to excellence in service delivery, and his role
              is key to our global success.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LeadershipSection;
