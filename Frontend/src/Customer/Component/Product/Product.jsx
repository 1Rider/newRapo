
'use client'
import React, { useEffect, useState } from 'react'
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Mahindra } from '../Data/CarData/Mahindra'
import ProductCard from './ProductCard'
import './ProductCard.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Category } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../../State/Product/Action'

const sortOptions = [
	{ name: 'Recent Buy', href: '#', current: true },
	{ name: 'Most Popular', href: '#', current: false },
	{ name: 'Best Rating', href: '#', current: false },
	{ name: 'Newest', href: '#', current: false },
	{ name: 'Price: Low to High', href: '#', current: false },
	{ name: 'Price: High to Low', href: '#', current: false },
]

const filters = [
	{
		id: 'color',
		name: 'Color',
		options: [
			{ value: 'white', label: 'White', checked: false },
			{ value: 'black', label: 'Black', checked: false },
			{ value: 'blue', label: 'Blue', checked: false },
			{ value: 'brown', label: 'Brown', checked: false },
			{ value: 'green', label: 'Green', checked: false },
			{ value: 'purple', label: 'Purple', checked: false },
		],
	},
	{
		id: 'category',
		name: 'Category',
		options: [
			{ value: 'new-arrivals', label: 'New Arrivals', checked: false },
			{ value: 'sale', label: 'Sale', checked: false },
			{ value: 'travel', label: 'Travel', checked: false },
			{ value: 'organization', label: 'Organization', checked: false },
			{ value: 'accessories', label: 'Accessories', checked: false },
		],
	},
	{
		id: 'size',
		name: 'Size',
		options: [
			{ value: '2l', label: '2L', checked: false },
			{ value: '6l', label: '6L', checked: false },
			{ value: '12l', label: '12L', checked: false },
			{ value: '18l', label: '18L', checked: false },
			{ value: '20l', label: '20L', checked: false },
			{ value: '40l', label: '40L', checked: false },
		],
	},
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Product() {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
	const location = useLocation();
	const navigate = useNavigate();
	const param = useParams();

	const decodedQueryString = decodeURIComponent(location.search);
	const searchParams = new URLSearchParams(decodedQueryString);
	const colorValue = searchParams.get("color");
	const sizeValue = searchParams.get("size");
	const priceValue = searchParams.get("price");
	const discount = searchParams.get("discount");
	const sortValue = searchParams.get("sort");
	const pageNumber = searchParams.get("page") || 1;
	const stock = searchParams.get("stock");
	const dispatch = useDispatch();
	const { products } = useSelector(store => store);


	const handleFilter = (value, sectionId) => {
		const searchParams = new URLSearchParams(location.search);
		let filterValue = searchParams.getAll(sectionId);
		if (filterValue.length > 0 && filterValue[0].split(',').includes(value)) {
			filterValue = filterValue[0].split(",").filter((item) => item !== value);

		} else {
			filterValue.push(value)


		}
		if (filterValue.length == 0) {
			searchParams.delete(sectionId);
		}


		if (filterValue.length > 0) {
			searchParams.set(sectionId, filterValue.join(","));

		}
		const query = searchParams.toString();
		navigate({ search: `?${query}` })


	}

	useEffect(() => {
		const [minPrice, maxPrice] = priceValue === null ? [0, 0] : priceValue.split("-").map(Number);

		const data = {
			Category: param.lavelThree,
			colors: colorValue || [],
			sizes: sizeValue || [],
			minPrice,
			maxPrice,
			minDiscount: discount || 0,
			sort: sortValue || "price_low",
			pageNumber: pageNumber - 1,
			pageSize: 10,
			stock: stock
		}
		dispatch(findProducts(data))
	}, [param.lavelThree,
		//colorValue,
		//sizeValue,
		//priceValue,
		//discount,
		//sortValue,
		//pageNumber,
		//stock
	])

	return (
		//		<div className="bg-white">
		//			<div>
		//				{/* Mobile filter dialog */}
		//				<Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
		//					<DialogBackdrop
		//						transition
		//						className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />
		//					<div className="fixed inset-0 z-40 flex">
		//						<DialogPanel
		//							transition
		//							className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
		//						>
		//							<div className="flex items-center justify-between px-4">
		//								<h2 className="text-lg font-medium text-gray-900">Filters</h2>
		//								<button
		//									type="button"
		//									onClick={() => setMobileFiltersOpen(false)}
		//									className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
		//								>
		//									<span className="sr-only">Close menu</span>
		//									<XMarkIcon aria-hidden="true" className="h-6 w-6" />
		//								</button>
		//							</div>
		//
		//							{/* Filters */}
		//							<form className="mt-4 border-t border-gray-200">
		//
		//
		//								{filters.map((section) => (
		//									<Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
		//										<h3 className="-mx-2 -my-3 flow-root">
		//											<DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
		//												<span className="font-medium text-gray-900">{section.name}</span>
		//												<span className="ml-6 flex items-center">
		//													<PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
		//													<MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
		//												</span>
		//											</DisclosureButton>
		//										</h3>
		//										<DisclosurePanel className="pt-6">
		//											<div className="space-y-6">
		//												{section.options.map((option, optionIdx) => (
		//													<div key={option.value} className="flex items-center">
		//														<input
		//															onClick={() => handleFilter(option.value, section.id)}
		//															defaultValue={option.value}
		//															defaultChecked={option.checked}
		//															id={`filter-mobile-${section.id}-${optionIdx}`}
		//															name={`${section.id}[]`}
		//															type="checkbox"
		//															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
		//														/>
		//														<label
		//															htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
		//															className="ml-3 min-w-0 flex-1 text-gray-500"
		//														>
		//															{option.label}
		//														</label>
		//													</div>
		//												))}
		//											</div>
		//										</DisclosurePanel>
		//									</Disclosure>
		//								))}
		//							</form>
		//						</DialogPanel>
		//					</div>
		//				</Dialog>
		//
		//				<main className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-2">
		//					<div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-20">
		//						<h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
		//
		//						<div className="flex items-center">
		//							<Menu as="div" className="relative inline-block text-left">
		//								<div>
		//									<MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
		//										Sort
		//										<ChevronDownIcon
		//											aria-hidden="true"
		//											className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
		//										/>
		//									</MenuButton>
		//								</div>
		//
		//								<MenuItems
		//									transition
		//									className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
		//								>
		//									<div className="py-1">
		//										{sortOptions.map((option) => (
		//											<MenuItem key={option.name}>
		//												<a
		//													href={option.href}
		//													className={classNames(
		//														option.current ? 'font-medium text-gray-900' : 'text-gray-500',
		//														'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
		//													)}
		//												>
		//													{option.name}
		//												</a>
		//											</MenuItem>
		//										))}
		//									</div>
		//								</MenuItems>
		//							</Menu>
		//
		//							<button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
		//								<span className="sr-only">View grid</span>
		//								<Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
		//							</button>
		//							<button
		//								type="button"
		//								onClick={() => setMobileFiltersOpen(true)}
		//								className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
		//							>
		//								<span className="sr-only">Filters</span>
		//								<FunnelIcon aria-hidden="true" className="h-5 w-5" />
		//							</button>
		//						</div>
		//					</div>
		//
		//					<section aria-labelledby="products-heading" className="pb-24 pt-6">
		//						<h2 id="products-heading" className="sr-only">
		//							Products
		//						</h2>
		//
		//						<div className="grid grid-cols-1 gap-x-1 gap-y-1 lg:grid-cols-4">
		//							{/* Filters */}
		//
		//							<form className="hidden lg:block">
		//								<span><strong>Filters   🔍</strong></span>
		//
		//								{filters.map((section) => (
		//									<Disclosure key={section.id} as="div" className="border-b border-gray-200 py-8">
		//										<h3 className="-my-3 flow-root">
		//											<DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
		//												<span className="font-medium text-gray-900">{section.name}</span>
		//												<span className="ml-6 flex items-center">
		//													<PlusIcon aria-hidden="true" className="h-5 w-8 group-data-[open]:hidden" />
		//													<MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
		//												</span>
		//											</DisclosureButton>
		//										</h3>
		//										<DisclosurePanel className="pt-6">
		//											<div className="space-y-4">
		//												{section.options.map((option, optionIdx) => (
		//													<div key={option.value} className="flex items-center">
		//														<input
		//															onClick={() => handleFilter(option.value, section.id)}
		//															defaultValue={option.value}
		//															defaultChecked={option.checked}
		//															id={`filter-${section.id}-${optionIdx}`}
		//															name={`${section.id}[]`}
		//															type="checkbox"
		//															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
		//														/>
		//														<label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
		//															{option.label}
		//														</label>
		//													</div>
		//												))}
		//											</div>
		//										</DisclosurePanel>
		//									</Disclosure>
		//								))}
		//							</form>
		//						</div>
		//					</section>
		//				</main>
		//			</div>
		//		</div>
		//		<div className="flex flex-warp ">
		//
		//			<div className='flex flex-warp justify-content-center'>
		//				{products.products?.content?.map((item) => (<ProductCard item={item}></ProductCard>))}
		//			</div>
		//
		//		</div>

		<div className="flex flex-wrap justify-center gap-4 p-4 mt-6">
			<div className="flex flex-wrap justify-center w-full">
				{products.products?.content?.map((item) => (
					<div className="w-full w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2">
						<ProductCard item={item} />
					</div>
				))}
			</div>
		</div>
	)
}

