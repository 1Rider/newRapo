'use client'

import React, { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { Mahindra } from '../Data/CarData/Mahindra.jsx'
import HomeSectionCarosul from '../HomeSectionCarosul/HomeSectionCarosul'
import { HomeCard } from '../HomeSectionCard/HomeCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductById } from '../../../State/Product/Action.jsx'
import { addItemToCart } from '../../../State/Cart/Action.jsx'
const product = {
	name: 'Tata Altroz | 2024',
	price: '$19,000',
	href: '#',
	breadcrumbs: [
		{ id: 1, name: 'Men', href: '#' },
		{ id: 2, name: 'Clothing', href: '#' },
	],
	images: [
		{
			src: 'https://images.carandbike.com/car-images/large/tata/altroz/tata-altroz.jpg',
			alt: 'Tata Altroz | 2024',
		},
		{
			src: 'https://images.carandbike.com/car-images/large/tata/altroz/tata-altroz.jpg',
			alt: 'Tata Altroz | 2024.',
		},
		{
			src: 'https://images.carandbike.com/car-images/large/tata/altroz/tata-altroz.jpg',
			alt: 'Tata Altroz | 2024',
		},
		{
			src: 'https://images.carandbike.com/car-images/large/tata/altroz/tata-altroz.jpg',
			alt: 'Tata Altroz | 2024.',
		},
	],
	colors: [
		{ name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
		{ name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
		{ name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
	],
	sizes: [
		{ name: 'XXS', inStock: false },
		{ name: 'XS', inStock: true },
		{ name: 'S', inStock: true },

	],
	description:
		'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
	highlights: [
		'Hand cut and sewn locally',
		'Dyed with our proprietary colors',
		'Pre-washed & pre-shrunk',
		'Ultra-soft 100% cotton',
	],
	details:
		'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
	const [selectedColor, setSelectedColor] = useState(product.colors[0])
	const [selectedSize, setSelectedSize] = useState(product.sizes[2])
	const navigate = useNavigate();
	const params = useParams();
	const dispatch = useDispatch();
	const { products } = useSelector(store => store);


	useEffect(() => {
		const data = { productId: params.productId }
		dispatch(findProductById(data))
	}, [params.productId])



	const handleAddToCart = () => {
		const data = { productId: params.productId, size: "xl" }
		dispatch(addItemToCart(data))
		navigate("/cart")
	}


	return (
		<div className="bg-white mt-10">
			<div className="pt-6">
				<nav aria-label="Breadcrumb">
					<ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
						{product.breadcrumbs.map((breadcrumb) => (
							<li key={breadcrumb.id}>
								<div className="flex items-center">
									<a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
										Category
										{/*{breadcrumb.name}*/}
									</a>
									<svg
										fill="currentColor"
										width={16}
										height={20}
										viewBox="0 0 16 20"
										aria-hidden="true"
										className="h-5 w-4 text-gray-300"
									>
										<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
									</svg>
								</div>
							</li>
						))}
						<li className="text-sm">
							<a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
								{product.name}
							</a>
						</li>
					</ol>
				</nav>

				<section className=' grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 px-4 pt-10'>

					{/* Image gallery */}
					<div className="flex flex-col items-center">
						<div className="
						 h-full
						 overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] ">
							<img
								alt={products.product?.name}
								src="https://img.freepik.com/premium-photo/colorful-image-rainbow-colored-peacock_1282123-404.jpg"
								//{products.product?.imageUrl}
								className="h-full w-full object-cover object-center"
							/>
						</div>

						<div className="flex flex-warp space-x-5 justify-center">

							{product.images.map((item) => (
								<div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
									<img
										alt={item.alt}
										src="https://img.freepik.com/premium-photo/colorful-image-rainbow-colored-peacock_1282123-404.jpg"
										className="h-full w-full object-cover object-center"
									/>
								</div>
							))}

						</div>
					</div>

					{/* Product info */}
					<div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-10 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-10">
						<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
							<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{products.product?.brand}</h1>
						</div>

						{/* Options */}
						<div className="mt-4 lg:row-span-3 lg:mt-0">
							<p className="text-2xl  tracking-tight text-green-400 size-29">₹ {products.product?.discountedPrice}
								<del className='mx-8 text-gray-500 opacity-50'>₹ {products.product?.price}</del>
							</p>

							{/* Reviews */}
							<div className="mt-6">
								<h3 className="sr-only">{products.product?.reviews}</h3>
								<div className="flex items-center">
									<div className="flex items-center">
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												aria-hidden="true"
												className={classNames(
													reviews.average > rating ? 'text-gray-1000' : 'text-gray-300',
													'h-6 w-6 flex-shrink-0',
												)}
											/>
										))}
									</div>

									<a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
										{products.product?.reviews} reviews
									</a>
								</div>
							</div>

							<form className="mt-10">

								<div className="mt-10">
									<p className='sub-heading'>Highlights</p>

									<div className="mt-4">
										<ul role="list" className="list-disc space-y-2 pl-4 text-sm">
											{product.highlights.map((highlight) => (
												<li key={highlight} className="text-gray-400">
													<span className="text-gray-600">{highlight}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div>
									<button
										onClick={() => handleAddToCart()}

										className="mt-10 flex w-full items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-indigo-500 "
									>
										Buy Now
									</button>

									{/*<button
										type="submit"
										onClick={() => handleAddToCart()}
										className="mt-10 flex w-full items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-indigo-500 "
									>
										Add to bag
									</button>*/}

								</div>
							</form>
						</div>

						<div className="py-5 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-10 lg:pr-8 lg:pt-6">
							{/* Description and details */}
							<div>
								<h3 className="sr-only">Description</h3>

								<div className="space-y-4">
									<p className="text-base text-gray-900">{products.product?.description}</p>
								</div>
							</div>



							<div className="mt-10">
								<h2 className="text-sm font-medium text-gray-900">Details</h2>

								<div className="mt-4 space-y-3">
									<p className="text-sm text-gray-600">{product.details}</p>
								</div>
							</div>
						</div>
					</div>

				</section>


				{/*Similer Products*/}
				{/*<section>

					<div className='flex flex-wrap justify-center m-3'>
						{Mahindra.map((item) => <HomeCard data={item} key={item} />)}</div>
				</section>*/}
			</div >
		</div >
	)
}
