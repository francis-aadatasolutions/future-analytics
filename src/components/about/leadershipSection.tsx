import React from 'react';
import alex from '../../assets/images/talents/alex.png';
import renie from '../../assets/images/talents/renie.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillLinkedin } from 'react-icons/ai';

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
                <Link
                  href='https://www.linkedin.com/in/alexanderamlani/'
                  target='_blank'
                  rel='noreferrer'>
                  <AiFillLinkedin className='text-4xl mt-2 text-blue-600' />
                </Link>
              </div>
            </div>
            <div className='mt-12'>
              <p className='text-lg my-4'>
                Alexander has had a dynamic journey in the data analytics
                industry. He began his career as a Marketing Executive and Sales
                Analyst, swiftly grasping the strategies to amplify sales and
                marketing performance across a plethora of countries.
              </p>

              <p className='text-lg my-4'>
                His career progressed to a leadership role at AA Consultancy,
                where he served as an independent contractor. In this capacity,
                he honed his skills by developing Power BI Models and Dashboards
                for a wide spectrum of businesses, ranging from SMEs and
                franchises to FTSE 100 and NYSE 100 corporations. This diverse
                client base spanned several industries including retail,
                manufacturing, tech startups, and more.
              </p>

              <p className='text-lg my-4'>
                A notable milestone in his career was a significant project at
                Walgreens Boots Alliance. Here, Alexander was instrumental in
                leading a departmental transformation. The transformation
                involved transitioning from legacy systems to Azure, instilling
                best practices in tabular modeling and SQL development, and
                entirely shifting to an agile way of working with Azure DevOps.
              </p>

              <p className='text-lg my-4'>
                In his current role as the founder of Future Analytics,
                Alexander is leveraging his extensive experience to pioneer
                innovations in analytics. His primary focus lies in delivering
                customer-centric solutions that demystify complex data. His aim
                is always centered on aiding businesses to make data-driven
                decisions. Guided by a talented team of developers, Alexander's
                vision for Future Analytics is to explore and extend the
                boundaries of what's achievable in the data analytics industry.
              </p>
            </div>
          </div>

          <div className='mt-24'>
            <div className='flex gap-4 items-center'>
              <Image src={renie} alt='Renie Velasquez' className='w-28 h-28' />
              <div>
                <p className='font-semibold'>Renie Velasquez</p>

                <p className='italic'>Team Delivery Lead</p>
                <Link
                  href='https://www.linkedin.com/in/renie-v-b67b14251/'
                  target='_blank'
                  rel='noreferrer'>
                  <AiFillLinkedin className='text-4xl mt-2 text-blue-600' />
                </Link>
              </div>
            </div>
            <div className='mt-12'>
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
                and clear communication have been pivotal in driving our
                technical team's performance, ensuring we consistently deliver
                innovative, high-quality solutions for our clients.
              </p>

              <p className='text-lg my-4'>
                In an era where remote work is the norm, Renie's expertise in
                leading diverse teams ensures our delivery remains agile,
                adaptable, and above all, efficient. His leadership is a
                testament to our commitment to excellence in service delivery,
                and his role is key to our global success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LeadershipSection;
