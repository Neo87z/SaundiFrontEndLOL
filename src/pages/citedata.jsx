
import { Link } from 'react-router-dom';

import axios from 'axios';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import { PronounciationURL, EssayURL } from '../constants'
import React, { useState, Component } from 'react';
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
import { PythonBackendURL } from '../constants'
export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "https://previews.123rf.com/images/yupiramos/yupiramos1607/yupiramos160705616/59613224-doctor-avatar-profile-isolated-icon-vector-illustration-graphic-.jpg",
      SuplierName: "",
      SuplierAddress: "",
      SuplierContactNumber: "",
      SuplierAccountNumber: "",
      ContactNumber: "",
      Sentence: "",
      submitted: false,

      Doctor1Name: "Dr Jeremy Kellerstein Toronto ON ",
      Doctor2Name: "Dr STEPHEN C. SORENSON Elgin IL ",
      Doctor3Name: "Dr PAVAN K. PAMADURTHI SHERMAN TX ",
      Doctor4Name: "Dr Mark Reichman Vancouver BC ",
      Doctor5Name: "Dr Sarah Davidson Dartmouth NS ",


      ImageUrl: 'https://www.verywellhealth.com/thmb/oncFMv1SO2ffNipXRRUPA8HIt1E=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/scoliosis-lateral-curve-of-the-spine-2548780-color-V1-c044832970b94ee1ac37556aa3e3e8f9.png',
      Treatment: 'Observation',
      Description: 'The advantage of watching and waiting is that many cases of scoliosis may not need treatment with a brace, or surgery. Many experts believe that mild cases of scoliosis do not have a large impact upon a person s health. But is this really true? Some scientists have found that, actually, mild cases of scoliosis can limit the body s ability to exercise effectively. Sometimes, too, even a small scoliosis can cause pain or other problems. Even if the scoliosis isn t getting worse, wouldn t it be nice to have an option that could help your loved one achieve their full athletic potential, or take away some of the pain or sleeplessness they may be experiencing as a result of their scoliosis? In most cases for young people with small curves, CLEAR Scoliosis Treatment does not require as large of a commitment as it does with more severe cases. Some people with small curves have achieved the results they wanted after only a few weeks of care. Also, CLEAR Certified Doctors of Chiropractic can teach your loved one some important exercises for their spine that may be helpful in the future.',

      Idopathic: false,
      Juveile: false,
      Kyphosis: false,
      Levoscoliss: false,
      Dextro: false
    };
  }


  onChnageAccountNumber = (e) => {

    this.setState({

      Sentence: e.target.value

    });
    console.log(this.state.Sentence)
  };



  IdoathicOnchange = (e) => {

    let BaseURlX = BackendDataURL + "/scoliosis"
    axios
      .post(BaseURlX, {
        ScoliosisType: "idiopathic",
        SpineAngle: this.state.Sentence,
      })
      .then((response) => {

        this.setState({
          Doctor1Name: response.data.Doctors[0],
          Doctor2Name: response.data.Doctors[1],
          Doctor3Name: response.data.Doctors[2],
          Doctor4Name: response.data.Doctors[3],
          Doctor5Name: response.data.Doctors[4],

          Treatment: response.data.Treatment,
          ImageUrl: response.data.ImageUrl,
          Description: response.data.Description


        });
        console.log(response.data.Doctors)

      });
  };

  JuveilecOnchange = (e) => {


    axios
      .post("http://localhost:5000/scoliosis", {
        ScoliosisType: "juvenile",
        SpineAngle: this.state.Sentence,
      })
      .then((response) => {

        this.setState({
          Doctor1Name: response.data.Doctors[0],
          Doctor2Name: response.data.Doctors[1],
          Doctor3Name: response.data.Doctors[2],
          Doctor4Name: response.data.Doctors[3],
          Doctor5Name: response.data.Doctors[4],

          Treatment: response.data.Treatment,
          ImageUrl: response.data.ImageUrl,
          Description: response.data.Description


        });
        console.log(response.data.Doctors)

      });
  };
  KyphosisOnchange = (e) => {


    axios
      .post("http://localhost:5000/scoliosis", {
        ScoliosisType: "kyphosis",
        SpineAngle: this.state.Sentence,
      })
      .then((response) => {

        this.setState({
          Doctor1Name: response.data.Doctors[0],
          Doctor2Name: response.data.Doctors[1],
          Doctor3Name: response.data.Doctors[2],
          Doctor4Name: response.data.Doctors[3],
          Doctor5Name: response.data.Doctors[4],

          Treatment: response.data.Treatment,
          ImageUrl: response.data.ImageUrl,
          Description: response.data.Description


        });
        console.log(response.data.Doctors)

      });
  };
  LevoscolissOnchange = (e) => {


    axios
      .post("http://localhost:5000/scoliosis", {
        ScoliosisType: "levoscoliosis",
        SpineAngle: this.state.Sentence,
      })
      .then((response) => {

        this.setState({
          Doctor1Name: response.data.Doctors[0],
          Doctor2Name: response.data.Doctors[1],
          Doctor3Name: response.data.Doctors[2],
          Doctor4Name: response.data.Doctors[3],
          Doctor5Name: response.data.Doctors[4],

          Treatment: response.data.Treatment,
          ImageUrl: response.data.ImageUrl,
          Description: response.data.Description


        });
        console.log(response.data.Doctors)

      });
  };
  Dextro = (e) => {


    axios
      .post("http://localhost:5000/scoliosis", {
        ScoliosisType: "dextroscoliosis",
        SpineAngle: this.state.Sentence,
      })
      .then((response) => {

        this.setState({
          Doctor1Name: response.data.Doctors[0],
          Doctor2Name: response.data.Doctors[1],
          Doctor3Name: response.data.Doctors[2],
          Doctor4Name: response.data.Doctors[3],
          Doctor5Name: response.data.Doctors[4],

          Treatment: response.data.Treatment,
          ImageUrl: response.data.ImageUrl,
          Description: response.data.Description


        });
        console.log(response.data.Doctors)

      });
  };

  onSubmit = (e) => {






  };
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }




  render() {

    return (
      <div style={{ backgroundColor: 'white', color: 'black', }} className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="grow">

          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>

          <section className="relative" style={{ marginTop: '-7%' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                <br></br><br></br>
                {/* Page header */}
                <div className="max-w-6xl mx-auto text-center pb-12 md:pb-10">
                  <h3 className="h3">Scoliosis Detection.</h3>
                </div>

                {/* Form */}
                <div className="max-w-sm mx-auto">


                  <form onSubmit={this.onSubmit}>

                    <div className="flex flex-wrap -mx-9 mb-4">
                      <span className="w-full px-3">

                        <input
                          value={this.state.Sentence}
                          onChange={this.onChnageAccountNumber}

                          
                          id="password" style={{ width: '200px', marginLeft: '-100%',color:'black' }} type="text" className="form-input w-full text-gray-300" placeholder="Enter The Angle" required />
                      </span>
                      <div className="" style={{ marginTop: '-11%', marginLeft: '-38%' }}>

                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                          <div data-aos="fade-up" data-aos-delay="400">
                            <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={this.IdoathicOnchange}>Idiopathic</a>
                          </div><div>&nbsp;</div>
                          <div data-aos="fade-up" data-aos-delay="400">
                            <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={this.JuveilecOnchange} >Juvenile</a>
                          </div><div>&nbsp;</div>
                          <div data-aos="fade-up" data-aos-delay="400">
                            <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={this.KyphosisOnchange} >Kyphosis</a>
                          </div><div>&nbsp;</div>
                          <div data-aos="fade-up" data-aos-delay="400">
                            <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={this.LevoscolissOnchange} >Levoscoliosis</a>
                          </div><div>&nbsp;</div>
                          <div data-aos="fade-up" data-aos-delay="400">
                            <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={this.Dextro} >Dextroscoliosis</a>
                          </div>


                        </div>
                      </div>
                      <div style={{ color: 'black', backgroundColor: 'white', marginLeft: '160%', marginTop: '-21.5%' }} className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="700">
                        <div className="max-w-6xl mx-auto text-center pb-12 md:pb-10">
                          <h3 className="h3">Doctors</h3>
                        </div>

                        <div data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
                          <div className="flex flex-col items-center">
                            <img className="rounded-full mb-4" src={this.state.image} width="120" height="10" alt="Team member 01" />
                            <h6 className="text-small font-medium mb-1">{this.state.Doctor1Name}</h6>


                          </div>
                          <div className="flex flex-col items-center">
                            <img className="rounded-full mb-4" src={this.state.image} width="120" height="120" alt="Team member 01" />
                            <h6 className="text-small font-medium mb-1">{this.state.Doctor2Name}</h6>


                          </div>
                          <div className="flex flex-col items-center">
                            <img className="rounded-full mb-4" src={this.state.image} width="120" height="120" alt="Team member 01" />
                            <h6 className="text-small font-medium mb-1">{this.state.Doctor3Name}</h6>


                          </div>
                          <div className="flex flex-col items-center">
                            <img className="rounded-full mb-4" src={this.state.image} width="120" height="120" alt="Team member 01" />
                            <h6 className="text-small font-medium mb-1">{this.state.Doctor4Name}</h6>


                          </div>
                          <div className="flex flex-col items-center">
                            <img className="rounded-full mb-4" src={this.state.image} width="120" height="120" alt="Team member 01" />
                            <h6 className="text-small font-medium mb-1">{this.state.Doctor5Name}</h6>


                          </div>
                        </div>
                      </div>
                    </div>

                    <figure style={{ marginTop: '-250%', width: '260%', height: '10%', marginLeft: '-115%' }}>
                      <img className="" src={this.state.ImageUrl} alt="Blog post 01" />
                    </figure>
                    <br></br>
                    <div style={{ marginLeft: '-110%' }} className="relative flex flex-col " data-aos="fade-up" data-aos-delay="200">
                      <div aria-hidden="true" className="absolute h-1   border-gray-700 hidden md:block" data-aos="fade-in" data-aos-delay="400"></div>

                      <h4 style={{ color: 'black' }} className="h4 mb-2"> {this.state.Treatment}</h4>
                      <p style={{ color: 'black' }} className="text-lg text-gray-400 ">{this.state.Description}</p>
                    </div>


                  </form>

                </div>
                <br></br><br></br>
                <br></br><br></br> <br></br><br></br> <br></br><br></br>
              </div>
            </div>
          </section>

        </main>

      </div>
    );
  }
}
