import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function NavbarBottom() {
    return (
        <nav className='navBottom'>
            <div className="container">
                <div className="navbarBottom">
                    <div className="navbarBottom-category-section">
                        <button className='navbarBottom-category-section-btn'>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="16" height="2" rx="1" transform="matrix(-1 0 0 1 16 0)" fill="white" /> <rect width="20" height="2" rx="1" transform="matrix(-1 0 0 1 20 7)" fill="white" /> <rect width="16" height="2" rx="1" transform="matrix(-1 0 0 1 16 14)" fill="white" /> </svg>
                            <div className='navbarBottom-category-section-btn-text'>Каталог</div>
                        </button>
                    </div>
                    <div className="navbarBottom-search-section">
                        <input className='navbarBottom-search-section-inpSearch' type="text" placeholder='search' />
                        <button className='navbarBottom-search-section-btnSearch'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M27.1944 25.7582L22.8977 21.5573L22.797 21.4041C22.6097 21.2177 22.3537 21.1127 22.0865 21.1127C21.8192 21.1127 21.5632 21.2177 21.3759 21.4041C17.7244 24.7542 12.0977 24.9363 8.22751 21.8296C4.35733 18.723 3.44459 13.2917 6.09461 9.13771C8.74463 4.98371 14.1351 3.39606 18.6911 5.42767C23.247 7.45928 25.5548 12.4797 24.0838 17.1595C23.9778 17.4976 24.0644 17.8652 24.3109 18.124C24.5574 18.3827 24.9264 18.4932 25.2788 18.4139C25.6312 18.3345 25.9136 18.0774 26.0195 17.7393C27.778 12.1858 25.1222 6.20944 19.7701 3.67632C14.4181 1.1432 7.97605 2.81353 4.61132 7.60677C1.24659 12.4 1.96897 18.8777 6.31116 22.8494C10.6534 26.8211 17.3122 27.0949 21.9802 23.4936L25.7846 27.2131C26.1775 27.5956 26.8127 27.5956 27.2056 27.2131C27.5981 26.8253 27.5981 26.2007 27.2056 25.8129L27.1944 25.7582Z" fill="white"/> </svg> </button>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}
