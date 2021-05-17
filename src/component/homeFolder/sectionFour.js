import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import img1 from '../../images/image-1.jpg';
import img2 from '../../images/image-2.jpg';
import img3 from '../../images/image-3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaQuery from 'react-responsive'

const SectionFour = ( ) =>{

  const elements =[
    {
      width: 1920,
      height: 'auto'
    },
    {
      width: 280,
      height: 'auto'
    }

  ]
  return(
    <SRLWrapper  >
      <div className="bg-div">
        <div className="container ">
          <div className="container-fluid">
            <div className="row section-4-main-div">
              <div className="col-md-12 ">
                <h4>Qalereya</h4>
              </div>
              <div className="col-md-4 section-4-div ">
                <div className=" " >
                  <img className="responsive" src={img1} alt="img"></img>
                </div>
              </div>
              <div className="col-md-4 section-4-div">
                <div className=" " >
                  <img className="responsive" src={img2} alt="img"></img>
                </div>
              </div>
              <div className="col-md-4 section-4-div">
                <div className=" " >
                  <img className="responsive" src={img3} alt="img"></img>
                </div>
              </div>
              <div className="col-md-4 section-4-div">
                <div className=" " >
                  <img className="responsive" src={img1} alt="img"></img>
                </div>
              </div>
              <div className="col-md-4 section-4-main-div">
                <div className=" section-4-div" >
                  <img className="responsive" src={img2} alt="img"></img>
                </div>
              </div>
              <div className="col-md-4 section-4-main-div">
                <div className=" section-4-div" >
                  <img className="responsive" src={img3} alt="img"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-div-media">
        <div className="container ">
          <div className="container-fluid">
            <div className="row ">
              <div className=" text-div ">
                <h4>Qalereya</h4>
              </div>
              <div className="col-md-12">
                <div className=" section-media-4-div " >
                  <img className="" src={img2} alt="img"></img>
                </div>
                <div className=" section-media-4-div " >
                  <img className="" src={img3} alt="img"></img>
                </div>
              </div>
              <div className="col-md-12">
                <div className=" section-media-4-div " >
                  <img className="" src={img2} alt="img"></img>
                </div>
                <div className=" section-media-4-div " >
                  <img className="" src={img3} alt="img"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SRLWrapper>
  )
}

export default SectionFour  