// components/Categories.js
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
  const data = [
    {
      name: "Гибкая эндоскопия111",
      image: "/Gibkaya.png"
    },
    {
      name: "Мобильные кабинеты",
      image: "/Mobile.png"
    },
    {
      name: "Оториноларин-гология",
      image: "/Otorinorin.png"
    },
    {
      name: "Реанимация",
      image: "/Reanimation.png"
    },
    {
      name: "Акушерство и гинекология",
      image: "/Obstetrics.png"
    },
    {
      name: "Скорая помощь",
      image: "/Skoraya.png"
    },
    {
      name: "Стерилизация",
      image: "/Sterilization.png"
    },
    {
      name: "Физиотерапия и реабилитация",
      image: "/Physiotherapy.png"
    },
    {
      name: "Гибкая эндоскопия",
      image: "/Gibkaya.png"
    },
    {
      name: "Мобильные кабинеты",
      image: "/Mobile.png"
    },
    {
      name: "Оториноларин-гология",
      image: "/Otorinorin.png"
    },
    {
      name: "Реанимация",
      image: "/Reanimation.png"
    },
    {
      name: "Акушерство и гинекология",
      image: "/Obstetrics.png"
    },
    {
      name: "Скорая помощь",
      image: "/Skoraya.png"
    },
    {
      name: "Стерилизация",
      image: "/Sterilization.png"
    },
    {
      name: "Физиотерапия и реабилитация",
      image: "/Physiotherapy.png"
    },
    {
      name: "Гибкая эндоскопия",
      image: "/Gibkaya.png"
    },
    {
      name: "Мобильные кабинеты",
      image: "/Mobile.png"
    },
    {
      name: "Оториноларин-гология",
      image: "/Otorinorin.png"
    },
    {
      name: "Реанимация",
      image: "/Reanimation.png"
    },
    {
      name: "Акушерство и гинекология",
      image: "/Obstetrics.png"
    },
    {
      name: "Скорая помощь",
      image: "/Skoraya.png"
    },
    {
      name: "Стерилизация",
      image: "/Sterilization.png"
    },
    {
      name: "Физиотерапия и реабилитация222",
      image: "/Physiotherapy.png"
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isStopped, setIsStopped] = useState(false);

  const handleMoveLeft = () => {
    let lenght;
    data.filter((res , i)=>{
      if(i == 0){
        lenght = 0
      }
    })
    if (lenght == startIndex) {
    }
    else {
    setStartIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    setIsStopped(false);
    }
  };

  const handleMoveRight = () => {
    const lastItem = data.length - 8;
    if (lastItem == startIndex) {
     }
     else{
             setStartIndex((prevIndex) => (prevIndex + 1) % data.length);
             setIsStopped(false);
     }
  };

  const handleRotate = () => {   
    setStartIndex((prevIndex) => (prevIndex + 1) % data.length);
      setIsStopped(true);
  };

  return (
    <div className={"categories"}>
      <div className={"categories_movement"}>
        <div className={"categories_movement_text"}>Категории товаров</div>
        <div className={"categories_rightleft"}>
          <div className={"categories_rightleft_left"} onClick={handleMoveLeft}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className={"categories_rightleft_right"} onClick={handleMoveRight}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
      <div className={"categories_cards"}>
        {data.slice(startIndex, startIndex + 8).map((category, index) => (
          <div key={index} className={"categories_card"} onClick={handleRotate}>
            <img className={"categories_card_img"} src={category.image} alt={category.name} />
            <div className={"categories_card_text"}>{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
