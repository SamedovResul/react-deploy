import React from 'react';
import line from '../../images/line1.png';
import poster from '../../images/guneshsistemi.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";
import video from "../../video/video1.mp4";
import MediaQuery from 'react-responsive'

const  SectionOne = () =>{

  const videoSrc = video;
  console.log(poster)
  return(

    
  <div className="position">
    <div className="container bigScreenContainer">
      <div className="container-fluid">
        <div className="row" >
          <div  className="text-box col-md-6 col-sm-12 col-xs-12" >
             <h2>Biz kimik ?</h2>
             <p>Hey dostlar, salam! Bu gün müxtəlif peşələr haqqında maraqlı bir kitab oxudum. 
               Sən demə, həkim, müəllim, polis, yanğınsöndürən kimi fərqli peşə növləri var. 
               Öyrəndim ki,  
               heç də bütün peşələrə yiyələnmək üçün böyümək lazım deyil! Uşaq yaşlarımızdan
                da ixtiraçılıqla məşğul olub balaca alimlər ola bilərik! 
            </p>
            <button className="section-1-button" >Davami</button>
            <img src={line} alt="img"></img>
          </div>
          <div  className="text-box col-md-6 col-sm-12 col-12">
            <VideoPlayer 
            src={videoSrc} poster={poster} className="video"   
            />
          </div>
        </div>
        
      </div> 
    </div>

    <MediaQuery maxDeviceWidth={780}  >
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 section-1-for-mobile" >
              <h2>Biz kimik ?</h2>
              
                <VideoPlayer 
                  src={videoSrc} poster={poster} className="video"   
                />
              
              
              <p>Hey dostlar, salam! Bu gün müxtəlif peşələr haqqında maraqlı bir kitab oxudum. 
               Sən demə, həkim, müəllim, polis, yanğınsöndürən kimi fərqli peşə növləri var. 
               Öyrəndim ki,  
                
            </p>
            <button className="button">Davami</button>
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>

  </div>  
  )
}

export default SectionOne