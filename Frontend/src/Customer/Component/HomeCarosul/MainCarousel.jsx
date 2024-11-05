import React from 'react';
//import AliceCarousel from 'react-alice-carousel';
//import 'react-alice-carousel/lib/alice-carousel.css';
import { Carimage } from './CarosulImage.jsx'
//
//function MainCarousel() {
//
//    const items = Carimage.map((item) => <center><img src={item.url} alt='car rent' style={{ width: '90rem', height: '550px' }} /></center>)
//
//    return <AliceCarousel
//        items={items}
//        autoPlay
//        disableButtonsControls
//        autoPlayInterval={1700}
//        infinite
//    />
//};
//
//export default MainCarousel;

import Slider from 'react-slick';
import './MainCarousel.css';

// Custom Arrow components
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '10px' }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
            onClick={onClick}
        />
    );
};

const MainCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4690,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const products = [
        { id: 1, name: 'Product 1', image: 'https://i.ytimg.com/vi/OKZFHo5p4VA/sddefault.jpg' },
        { id: 2, name: 'Product 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s' },
        { id: 3, name: 'Product 3', image: 'https://toolset.com/wp-content/uploads/2021/05/toolset-hero-same-buttons-1.png' },
        { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/300' },
        { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/300' },
        { id: 6, name: 'Product 6', image: 'https://via.placeholder.com/300' }
    ];

    return (
        <div className=' mt-12 '>

            <Slider {...settings}>
                {Carimage.map(product => (
                    <div key={product.id} className="slide-item">
                        <center><img src={product.url} alt='car rent' /></center>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MainCarousel;