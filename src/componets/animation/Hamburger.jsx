import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";
import image1 from '../../images/Screenshot 1.png'
import image2 from '../../images/Screenshot 2.png'
import image3 from '../../images/Screenshot 3.png'
import image4 from '../../images/Screenshot 4.png'
import image5 from '../../images/Screenshot 5.png'

const cities = [
  { name: "QR Scanner & Generator ", image: image1 },
  { name: "Random Color", image: image2 },
  { name: "AutoComplete Search", image: image3 },
  { name: "Light & Dark Mode", image: image4 },
  { name: "Scroll Indicator", image: image5 }
];

const Hamburger = ({ state }) => {

  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {

    if (state.clicked === false) {

      staggerRevealClose(reveal2, reveal1);

      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {

      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });

      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to="/qrScannerCode">
                      QR Scanner
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to="/randomColor">
                      Random Color
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to="/lightDarkMode">
                      Light & Dark Mode
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className=''>
                <nav>
                  <ul>
                    <li>
                      <Link
                        onMouseEnter={e => handleHover(e)}
                        onMouseOut={e => handleHoverExit(e)}
                        ref={el => (line1 = el)}
                        to="/autoCompleteSearch">AutoComplete Search
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={e => handleHover(e)}
                        onMouseOut={e => handleHoverExit(e)}
                        ref={el => (line2 = el)}
                        to="/scrollIndector">Scroll Indicator
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className='locations '>
                <h3 className="fw-bold">Projects:</h3>
                {cities.map(el => (
                  <span
                    style={{ fontSize: '14px' }}
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    <Link className="text-decoration-none text-warning fw-bolder">{el.name}</Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
