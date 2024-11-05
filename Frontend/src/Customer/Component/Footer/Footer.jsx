//import React from 'react'
//import { Grid } from "@mui/material"
//
//const Footer = () => {
//
//	return <div className="Footer">
//
//		<div className="box-container">
//
//			<div className="box">
//				<div className="heading">About Us</div>
//				<div className="sub-heading">About Us</div>
//				<div className="sub-heading" >About Us</div>
//				<div className="sub-heading" >About Us</div>
//				<div className="sub-heading" >About Us</div>
//			</div>
//
//			<div className="box">
//				<div className="heading">About Us</div>
//				<div className="sub-heading">About Us</div>
//				<div className="sub-heading" >About Us</div>
//				<div className="sub-heading" >About Us</div>
//				<div className="sub-heading" >About Us</div>
//			</div>
//
//			<div className="box">
//				<div className="heading">About Us</div>
//				<div className="sub-heading">About Us</div>
//				<div className="sub-heading" >About Us</div>
//				<div className="sub-heading" >About Us</div>
//				<div className="sub-heading" >About Us</div>
//			</div>
//
//			<div className="box">
//				<div className="heading">About Us</div>
//				<div className="sub-heading">About Us</div>
//				<div className="sub-heading" >About Us</div>
//				<div className="sub-heading" >About Us</div>
//				<div className="sub-heading" >About Us</div>
//			</div>
//
//		</div>
//
//		<center>
//			all Copywrite reserved by wholesaler
//			<div>	August | 2024-25</div>
//		</center>
//	</div>
//}
//export default Footer;
//





//import React from 'react';
//
//const Footer = () => {
//	return (
//		<footer className="bg-gray-900 text-white py-12">
//			<div className="container mx-auto flex flex-wrap justify-between px-6">
//				{/* About Section */}
//				<div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
//					<h2 className="text-xl font-bold mb-4 text-orange-400">About Us</h2>
//					<p className="text-sm">
//						We are a leading e-commerce website offering a wide range of products and the best shopping experience.
//					</p>
//				</div>
//
//				{/* Quick Links */}
//				<div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
//					<h2 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h2>
//					<ul className="space-y-2 text-sm">
//						<li><a href="/" className="hover:text-orange-400">Home</a></li>
//						<li><a href="/shop" className="hover:text-orange-400">Shop</a></li>
//						<li><a href="/about" className="hover:text-orange-400">About</a></li>
//						<li><a href="/contact" className="hover:text-orange-400">Contact Us</a></li>
//						<li><a href="/faq" className="hover:text-orange-400">FAQ</a></li>
//					</ul>
//				</div>
//
//				{/* Contact Information */}
//				<div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
//					<h2 className="text-xl font-bold mb-4 text-orange-400">Contact Us</h2>
//					<p className="text-sm">
//						<i className="fas fa-map-marker-alt"></i> 123 E-commerce St, Shopping City, SC 12345
//					</p>
//					<p className="text-sm mt-2">
//						<i className="fas fa-phone-alt"></i> +1 (234) 567-8900
//					</p>
//					<p className="text-sm mt-2">
//						<i className="fas fa-envelope"></i> support@example.com
//					</p>
//				</div>
//
//				{/* Social Media Links */}
//				<div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
//					<h2 className="text-xl font-bold mb-4 text-orange-400">Follow Us</h2>
//					<div className="flex space-x-4">
//						<a href="#" className="hover:text-orange-400"><i className="fab fa-facebook-f text-xl"></i></a>
//						<a href="#" className="hover:text-orange-400"><i className="fab fa-twitter text-xl"></i></a>
//						<a href="#" className="hover:text-orange-400"><i className="fab fa-instagram text-xl"></i></a>
//						<a href="#" className="hover:text-orange-400"><i className="fab fa-linkedin-in text-xl"></i></a>
//					</div>
//				</div>
//			</div>
//
//			{/* Copyright */}
//			<div className="bg-gray-800 text-gray-400 text-center py-4 mt-6">
//				<p>&copy; 2024 E-commerce Website. All rights reserved.</p>
//			</div>
//		</footer>
//	);
//};
//
//export default Footer;











import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-gray-300 py-6 my-6">
			<div className="container mx-auto text-center">
				{/* Links Section */}
				<div className="mb-4">
					<a href="/" className="mx-2 hover:text-white">Home</a>
					<a href="/shop" className="mx-2 hover:text-white">Shop</a>
					<a href="/about" className="mx-2 hover:text-white">About</a>
					<a href="/contact" className="mx-2 hover:text-white">Contact Us</a>
				</div>

				{/* Copyright */}
				<p className="text-sm">
					&copy; 2024 wholesaler. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;