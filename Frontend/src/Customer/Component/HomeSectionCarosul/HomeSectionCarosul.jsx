
import React, { act, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import Slider from 'react-slick';
import './HomeSectionCarosul.css';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../../../State/Cart/Action';

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

const HomeSectionCarosul = ({ item }) => {
	const navigate = useNavigate();

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 2690,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			}
		]
	};



	const handleAddToCart = (id) => {
		const data = { productId: id, size: "xl" }
		dispatch(addItemToCart(data))
		navigate("/cart")
	}

	return (
		<div className="slider-container">
			<h2 className='text-2xl font-bold m-3 mt-[-60px]'>Product Category</h2>
			<Slider {...settings}>
				{item?.map(product => (
					<div key={product._id} className="slide-item" onClick={() => navigate(`/product/${product?._id}`)}>
						<img src="https://img.freepik.com/premium-photo/colorful-image-rainbow-colored-peacock_1282123-404.jpg" alt={product.model} className="product-image" />
						<span className='flex flex-warp' >
							<h6 className='text-sm mr-6 mx-2'>{product.brand}</h6>

							<p className='text-md text-lime-400 font-bold mx-2' >{product.discountedPrice} </p>
							<del className='text-md mx-2'>{product.price}</del>
						</span>
						<div className='buttons flex flex-col sm:flex-row justify-between'>
							<button
								onClick={() => handleAddToCart(product._id)}
								className="bg-blue-400 mx-2 m-2 text-white font-semibold py-1 px-2 rounded-lg shadow-md transition-transform transform duration-300 ease-in-out 
                 hover:bg-blue-600 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
							>
								BuyNow
							</button>

							{/*<button

								className="bg-blue-400 mx-2 m-2 text-white font-semibold py-1 px-2 rounded-lg shadow-md transition-transform transform duration-300 ease-in-out 
                 hover:bg-blue-600 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
							>
								+ Add
							</button>*/}

						</div>
					</div>

				))}
			</Slider>
		</div>
	);
};

export default HomeSectionCarosul;
