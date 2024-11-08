
import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import Slider from 'react-slick';
import './HomeSectionCarosul.css';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../../../State/Cart/Action';
import { useDispatch } from 'react-redux';


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
	const dispatch = useDispatch();

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
		<div className="slider-container w-full mt-[40px] px-4" >
			<h2 className='text-xl font-bold m-3 mt-[-30px]'>Product Category</h2>
			<Slider {...settings}>
				{item?.map(product => (
					<div
						key={product._id}
						className="slide-item"

					>
						<img src="https://img.freepik.com/premium-photo/colorful-image-rainbow-colored-peacock_1282123-404.jpg" alt={product.model} className="product-image"
							onClick={() => navigate(`/product/${product?._id}`)}
						/>
						<span className='flex flex-warp justify-between  mt-2.5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-3 2xl:mx-4' >
							<p className=' text-sm p-0 flex '>{product.brand} </p>
							<span className='md:pl-8 text-xl sm:text-base text-lime-500 font-bold ' >₹{product.discountedPrice}
								{/*<span className='text-md mx-2 line-through opacity-80 '>₹{product.price}</span>*/}
							</span>
						</span>

						<div className="buttons flex justify-center p-2 ">
							<button
								onClick={() => handleAddToCart(product._id)}
								className="w-full bg-blue-500 text-white font-semibold py-0.5 md:py-1 lg:py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out
    hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-center"
							>
								Buy
							</button>
						</div>
					</div>

				))}
			</Slider>
		</div>
	);
};

export default HomeSectionCarosul;






{/*<button

								className="bg-blue-400 mx-0.5 m-2 text-white font-semibold py-0.5 px-0.5 rounded-lg shadow-md transition-transform transform duration-300 ease-in-out 
                 hover:bg-blue-600 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
							>
								+ Add
							</button>*/}