import React from 'react';

export default function OurService() {
    const data=[
        {}, {}, {}, {}, {}, {}, {}, {}, {},
    ]
    return (
        <div className='our-service'>
            <div className='our-service_text-and-line'>
                <div className='our-service_text-and-line_left-text'>
                    <p className='our-service_text-and-line_left-text_text'>Наши сервисы</p>
                </div>
                <div className='our-service_text-and-line_right-line'>
                    <div className='our-service_text-and-line_right-line_line'></div>
                </div>
            </div>
            <div className='our-service_row'>
                {data.map((category, index) => (
                    <div key={index} className={'our-service_row_card'}>
                       
                    </div>
                ))}
            </div>
        </div>
    );
}
