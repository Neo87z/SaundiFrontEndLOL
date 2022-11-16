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
    let BaseURlX = BackendDataURL + "/auth/updateUser"
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
    <section className="relative">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/*  Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="h1" style={{ marginLeft: '40%' }} data-aos="fade-up">Treatment For Scoliosis</h1>
          </div>

          {/*  Featured article */}


          {DoctorList.map((val, key) => {
            {
      
                return <div className="pb-12 md:pb-20">
                  <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <Link to="blog-post" className="relative block group" data-aos="fade-right" data-aos-delay="200">
                      <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                      <figure >
                        <img className="" src={DoctorList[key].ImageUrl} width="540" height="303" alt="Blog post 01" />
                      </figure>
                    </Link>
                    <div data-aos="fade-left" data-aos-delay="200">
                      <header>
                        <div className="mb-3">
                          <ul className="flex flex-wrap text-xs font-medium -m-1">
                            <li className="m-1">
                              <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">{DoctorList[key].Treatment}</Link>
                            </li>
                           
                          </ul>
                        </div>

                      </header>
                      <p className="text-lg text-gray-400 grow">{DoctorList[key].Description}.</p>
                      <footer className="flex items-center mt-4">
                       
                        <div>
                        
                          <span className="text-black-700"> Lower Bound:-{DoctorList[key].LowerBound} </span>
                          <span className="text-black-700"> Lower Bound:-{DoctorList[key].UpperBound}</span>
                          
                        </div>
                      </footer>
                    </div>
                  </article>
                </div>
              }
       

          })}


          {/*  Articles list */}




        </div>
      </div>
    </section>
  );
}

export default Tabs;
