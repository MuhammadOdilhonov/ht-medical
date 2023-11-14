import Link from 'next/link';
import React from 'react';

const Breadcrumbs = ({ paths }) => {
    return (
        <div className="breadcrumbs" style={{marginTop:'55px',marginBottom:'30px'}}>
            {paths.map((path, index) => (
                <React.Fragment key={index}>
                    <Link className='Link' href={path.url} style={{color:"rgba(0, 0, 0, 0.6)" , fontSize:'18px',fontWeight:600}}> {path.label} </Link>
                    {index < paths.length - 1 && <span><svg style={{marginLeft:"7px",marginRight:'4px'}} width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5303 7.03033C24.8232 6.73744 24.8232 6.26256 24.5303 5.96967L19.7574 1.1967C19.4645 0.903806 18.9896 0.903806 18.6967 1.1967C18.4038 1.48959 18.4038 1.96447 18.6967 2.25736L22.9393 6.5L18.6967 10.7426C18.4038 11.0355 18.4038 11.5104 18.6967 11.8033C18.9896 12.0962 19.4645 12.0962 19.7574 11.8033L24.5303 7.03033ZM0 7.25H24V5.75H0V7.25Z" fill="black" fill-opacity="0.6" /></svg></span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;
