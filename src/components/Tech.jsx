import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className='text-center mb-12'>
        <p className='text-secondary text-[18px] uppercase tracking-wider mb-4'>
          My Technical Arsenal
        </p>
        <h2 className='text-white text-[40px] md:text-[50px] font-bold mb-6'>
          Technologies I'm Familiar With
        </h2>
        <p className='text-secondary text-[16px] max-w-3xl mx-auto leading-relaxed'>
          Here are the technologies and tools I work with to build modern, scalable applications.
          I'm continuously learning and expanding my skill set to stay current with industry trends.
        </p>
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");