import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroAbout from '../partials/HeroAbout';
import TeamImages from '../partials/TeamImages';
import Timeline from '../partials/Timeline';
import Team from '../partials/Team';
import TestimonialsCarousel from '../partials/TestimonialsCarousel';
import Career from '../partials/Career';
import Clients from '../partials/Clients';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function About() {
  return (
    <div style={{backgroundColor:'white',color:'black'}}className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        
       
        
        <Team />
        
       
    
      

      </main>

      {/*  Site footer */}
  

    </div>
  );
}

export default About;