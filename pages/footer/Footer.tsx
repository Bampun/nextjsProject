import React from 'react'
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <section className='footer-wrapper'>
        <div className='container'>
          <div className='footer-inner'>
            <div className="footer-col-1">
              <h2> <Link href="/"> Pharma Legacy </Link></h2>
              <p>Your blueprint for a better internet.</p>
            </div>
            <div className="footer-col-1">
              <h2> Quick links </h2>
            </div>
            <div className="footer-col-1">
            <h2> Services </h2>
            </div>
            <div className="footer-col-1">
            <h2> Location </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
