import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="Footer">
          <FooterLeft />
          <FooterRight/>

        </div>
      </div>
    </footer>
  )
}
