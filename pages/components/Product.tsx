import React from 'react'
import { FaSwatchbook } from "react-icons/fa";

export default function Product() {
  return (
    <>
      <div className='product-wrapper'>
        <div className='container'>
          <h1 className='product-title'>Products</h1>
          <div className='product-inner'>
            <div className='product-item'>
              <div className='product-icon'>
                <div className='product-img'>
                  <FaSwatchbook /> 
                  <h3 className='author-name'>Jazmine</h3>
                </div>
                <div className="product-content">
                  <h3 className='author-name'>Jazmine</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ac habitasse, himenaeos pulvinar libero facilisis cum lacus nisi curabitur, vitae sodales nibh neque ut litora placerat consequat.</p>
                  <a href="#"> <span className='explore-more'>Explore</span> </a>
                </div>
              </div>
            </div>
            <div className='product-item'>
              <div className='product-icon'>
                <div className='product-img'>
                  <FaSwatchbook /> 
                  <h3 className='author-name'>Jazmine</h3>
                </div>
                <div className="product-content">
                  <h3 className='author-name'>Jazmine</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ac habitasse, himenaeos pulvinar libero facilisis cum lacus nisi curabitur, vitae sodales nibh neque ut litora placerat consequat.</p>
                  <a href="#"> <span className='explore-more'>Explore</span> </a>
                </div>
              </div>
            </div>
            <div className='product-item'>
              <div className='product-icon'>
                <div className='product-img'>
                  <FaSwatchbook /> 
                  <h3 className='author-name'>Jazmine</h3>
                </div>
                <div className="product-content">
                  <h3 className='author-name'>Jazmine</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ac habitasse, himenaeos pulvinar libero facilisis cum lacus nisi curabitur, vitae sodales nibh neque ut litora placerat consequat.</p>
                  <a href="#"> <span className='explore-more'>Explore</span> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
