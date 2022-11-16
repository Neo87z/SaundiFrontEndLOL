import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
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
    let BaseURlX = BackendDataURL + "/auth/get_all_messages"
    setFetchDataInterval(900000)
    Axios.get(BaseURlX).then((response) => {
      console.log(response)
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



  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab - 1]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  const CloseModal = () => {
    setModalll(false)
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section>

<br></br>
<br></br><br></br><br></br>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <b><h2 className="h2 mb-4">Meet Our Doctors</h2></b>
            <p className="text-xl text-black-400">Our experienced set of doctors specalizes in many types of Scolioses such as levoscoliosis,juvenile,dextroscoliosis and many more.</p>
          </div>

          {/* Section content */}
          <div>

            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 1 && 'opacity-190'}`}
                onClick={() => setTab(1)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Levoscoliosis</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 2 && 'opacity-150'}`}
                onClick={() => setTab(2)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Dextroscoliosis</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 3 && 'opacity-150'}`}
                onClick={() => setTab(3)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 10c-1.1 0-2-.9-2-2 0-.2 0-.3.1-.5L3.6 5 5 3.6l2.5 2.5c.2-.1.3-.1.5-.1 1.1 0 2 .9 2 2s-.9 2-2 2z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Idiopathic</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 4 && 'opacity-150'}`}
                onClick={() => setTab(4)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 9v6a8 8 0 008-8V1a8 8 0 00-8 8zM0 6v3a6 6 0 006 6v-3a6 6 0 00-6-6z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Kyphosis</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 5 && 'opacity-150'}`}
                onClick={() => setTab(5)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 9v6a8 8 0 008-8V1a8 8 0 00-8 8zM0 6v3a6 6 0 006 6v-3a6 6 0 00-6-6z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Juvenile</span>
              </button>

            </div>

            {/* Tabs items */}
            <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>

              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>


                  {DoctorList.map((val, key) => {
                    {
                      if (DoctorList[key].scoliosis_type == 'levoscoliosis') {
                        return <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
                          <div className="flex flex-col items-center">
                            <img className="rounded-full mb-4" src="https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160705616/59613224-doctor-avatar-profile-isolated-icon-vector-illustration-graphic-.jpg" width="120" height="120" alt="Team member 01" />
                            <h6 className="text-small font-medium mb-1">{DoctorList[key].name}</h6>
                            <div className="text-black-500 mb-1">Specalization:- {DoctorList[key].scoliosis_type}</div>

                          </div>
                        </div>
                      }
                    }

                  })}
                  {/* 1st member */}




                </div>
              </Transition>

              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>


                  {DoctorList.map((val, key) => {
                    {
                      if (DoctorList[key].scoliosis_type == 'dextroscoliosis') {
                        return <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
                          <div className="flex flex-col items-center">
                            <img className="rounded-full mb-4" src="https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160705616/59613224-doctor-avatar-profile-isolated-icon-vector-illustration-graphic-.jpg" width="120" height="120" alt="Team member 01" />
                            <h6 className="text-small font-medium mb-1">{DoctorList[key].name}</h6>
                            <div className="text-black-500 mb-1">Specalization:- {DoctorList[key].scoliosis_type}</div>

                          </div>
                        </div>
                      }
                    }

                  })}
                  {/* 1st member */}




                </div>
              </Transition>

              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>


                  {DoctorList.map((val, key) => {
                    {
                      if (DoctorList[key].scoliosis_type == 'idiopathic') {
                        return <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
                          <div className="flex flex-col items-center">
                            <img className="rounded-full mb-4" src="https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160705616/59613224-doctor-avatar-profile-isolated-icon-vector-illustration-graphic-.jpg" width="120" height="120" alt="Team member 01" />
                            <h6 className="text-small font-medium mb-1">{DoctorList[key].name}</h6>
                            <div className="text-black-500 mb-1">Specalization:- {DoctorList[key].scoliosis_type}</div>

                          </div>
                        </div>
                      }
                    }

                  })}
                  {/* 1st member */}




                </div>
              </Transition>

              {/* Item 4 */}
              <Transition
                show={tab === 4}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>


                  {DoctorList.map((val, key) => {
                    {
                      if (DoctorList[key].scoliosis_type == 'kyphosis') {
                        return <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
                          <div className="flex flex-col items-center">
                            <img className="rounded-full mb-4" src="https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160705616/59613224-doctor-avatar-profile-isolated-icon-vector-illustration-graphic-.jpg" width="120" height="120" alt="Team member 01" />
                            <h6 className="text-small font-medium mb-1">{DoctorList[key].name}</h6>
                            <div className="text-black-500 mb-1">Specalization:- {DoctorList[key].scoliosis_type}</div>

                          </div>
                        </div>
                      }
                    }

                  })}
                  {/* 1st member */}




                </div>
              </Transition>

              {/* Item 5 */}
              <Transition
                show={tab === 5}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>


                  {DoctorList.map((val, key) => {
                    {
                      if (DoctorList[key].scoliosis_type == 'juvenile') {
                        return <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
                          <div className="flex flex-col items-center">
                            <img className="rounded-full mb-4" src="https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160705616/59613224-doctor-avatar-profile-isolated-icon-vector-illustration-graphic-.jpg" width="120" height="120" alt="Team member 01" />
                            <h6 className="text-small font-medium mb-1">{DoctorList[key].name}</h6>
                            <div className="text-black-500 mb-1">Specalization:- {DoctorList[key].scoliosis_type}</div>

                          </div>
                        </div>
                      }
                    }

                  })}
                  {/* 1st member */}




                </div>
              </Transition>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Tabs;
