import React from 'react'

export default function WorkWithUs() {
    const data = [
        {}, {}, {}, {}, 
    ]
    return (
        <div className='work-with-us'>
            <div className='work-with-us_text-and-line'>
                <div className='work-with-us_text-and-line_left-text'>
                    <p className='work-with-us_text-and-line_left-text_text'>Преимущества работы с нами</p>
                </div>
                <div className='work-with-us_text-and-line_right-line'>
                    <div className='work-with-us_text-and-line_right-line_line'></div>
                </div>
            </div>
            <div className='work-with-us_row'>
                {data.map((category, index) => (
                    <div key={index} className={'work-with-us_row_card'}>

                    </div>
                ))}
            </div>
        </div>
    )
}
