import React from 'react'
import FooterLeft from './FooterLeft'


export default function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-sections-flex">
          <FooterLeft />

          <div className="footer-right-section">
            <div className="footer-right-section-menu">
              <div className="footer-right-section-text">Футер меню</div>
              <ul className='footer-right-section-ul'>
                <li>Главная</li>
                <li>Каталог продукции</li>
                <li>О нас</li>
                <li>Новости</li>
                <li>Контакты</li>
                <li>Сотрудничество</li>
                <li>Галерея</li>
              </ul>
            </div>

            <div className="footer-right-section-links">
              <div className="footer-right-section-text">Полезные ссылки</div>
              <ul className='footer-right-section-ul'>
                <li>Политика конфиденциальности</li>
                <li>Условия и положения</li>
                <li>Оговорка</li>
                <li>Поддержка</li>
              </ul>
            </div>

            <div className="footer-right-section-news">
              <div className="footer-right-section-text">Полезные новости</div>
              <div className="footer-right-section-news-descreption">Подпишитесь на наши социальные сети что быть в курсе всех новостей</div>
              <div className="footer-right-section-news-network">
                <div className="footer-right-section-news-network-items">
                  <div className="footer-right-section-news-network-items-logo">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_419_1865)">
                        <path d="M8.28783 15.5273H11.3258V28.1629C11.3258 28.4124 11.5259 28.6145 11.7728 28.6145H16.9239C17.1708 28.6145 17.3709 28.4124 17.3709 28.1629V15.5868H20.8633C21.0904 15.5868 21.2814 15.4147 21.3073 15.1868L21.8378 10.535C21.8523 10.407 21.8122 10.2788 21.7275 10.1828C21.6426 10.0867 21.5212 10.0317 21.3938 10.0317H17.371V7.11574C17.371 6.23672 17.8395 5.79098 18.7636 5.79098C18.8953 5.79098 21.3938 5.79098 21.3938 5.79098C21.6407 5.79098 21.8408 5.58875 21.8408 5.33937V1.06946C21.8408 0.819986 21.6407 0.617844 21.3938 0.617844H17.769C17.7434 0.616579 17.6866 0.614502 17.603 0.614502C16.974 0.614502 14.7878 0.739237 13.0609 2.34427C11.1476 4.1229 11.4135 6.25253 11.4771 6.62177V10.0316H8.28783C8.0409 10.0316 7.84082 10.2338 7.84082 10.4832V15.0756C7.84082 15.3251 8.0409 15.5273 8.28783 15.5273Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_419_1865">
                          <rect width="28" height="28" fill="white" transform="translate(0.84082 0.614502)" />
                        </clipPath>
                      </defs>
                    </svg>

                  </div>
                </div>
                <div className="footer-right-section-news-network-items">
                  <div className="footer-right-section-news-network-items-logo">
                    <svg width="41" height="29" viewBox="0 0 41 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40.8408 9.31482C40.8408 4.50094 36.947 0.614502 32.124 0.614502H9.55764C4.73463 0.614502 0.84082 4.50094 0.84082 9.31482V19.9142C0.84082 24.7281 4.73463 28.6145 9.55764 28.6145H32.124C36.947 28.6145 40.8408 24.7281 40.8408 19.9142V9.31482ZM26.593 15.1445L17.6107 20.0908C17.2125 20.3117 16.8585 20.0025 16.8585 19.5609V9.44731C16.8585 9.00567 17.2125 8.69652 17.6107 8.91734L26.6815 14.0845C27.0798 14.3495 26.9913 14.9237 26.593 15.1445Z" fill="white" />
                    </svg>

                  </div>
                </div>
                <div className="footer-right-section-news-network-items">
                  <div className="footer-right-section-news-network-items-logo">
                    <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.33538 12.1224L7.78715 14.493L10.2844 22.3993C10.4442 22.9057 11.0731 23.0929 11.4906 22.7568L15.0869 19.8706C15.4639 19.5682 16.0009 19.5531 16.3948 19.8347L22.8813 24.4708C23.3279 24.7904 23.9606 24.5495 24.0726 24.0182L28.8243 1.51675C28.9466 0.936413 28.3674 0.452278 27.8061 0.665999L1.32782 10.7218C0.674396 10.9699 0.680089 11.8807 1.33538 12.1224ZM9.88193 13.2311L22.4911 5.58572C22.7177 5.44873 22.9509 5.75038 22.7563 5.92808L12.35 15.4509C11.9843 15.7861 11.7483 16.2347 11.6815 16.7216L11.327 19.3077C11.2801 19.653 10.7874 19.6873 10.6906 19.3531L9.32725 14.6372C9.1711 14.0993 9.39865 13.5247 9.88193 13.2311Z" fill="white" />
                    </svg>

                  </div>
                </div>
                <div className="footer-right-section-news-network-items">
                  <div className="footer-right-section-news-network-items-logo">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_419_1870)">
                        <path d="M20.7073 0.614502H8.97438C4.48952 0.614502 0.84082 4.2632 0.84082 8.74806V20.4809C0.84082 24.9658 4.48952 28.6145 8.97438 28.6145H20.7073C25.1921 28.6145 28.8408 24.9658 28.8408 20.481V8.74806C28.8408 4.2632 25.1921 0.614502 20.7073 0.614502ZM26.6533 20.4809C26.6533 23.7596 23.9859 26.427 20.7073 26.427H8.97438C5.6957 26.427 3.02832 23.7596 3.02832 20.481V8.74806C3.02832 5.46938 5.6957 2.802 8.97438 2.802H20.7073C23.9859 2.802 26.6533 5.46938 26.6533 8.74806V20.4809Z" fill="white" />
                        <path d="M14.3408 6.6145C10.2053 6.6145 6.84082 9.97896 6.84082 14.1145C6.84082 18.25 10.2053 21.6145 14.3408 21.6145C18.4764 21.6145 21.8408 18.25 21.8408 14.1145C21.8408 9.97896 18.4764 6.6145 14.3408 6.6145ZM14.3408 19.4406C11.404 19.4406 9.01473 17.0513 9.01473 14.1145C9.01473 11.1777 11.404 8.78841 14.3408 8.78841C17.2776 8.78841 19.6669 11.1777 19.6669 14.1145C19.6669 17.0513 17.2776 19.4406 14.3408 19.4406Z" fill="white" />
                        <path d="M22.8408 7.6145C23.3931 7.6145 23.8408 7.16679 23.8408 6.6145C23.8408 6.06222 23.3931 5.6145 22.8408 5.6145C22.2885 5.6145 21.8408 6.06222 21.8408 6.6145C21.8408 7.16679 22.2885 7.6145 22.8408 7.6145Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_419_1870">
                          <rect width="28" height="28" fill="white" transform="translate(0.84082 0.614502)" />
                        </clipPath>
                      </defs>
                    </svg>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
    </footer>
  )
}
