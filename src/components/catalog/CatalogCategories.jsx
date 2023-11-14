import React, { useState, useEffect } from 'react';

const Catalog_Categories_Data = [
    {
        svg: (
            <svg width="45" height="44" viewBox="0 0 45 44" fill="none">
                <rect width="45" height="44" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_10_851" transform="matrix(0.00888889 0 0 0.00909091 -0.00666667 0)" />
                    </pattern>
                    <image id="image0_10_851" width="114" height="110" />
                </defs>
            </svg>
        ),
        title: 'Рентгенология и томография',
        child: [
            {
                name: 'Рентгенология'
            },
            {
                name: 'Компьютерная томография'
            },
            {
                name: 'Магнитно-резонансная томография'
            },
            {
                name: 'Стоматологический рентген'
            },
            {
                name: 'Рентгеновские аппараты типа С-дуга'
            },
            {
                name: 'Текстовыделители'
            },
            {
                name: 'Маммография'
            },
        ]
    },
    {
        img: (
           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluLnXO58VtUVVVT0qQtO4yAtD-56W1kFs0g&usqp=CAU'
        ),
        title: 'Гибкая эндоскопия',
        child: [
            {
                name: 'Рентгенология'
            },
            {
                name: 'Компьютерная томография'
            },
            {
                name: 'Магнитно-резонансная томография'
            },
            {
                name: 'Стоматологический рентген'
            },
            {
                name: 'Рентгеновские аппараты типа С-дуга'
            },
            {
                name: 'Текстовыделители'
            },
            {
                name: 'Маммография'
            },
        ]
    },
]

export default function CatalogCategories() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <div className='CatalogCategories'>
            {isLoading ? (
                <p>Loading...</p>
            ) : Catalog_Categories_Data.length > 0 ? (
                Catalog_Categories_Data.map((item, index) => (
                    <div className="CatalogCategories-cards" key={index}>
                        <div className="CatalogCategories-cards-info">
                            <img src={item.img} alt="img" />
                            
                        </div>
                    </div>
                ))
            ) : (
                <p>No data</p>
            )}
        </div>
    );
}
