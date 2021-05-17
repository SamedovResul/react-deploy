import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const SectionSeven = () =>{


  return(
    <div className="section-7-main-div">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-text-div">
                <h6>Bizimlə Əlaqə</h6>
              </div>

              <form className="section-7-form">
                <input type="text" id="name" name="name" placeholder="AD VƏ SOYAD"></input>
                <input type="text" id="mail" name="mail" placeholder="E-mail"></input>
                <input type="text" id="topic" name="topic" placeholder="Movzu"></input>
                <textarea></textarea>
                <button type="submit">Göndər</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default SectionSeven