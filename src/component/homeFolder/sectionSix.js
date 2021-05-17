import React from 'react'
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Gunay from '../../images/Gunay.png'

const SectionSix = () =>{

  const settings = {
    arrows:true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    // autoplay: true,
    speed: 1000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      }
    ]

};

return(
  <div className="section-6-main-div">
    <div className="section-text-div">
      <h5>İnsanlar bizim haqqımızda nə düşünür?</h5>
    </div>
  <div className="container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="section-6" >
            <Slider {...settings}>
              <div className="client-box">
                <div className="circle-div" >
                  <img src={Gunay} alt="img"></img>
                </div>
                <div className="squer-div">
                  <p>Farid Adam</p>
                  <p>Hey dostlar, salam! Bu 
                    gün müxtəlif peşələr 
                    haqqında maraqlı bir 
                    kitab oxudum. Sən demə
                  </p>
                </div>
              </div>
              <div className="client-box">
              <div className="circle-div" >
                <img src={Gunay} alt="img"></img>
              </div>
              <div className="squer-div">
                  <p>Farid Adam</p>
                  <p>Hey dostlar, salam! Bu 
                    gün müxtəlif peşələr 
                    haqqında maraqlı bir 
                    kitab oxudum. Sən demə
                  </p>
              </div>
              </div>
              <div className="client-box">
              <div className="circle-div" >
                <img src={Gunay} alt="img"></img>
              </div>
                <div className="squer-div">
                  <p>Farid Adam</p>
                  <p>Hey dostlar, salam! Bu 
                    gün müxtəlif peşələr 
                    haqqında maraqlı bir 
                    kitab oxudum. Sən demə
                  </p>
                </div>
              </div>
              <div className="client-box">
              <div className="circle-div" >
                <img src={Gunay} alt="img"></img>
              </div>
                <div className="squer-div">
                  <p>Farid Adam</p>
                  <p>Hey dostlar, salam! Bu 
                    gün müxtəlif peşələr 
                    haqqında maraqlı bir 
                    kitab oxudum. Sən demə
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </div>
    

  </div>
)
}

export default SectionSix