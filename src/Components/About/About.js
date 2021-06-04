import React, {useEffect} from "react";
import Retrato from "../../assets/selfie.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";


function About() {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
  return (
    <div  className="container">
      <div data-aos="fade-left" className="row texto-about">
        <div className="col-lg-8  mx-auto">
          <h2 className="display-5">
            <b>Acerca de</b>
          </h2>
        </div>
      </div>
      <div data-aos="fade" className="row">
        <div className="col d-flex justify-content-center">
          <img className="retrato-about align-self-center" src={Retrato} />
        </div>
        <div className="d-flex align-items-center col-lg-8 mx-auto">
          <p className="fw-light fs-3">
            Mi nombre es José Javier Hurtarte,Tengo 20 años, soy un front y
            backend developer, apasionado por el User Experience. Actualmente
            soy un estudiante de Ingeniería en Ciencias de la Computación en la
            Universidad del Valle de Guatemala
          </p>
        </div>
      </div>
      <div data-aos="fade-right" className="row">
        <div className="d-flex justify-content-center col mx-auto">
          <ul className="list-inline banner-social-buttons">
            <li className="list-inline-item">
              &nbsp;
              <button
                className="btn btn-outline-secondary btn-lg btn-default"
                type="button"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span className="network-name">&nbsp; LinkedIn</span>
              </button>
            </li>
            <li className="list-inline-item">
              &nbsp;
              <button
                className="btn btn-outline-secondary btn-lg btn-default"
                type="button"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span className="network-name">&nbsp;Instagram</span>
              </button>
            </li>
            <li className="list-inline-item">
              &nbsp;
              <button
                className="btn btn-outline-secondary btn-lg btn-default"
                type="button"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span className="network-name">&nbsp;github</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
