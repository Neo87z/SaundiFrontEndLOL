import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import { Link } from 'react-router-dom';
import Axios from "axios";
import TabsImage01 from '../images/tabs-image-01.jpg';
import HeroImage01 from '../images/hero-image-01.jpg';
import TeamImage01 from '../images/team-member-01.jpg';
import TeamImage02 from '../images/team-member-02.jpg';
import TeamImage03 from '../images/team-member-03.jpg';
import TeamImage04 from '../images/team-member-04.jpg';
import TeamImage05 from '../images/team-member-05.jpg';
import TeamImage06 from '../images/team-member-06.jpg';
import TeamImage07 from '../images/team-member-07.jpg';
import TeamImage08 from '../images/team-member-08.jpg';
import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';

import PostImage01 from '../images/blog-post-01.jpg';
import NewsImage01 from '../images/news-01.jpg';
import NewsImage02 from '../images/news-02.jpg';
import NewsImage03 from '../images/news-03.jpg';
import NewsImage04 from '../images/news-04.jpg';
import NewsImage05 from '../images/news-05.jpg';
import NewsImage06 from '../images/news-06.jpg';
import NewsImage07 from '../images/news-07.jpg';
import NewsImage08 from '../images/news-08.jpg';
import NewsImage09 from '../images/news-09.jpg';
import NewsAuthor01 from '../images/news-author-01.jpg';
import NewsAuthor02 from '../images/news-author-02.jpg';
import NewsAuthor03 from '../images/news-author-03.jpg';
import NewsAuthor04 from '../images/news-author-04.jpg';
import NewsAuthor05 from '../images/news-author-05.jpg';
import NewsAuthor06 from '../images/news-author-06.jpg';
import Trearmet from '../images/tream1.png';
import { BackendDataURL } from '../constants'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
function Tabs() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '47%',
    transform: 'translate(-42%, -39%)',
    width: 700,
    height: 430,

    background: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const style2 = {
    position: 'absolute',
    top: '50%',
    left: '47%',
    transform: 'translate(-42%, -39%)',
    width: 500,
    height: 400,

    background: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [Modalll, setModalll] = useState(true);
  const [DoctorList, steDoctorList] = useState([])
  const [tab, setTab] = useState(1);
  const [fetchDataTrigger, setFetchDataTrigger] = useState(0);
  const fetchDataIntervalId = useRef();
  useEffect(() => {
    let BaseURlX = BackendDataURL + "/auth/getPrecautions"
    setFetchDataInterval(900000)
    Axios.get(BaseURlX).then((response) => {
      //console.log(response)
      steDoctorList(response.data.Data)


    })
    console.log("Doc Lits", DoctorList)
    // Clean up for unmount to prevent memory leak
    return () => clearInterval(fetchDataIntervalId.current);
  }, [fetchDataTrigger]);

  const setFetchDataInterval = (interval) => {
    // Clear old interval
    if (fetchDataIntervalId.current) {
      clearInterval(fetchDataIntervalId.current);
      fetchDataIntervalId.current = undefined;
    }

    // Set new interval
    if (interval > 0) {
      fetchDataIntervalId.current = setInterval(() => {
        setFetchDataTrigger(Date.now());
      }, interval);
    }
  };




  return (
    <section>
      <br></br> <br></br> <br></br> <br></br>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Precautions That We Recommend</h2>
            <p className="text-xl text-black-400">Prevetion is always better than a cure!. Our experienced doctors have made list of important precautions to prevent Scoliosis.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}

            {DoctorList.map((val, key) => {
              {

                return <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                  <div>
                    <span className="text-gray-700 font-medium mt-6 pt-5 ">
                      <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">{DoctorList[key].name}</a>
                    </span><br></br>
                    <div className="relative inline-flex flex-col mb-4">

                      <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">{DoctorList[key].des}</blockquote>

                </div>
              }


            })}


          </div>

        </div>
      </div>
    </section>
  );
}

export default Tabs;
