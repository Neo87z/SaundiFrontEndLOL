import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import BlogList from '../partials/BlogList';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Blog() {
  return (
    <div style={{backgroundColor:'white',color:'black'}} className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <BlogList />
  

      </main>

      {/*  Site footer */}
 

    </div>
  );
}

export default Blog;