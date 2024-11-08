
import About from '@/components/About';
import Expe from '@/components/Expe';
import Hero from '@/components/Hero';
import Projects from '@/components/Project';
import Skills from '@/components/Skills';
import React from 'react';


const Home = () => {
    return (
        <>
           
             <Hero/>
              <About/> 
              <Skills/>
              <Projects/>
              <Expe/>
        </>
    );
};

export default Home
  