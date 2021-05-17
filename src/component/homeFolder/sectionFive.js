import React from 'react'
import img1 from '../../images/robotimg.png'
import img2 from '../../images/robotimg2.png'
import img3 from '../../images/robotimg3.png'
import bgShape from '../../images/layout.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SectionFive = () =>{


  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    speed: 5000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "180px",
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "120px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px",
        }
      }
    ]

};

return(
  <div className="section-5-main-div">
    
    <div className="bg-img-div">
      <h4>Bunalrı bilmək yaxşıdır</h4>
      <img src={bgShape}  alt="img"></img>
    </div>
    <div className="slide-div" >
      <Slider {...settings}>
        <div className="caruseldiv">
          <div className="top-div">
            <img  src={img2} alt="img" ></img>
          </div>
          <div className="bottom-div">
            <p>
              Hey dostlar, salam! 
              Bu gün müxtəlif peşələr haqqında maraqlı
              bir kitab oxudum.
            </p>
            <button> Davamı </button>
          </div>
        </div>
        
        <div className="caruseldiv">
          <div className="top-div">
            <img  src={img1} alt="img" ></img>
          </div>
          <div className="bottom-div">
            <p>
              Hey dostlar, salam! 
              Bu gün müxtəlif peşələr haqqında maraqlı
              bir kitab oxudum.
            </p>
            <button> Davamı </button>
          </div>
        </div>
        <div className="caruseldiv">
          <div className="top-div">
            <img  src={img2} alt="img" ></img>
          </div>
          <div className="bottom-div">
            <p>
              Hey dostlar, salam! 
              Bu gün müxtəlif peşələr haqqında maraqlı
              bir kitab oxudum.
            </p>
            <button> Davamı </button>
          </div>
        </div>
        <div className="caruseldiv">
          <div className="top-div">
            <img  src={img3} alt="img" ></img>
          </div>
          <div className="bottom-div">
            <p>
              Hey dostlar, salam! 
              Bu gün müxtəlif peşələr haqqında maraqlı
              bir kitab oxudum.
            </p>
            <button> Davamı </button>
          </div>
        </div>
      </Slider>
    </div>

  </div>
)
}

export default SectionFive