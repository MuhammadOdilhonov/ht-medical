import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  return (
    <div>
      <div className='header'>
        <div className='header_top'>
          <div className='header_top_left'>
            <div className='header_top_left_title'>
              Медицинское <br /> оборудование от <br />
              лучших производителей
            </div>
            <div className='header_top_left_desc'>EТ400 – многофункциональный универсальный акушерский стол с механико- гидравлическим приводом, специально предназначенный для безопасного позиционирования пациента при выполнении гинекологически - акушерских операций, осмотров и родов в гинекологических отделениях, женских консультациях, роддомах.</div>
            <button className='header_top_left_btn'>Подробнее</button>
          </div>
          <div className='header_top_right'>
            <img className='header_top_right_img' src='/header_chair.png' alt="header_cair" />
          </div>
        </div>
        <div className='header_bottom'>
          <div className="header_bottom_info">
            <div className="header_bottom_info_title">
              SMART 3D-X.
              Дентальный 3D
              Рентген
            </div>
            <div className="header_bottom_info_desc">
              Точное сканирование любого трека может быть достигнуто с помощью высококачественным QuartZ.
              Множественные криволинейные траектории томографии больше подходят для зубной дуги пациента.
            </div>
            <div className="header_bottom_info_go">
              <div  className="header_bottom_info_go_arrow">
                <FontAwesomeIcon icon={faArrowRight} />
                </div>
              <div className='header_bottom_info_go_title'>Перейти</div>
            </div>
              <img className='header_bottom_info_img' src="/image.png" alt="dfsd" />
          </div>
          <div className="header_bottom_info_ultrasound">
            <div className="header_bottom_info_ultrasound_title">
              Ультразвуковой аппарат
              VINNO E20
            </div>
            <div className="header_bottom_info_ultrasound_desc">
              Революционная радиочастотная платформа
              Автоматическая трассировка спектра PW/CW
              Комплексные функции 3D/4D <br />
              Работа смарт – сенсорной панели

            </div>
            <div className="header_bottom_info_ultrasound_go">
              <div className="header_bottom_info_ultrasound_go_arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className='header_bottom_info_ultrasound_go_title'>Перейти</div>
            </div>
            <img className='header_bottom_info_ultrasound_img' src="/img_ultrasound.png" alt="dfsd" />
          </div>
        </div>
      </div>
    </div>
  )
}
