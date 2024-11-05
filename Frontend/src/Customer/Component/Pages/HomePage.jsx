import React, { useEffect } from 'react'
import MainCarousel from '../HomeCarosul/MainCarousel'
import HomeSectionCarosul from '../HomeSectionCarosul/HomeSectionCarosul';
import { Tata } from '../Data/CarData/Tata';
import { Tesla } from '../Data/CarData/Tesla';
import { Toyota } from '../Data/CarData/Toyota';
import { MarutiSuzuki } from '../Data/CarData/MarutiSuzuki';
import { Mercedes } from '../Data/CarData/Mercedes';
import { Mahindra } from '../Data/CarData/Mahindra';
import SliderComponent from '../carosul';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from '../../../State/Product/Action';






const HomePage = () => {

	const { products } = useSelector(store => store);
	const dispatch = useDispatch();
	useEffect(() => {
		const minPrice = 0;
		const maxPrice = 0;



		const data = {
			Category: "",
			colors: [],
			sizes: [],
			minPrice,
			maxPrice,
			minDiscount: 0,
			sort: "price_low",
			pageNumber: "",
			pageSize: 10,
			stock: ""
		}
		dispatch(findProducts(data))
	}, [1])


	return (
		<div>
			<MainCarousel></MainCarousel>
			<div>
				<HomeSectionCarosul item={products.products?.content}></HomeSectionCarosul>
				<HomeSectionCarosul item={products.products?.content}></HomeSectionCarosul>
				<HomeSectionCarosul item={products.products?.content}></HomeSectionCarosul>
				<HomeSectionCarosul item={products.products?.content}></HomeSectionCarosul>

			</div>
		</div>
	)
}

export default HomePage