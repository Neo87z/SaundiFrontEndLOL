import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/SpeechMain';
import Process from '../partials/Process';
import FeaturesHome from '../partials/CitationHome';
import Tabs from '../partials/Tabs';
import Target from '../partials/Target';
import News from '../partials/News';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div style={{backgroundColor:'white'}}className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <iframe style={{marginLeft:'0%',marginTop:'5%'}} width="100%" height="830px" src="https://chatbotscoliosis.netlify.app/" />
        



      </main>

      {/*  Site footer */}


    </div>
  );
}

export default Home;