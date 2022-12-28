import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FaServer, FaCloudDownloadAlt,  FaRegEnvelope, FaCheckCircle, FaSwatchbook} from "react-icons/fa";
import Product from './components/Product';
import Mission from './components/Mission';
import Form from './components/Form';
import Carousel from './components/Carousel';


export default function Home() {
  const [count, setCount] = useState(0); 
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
    <div className="main-banner-wrapper">
      <div className='container'>
        <div className='banner-content'>
            <h5 className='meta-title'>Bring your ideas to life</h5>
            <h1 className='banner-title'>Powerful Web Hosting Services</h1>
            <p>Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
            <div className='primary-btn banner-btn'>
              <Button variant="contained" className='btn-jquery' onClick={handleClick}>Get Startd {count}</Button>
            </div>
        </div>
      </div>
    </div>
    <div className='service-section'>
      <div className='container'>
        <div className='service-top'>
          <h2>Hosting Services</h2>
          <p>Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
        </div>
        <div className='service-bottom'>
        <div className='service-bottom-inner'>
            <div className='service-icon'>
              < FaServer />
            </div>
            <div className='service-content'>
              <h3>Web Hosting</h3>
              <p>The phrasal sequence of the is now so that many campaign and benefit</p>
            </div>
          </div>
          <div className='service-bottom-inner'>
            <div className='service-icon'>
              < FaCloudDownloadAlt />
            </div>
            <div className='service-content'>
              <h3>Domains </h3>
              <p>The phrasal sequence of the is now so that many campaign and benefit</p>
            </div>
          </div>
          
          <div className='service-bottom-inner'>
            <div className='service-icon'>
              < FaRegEnvelope />
            </div>
            <div className='service-content'>
              <h3> Emails</h3>
              <p>The phrasal sequence of the is now so that many campaign and benefit</p>
            </div>
          </div>
          <div className='service-bottom-inner'>
            <div className='service-icon'>
              < FaServer />
            </div>
            <div className='service-content'>
              <h3>Web Hosting</h3>
              <p>The phrasal sequence of the is now so that many campaign and benefit</p>
            </div>
          </div>
          <div className='service-bottom-inner'>
            <div className='service-icon'>
              < FaServer />
            </div>
            <div className='service-content'>
              <h3>Web Hosting</h3>
              <p>The phrasal sequence of the is now so that many campaign and benefit</p>
            </div>
          </div>
          <div className='service-bottom-inner'>
            <div className='service-icon'>
              < FaServer />
            </div>
            <div className='service-content'>
              <h3>Web Hosting</h3>
              <p>The phrasal sequence of the is now so that many campaign and benefit</p>
            </div>
          </div>
          <div className='service-bottom-inner'>
            <div className='service-icon'>
              < FaServer />
            </div>
            <div className='service-content'>
              <h3>Web Hosting</h3>
              <p>The phrasal sequence of the is now so that many campaign and benefit</p>
            </div>
          </div>
          <div className='service-bottom-inner'>
            <div className='service-icon'>
              < FaServer />
            </div>
            <div className='service-content'>
              <h3>Web Hosting</h3>
              <p>The phrasal sequence of the is now so that many campaign and benefit</p>
            </div>
          </div>
        </div>
        <div className='service-quick'>
          <div className='service-quick-top'>
            <h2>Quick Responce and Secure Server</h2>
            <p>You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
            <ul className='service-quick-item'>
              <li> <FaCheckCircle /> Digital Marketing Solutions for Tomorrow</li>
              <li> <FaCheckCircle /> Our Talented & Experienced Marketing Agency</li>
              <li> <FaCheckCircle /> Create your own skin to match your brand</li>
            </ul>
            <div className='primary-btn banner-btn'>
              <Button variant="contained">Find Out More </Button>
            </div>
          </div>
          <div className='service-image-wrapper'>
            <img src="https://shreethemes.in/techwind/layouts/assets/images/hosting/2.png" alt="" />
          </div>
        </div>
        <div className='service-quick'>
          <div className='service-image-wrapper'>
            <img src="https://shreethemes.in/techwind/layouts/assets/images/hosting/2.png" alt="" />
          </div>
          <div className='service-quick-top'>
            <div className='service-quick-two-inner'>
              <div className='service-quick-icon'>
                <FaSwatchbook /> 
              </div>
              <div className='service-quick-two-content'>
                <h3>Quick Responce and Secure Server</h3>
                <p>You can combine all the Techwind templates into a single one.</p>
              </div>
            </div>
            <div className='service-quick-two-inner'>
              <div className='service-quick-icon'>
                <FaSwatchbook /> 
              </div>
              <div className='service-quick-two-content'>
                <h3>Quick Responce and Secure Server</h3>
                <p>You can combine all the Techwind templates into a single one.</p>
              </div>
            </div>
            <div className='service-quick-two-inner'>
              <div className='service-quick-icon'>
                <FaSwatchbook /> 
              </div>
              <div className='service-quick-two-content'>
                <h3>Quick Responce and Secure Server</h3>
                <p>You can combine all the Techwind templates into a single one.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Product />
    <Mission />
    <Form />
    <Carousel />
    </>
  )
}
