import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";
import MediaQuery from 'react-responsive'
import video from "../../video/video1.mp4";
import poster from '../../images/guneshsistemi.png';
import line from '../../images/line1.png';
const SectionThree = () =>{

  const videoSrc = video;
  return(
    <div className="section-3-main-div">
      
      <div className="container bigScreenContainer">
        <div className="container-fluid">
          <div className="row" >



            

            <div  className="text-box col-md-6 col-sm-12 col-12">
              <VideoPlayer 
              src={videoSrc} poster={poster} className="video"   
              />
            </div>

            <div  className="text-box col-md-6 col-sm-12 col-xs-12" >
              <h2>Biz kimik ?</h2>
              <p>Hey dostlar, salam! Bu gün müxtəlif peşələr haqqında maraqlı bir kitab oxudum. 
                Sən demə, həkim, müəllim, polis, yanğınsöndürən kimi fərqli peşə növləri var. 
                Öyrəndim ki,  
                heç də bütün peşələrə yiyələnmək üçün böyümək lazım deyil! Uşaq yaşlarımızdan
                  da ixtiraçılıqla məşğul olub balaca alimlər ola bilərik! 
              </p>
              <button className="section-3-button">Davami</button>
              <img src={line} alt="img"></img>
            </div>

          </div>
        </div> 
      </div>

      <MediaQuery maxDeviceWidth={780}  >
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12 section-3-for-mobile" >
                <h2>Biz kimik ?</h2>
                
                  <VideoPlayer 
                    src={videoSrc} poster={poster} className="video"   
                  />
                
                
                <p>Hey dostlar, salam! Bu gün müxtəlif peşələr haqqında maraqlı bir kitab oxudum. 
                Sən demə, həkim, müəllim, polis, yanğınsöndürən kimi fərqli peşə növləri var. 
                Öyrəndim ki,  
                  
              </p>
              <button className="section-3-button">Davami</button>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>


      
    </div>
  )
}

export default SectionThree