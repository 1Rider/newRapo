//import React from 'react';
//
//const ThankYouPage = () => {
//	return (
//		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//			{/* Animated tick icon */}
//			<div className="bg-green-100 rounded-full p-6 mb-6 animate-bounce-in">
//				<svg
//					xmlns="http://www.w3.org/2000/svg"
//					className="h-32 w-32 text-green-600"
//					viewBox="0 0 20 20"
//					fill="currentColor"
//				>
//					<path
//						fillRule="evenodd"
//						d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
//						clipRule="evenodd"
//					/>
//				</svg>
//			</div>
//			{/* Animated text */}
//			<h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">Thank You for Your Order!</h1>
//			<p className="text-lg text-gray-600 text-center animate-fade-in delay-100">
//				We appreciate your purchase. Your order is being processed and will be shipped shortly.
//			</p>
//		</div>
//	);
//};
//
//export default ThankYouPage;
//
//


import React from 'react';

const ThankYouPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
			{/* Animated tick icon */}
			<div className="bg-green-100 rounded-full p-6 mb-6 animate-bounce-in">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-32 w-32 text-green-600"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			{/* Animated text */}
			<h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">Thank You for Your Order!</h1>
			<p className="text-lg text-gray-600 text-center animate-fade-in delay-100">
				We appreciate your purchase. Your order is being processed and will be shipped shortly.
			</p>
		</div>
	);
};

export default ThankYouPage;