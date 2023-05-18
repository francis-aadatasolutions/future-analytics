import React, { useState } from 'react';
import {
  azure,
  cube,
  databricks,
  react,
  refine,
  vega,
} from '../../assets/images/technologies';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import ColoredCube from 'src/assets/SVG/Cube/ColoredCube';
import GrayCube from 'src/assets/SVG/Cube/GrayCube';
import AzureColored from 'src/assets/SVG/Azure/AzureColored';
import AzureGray from 'src/assets/SVG/Azure/AzureGray';
import DataBricksColored from 'src/assets/SVG/DataBricks/DataBricksColored';
import DataBricksGray from 'src/assets/SVG/DataBricks/DataBricksGray';
import ReactColored from 'src/assets/SVG/React/ReactColored';
import ReactGray from 'src/assets/SVG/React/ReactGray';
import RefineColored from 'src/assets/SVG/Refine/RefineColored';
import RefineGray from 'src/assets/SVG/Refine/RefineGray';
import VegaGray from 'src/assets/SVG/Vega/VegaGray';
import VegaColored from 'src/assets/SVG/Vega/VegaColored';
import PowerBIGray from 'src/assets/SVG/PowerBI/PowerBIGray';
import PowerBIColored from 'src/assets/SVG/PowerBI/PowerBIColored';
import DBTColored from 'src/assets/SVG/DBT/DBTColored';
import DBTGray from 'src/assets/SVG/DBT/DBTGray';
import PlotlyColored from 'src/assets/SVG/Plotly/PlotlyColored';
import PlotlyGray from 'src/assets/SVG/Plotly/PlotlyGray';
import TremorColored from 'src/assets/SVG/Tremor/TremorColored';
import TremoreGray from 'src/assets/SVG/Tremor/TremorGray';

const Technologies = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const technologies = [
    {
      name: 'azure',
      Image1: <AzureColored />,
      Image2: <AzureGray />,
    },
    { name: 'cube', Image1: <ColoredCube />, Image2: <GrayCube /> },
    {
      name: 'databricks',
      Image1: <DataBricksColored />,
      Image2: <DataBricksGray />,
    },
    { name: 'react JS', Image1: <ReactColored />, Image2: <ReactGray /> },
    { name: 'refine dev', Image1: <RefineColored />, Image2: <RefineGray /> },
    { name: 'vega', Image1: <VegaColored />, Image2: <VegaGray /> },
    { name: 'PowerBI', Image1: <PowerBIColored />, Image2: <PowerBIGray /> },
    { name: 'DBT', Image1: <DBTColored />, Image2: <DBTGray /> },
    { name: 'Plotly', Image1: <PlotlyColored />, Image2: <PlotlyGray /> },
    { name: 'tremor', Image1: <TremorColored />, Image2: <TremoreGray /> },
  ];
  return (
    <section className=''>
      <div className='center py-32'>
        <div>
          <h4 className='capitalize font-bold text-secondary mb-3 text-3xl md:text-4xl'>
            Technology Partners
          </h4>
          <p className='max-w-2xl text-base'>
            We are proud to work with a range of technology partners, including
            Databricks, Power BI, and more. This enables us to offer our clients
            the best solutions tailored to their specific needs as they navigate
            the future of data-driven decision-making.
          </p>
        </div>
        <div className='relative w-full max-w-5xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-5 items-center gap-10'>
          <div className='absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob'></div>
          <div className='absolute top-0 right-5 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000'></div>
          <div className='absolute -bottom-8 left-20 w-72 h-72 bg-[#6beafb] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000'></div>
          {technologies.map((item, index) => {
            const { name, Image1, Image2 } = item;
            return (
              <div
                key={index}
                className=' h-fit p-3 bg-white  drop-shadow-7xl rounded-lg'>
                <AnimatePresence>
                  {hoverIndex === index ? (
                    <motion.div
                      className='w-32 mx-auto'
                      onMouseLeave={handleMouseLeave}
                      initial={{ scale: 0 }}
                      animate={{ scale: 0.9 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 10,
                      }}>
                      {Image1}
                    </motion.div>
                  ) : (
                    <motion.div
                      className='w-32 mx-auto'
                      onMouseEnter={() => handleHover(index)}
                      initial={{ scale: 0 }}
                      animate={{ scale: 0.8 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 10,
                      }}>
                      {Image2}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
