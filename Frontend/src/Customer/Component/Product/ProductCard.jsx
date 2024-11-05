//import React from 'react'
//import './ProductCard.css'
//import { useNavigate } from 'react-router-dom'
//const ProductCard = ({ item }) => {
//	console.log(item.imageUrl);
//	const navigate = useNavigate();
//	return (
//		<div onClick={() => navigate(`/product/${item?._id}`)} className='productCard w-[13rem] m-3 transition-all cursor-pointer'>
//			<div className='h-[18rem]'>
//				<img className="h-full w-full object-cover" src={item.imageUrl} alt={item.name} />
//			</div>
//			<div className='textPart bg-white p-2'>
//				<div>
//					<p className='font-bold opacity-60'>{item.color}</p>
//					<p>{item.brand}</p>
//				</div>
//				<div className='pricing'>
//					<p className='font-semibold'> ₹{item.discountedPrice} </p>
//					<p className='px-2 line-through opacity-40'>₹{item.price}</p>
//					<p className='text-green-600 font-semibold'>{item.discountPersent}% off</p>
//				</div>
//			</div>
//		</div>
//	);
//};
//
//export default ProductCard



//
//import React from 'react';
//import { useNavigate } from 'react-router-dom';
//
//const ProductCard = ({ item }) => {
//	const navigate = useNavigate();
//
//	return (
//		<div
//			onClick={() => navigate(`/product/${item?._id}`)}
//			className="productCard w-full sm:w-[18rem] m-3 transition-all cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-2"
//		>
//			<div className="h-[15rem] md:h-[18rem]">
//				<img
//					className="h-full w-full object-cover"
//					src={item.imageUrl}
//					alt={item.name}
//				/>
//			</div>
//			<div className="textPart p-4 transition-transform duration-300 ease-out hover:-translate-y-2">
//				<div className="mb-2">
//					<p className="font-bold text-gray-700">{item.color}</p>
//					<p className="text-gray-500">{item.brand}</p>
//				</div>
//				<div className="pricing flex items-center mt-2">
//					<p className="font-semibold text-lg text-black">₹{item.discountedPrice}</p>
//					<p className="px-2 line-through text-gray-400">₹{item.price}</p>
//					<p className="text-green-600 font-semibold ml-auto">
//						{item.discountPersent}% off
//					</p>
//				</div>
//			</div>
//		</div>
//	);
//};
//
//export default ProductCard;



//
//import React from 'react';
//import { useNavigate } from 'react-router-dom';
//
//const ProductCard = ({ item }) => {
//	const navigate = useNavigate();
//
//	return (
//		<div
//			onClick={() => navigate(`/product/${item?._id}`)}
//			className="productCard w-[calc(33.33%-8px)] sm:w-[calc(25%-16px)] lg:w-[calc(20%-24px)] m-[2px] sm:m-[4px] lg:m-[6px] transition-all cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-2"
//		>
//			<div className="h-[15rem] md:h-[18rem]">
//				<img
//					className="h-full w-full object-cover"
//					src={item.imageUrl}
//					alt={item.name}
//				/>
//			</div>
//			<div className="textPart p-4 transition-transform duration-300 ease-out hover:-translate-y-2">
//				<div className="mb-2">
//					<p className="font-bold text-gray-700">{item.color}</p>
//					<p className="text-gray-500">{item.brand}</p>
//				</div>
//				<div className="pricing flex items-center mt-2">
//					<p className="font-semibold text-lg text-black">₹{item.discountedPrice}</p>
//					<p className="px-2 line-through text-gray-400">₹{item.price}</p>
//					<p className="text-green-600 font-semibold ml-auto">
//						{item.discountPersent}% off
//					</p>
//				</div>
//			</div>
//		</div>
//	);
//};
//
//export default ProductCard;




import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
	const navigate = useNavigate();

	return (
		<div
			onClick={() => navigate(`/product/${item?._id}`)}
			className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
		>
			<div className="h-[15rem] md:h-[18rem]">
				<img
					className="h-full w-full object-cover"
					src="https://img.freepik.com/premium-photo/colorful-image-rainbow-colored-peacock_1282123-404.jpg"
					alt={item.name}
				/>
			</div>
			<div className="textPart p-4 transition-transform duration-300 ease-out hover:-translate-y-2">
				<div className="mb-2">
					<p className="font-bold text-gray-700">{item.color}</p>
					<p className="text-gray-500">{item.brand}</p>
				</div>
				<div className="pricing flex items-center mt-2">
					<p className="font-semibold text-lg text-black">₹{item.discountedPrice}</p>
					<p className="px-2 line-through text-gray-400">₹{item.price}</p>
					<p className="text-green-600 font-semibold ml-auto">
						{item.discountPersent}% off
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;