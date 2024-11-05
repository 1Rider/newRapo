
'use client'
import React, { Fragment, useState, useEffect } from 'react'
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from "../../../State/Auth/Action.jsx"


//const navigation = {
//	categories: [
//		{
//			id: 'women',
//			name: 'Women',
//			featured: [
//				{
//					name: 'New Arrivals',
//					href: '#',
//					imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
//					imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//				},
//				{
//					name: 'Basic Tees',
//					href: '#',
//					imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
//					imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//				},
//			],
//			sections: [
//				{
//					id: 'clothing',
//					name: 'Clothing',
//					items: [
//						{ id: '1', name: 'Tops', href: '#' },
//						{ id: '2', name: 'Dresses', href: '#' },
//						{ id: '3', name: 'Pants', href: '#' },
//						{ id: '4', name: 'Browse All', href: '#' },
//					],
//				},
//				{
//					id: 'accessories',
//					name: 'Accessories',
//					items: [
//						{ id: '11', name: 'Watches', href: '#' },
//						{ id: '12', name: 'Wallets', href: '#' },
//						{ id: '13', name: 'Bags', href: '#' },
//						{ id: '14', name: 'Sunglasses', href: '#' },
//
//					],
//				},
//				{
//					id: 'brands',
//					name: 'Brands',
//					items: [
//						{ id: '21', name: 'Full Nelson', href: '#' },
//						{ id: '22', name: 'My Way', href: '#' },
//						{ id: '23', name: 'Re-Arranged', href: '#' },
//						{ id: '24', name: 'Counterfeit', href: '#' },
//					],
//				},
//			],
//		},
//		{
//			id: 'men',
//			name: 'Men',
//			featured: [
//				{
//					name: 'New Arrivals',
//					href: '#',
//					imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
//					imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
//				},
//				{
//					name: 'Artwork Tees',
//					href: '#',
//					imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
//					imageAlt:
//						'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
//				},
//			],
//			sections: [
//				{
//					id: 'clothing',
//					name: 'Clothing',
//					items: [
//						{ id: '31', name: 'Tops', href: '#' },
//						{ id: '32', name: 'Pants', href: '#' },
//						{ id: '33', name: 'Sweaters', href: '#' },
//						{ id: '34', name: 'Browse All', href: '#' },
//					],
//				},
//				{
//					id: 'accessories',
//					name: 'Accessories',
//					items: [
//						{ id: '41', name: 'Watches', href: '#' },
//						{ id: '42', name: 'Wallets', href: '#' },
//						{ id: '43', name: 'Bags', href: '#' },
//						{ id: '44', name: 'Belts', href: '#' },
//					],
//				},
//				{
//					id: 'brands',
//					name: 'Brands',
//					items: [
//						{ id: '51', name: 'Re-Arranged', href: '#' },
//						{ id: '52', name: 'Counterfeit', href: '#' },
//						{ id: '53', name: 'Full Nelson', href: '#' },
//						{ id: '54', name: 'My Way', href: '#' },
//					],
//				},
//			],
//		},
//	],
//	pages: [
//		{ name: 'Company', href: '#' },
//		{ name: 'Stores', href: '#' },
//	],
//}

export default function Navigation() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const jwt = localStorage.getItem('jwt');
	const { auth } = useSelector(store => store)

	useEffect(() => {
		if (jwt) {
			dispatch(getUser(jwt))
		}
	}, [jwt, auth.jwt])


	const handleCategoryClick = (category, section, item, close) => {
		setOpen(false);
		navigate(`/${category.id}/${section.id}/${item.id}`);
		close();
	}
	const handleClick = (cname) => {
		setOpen(false);
		navigate(`/${cname}`);
		close();
	}

	const handleLogin = () => {
		navigate('/login')
	}

	const handleRegister = () => {
		navigate('/register')
	}




	return (
		<div className="bg-white">
			{/* Mobile menu */}
			<Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
				/>

				<div className="fixed inset-0 z-40 flex">
					<DialogPanel
						transition
						className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
					>
						<div className="flex px-4 pb-2 pt-5">
							<button
								type="button"
								onClick={() => setOpen(false)}
								className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
							>
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="h-6 w-6" />
							</button>
						</div>

						{/* Links */}
						<div className="space-y-6 border-t border-gray-200 px-4 py-6">
							<h1 className='text-2xl font-bold'>Shortcuts</h1>
							<div>
								<button onClick={() => handleClick("FirstCategory")}> FirstCategory</button>
							</div>
							<div>
								<button onClick={() => handleClick("SecondCategory")} > SecondCategory</button>
							</div>
							<div>
								<button onClick={() => handleClick("ThirdCategory")} > ThirdCategory</button>
							</div>
						</div>
					</DialogPanel>
				</div>
			</Dialog>

			<header className="relative bg-white">
				<p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
					Special offers are shown here
				</p>

				<nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="border-b border-gray-200">
						<div className="flex h-16 items-center">
							<button
								type="button"
								onClick={() => setOpen(true)}
								className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
							>
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Open menu</span>
								<Bars3Icon aria-hidden="true" className="h-6 w-6" />
							</button>

							{/* Logo */}
							<div onClick={() => navigate("/")} className="ml-4 flex lg:ml-0">
								<a href="#">

									<img
										alt=""
										src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
										className="w-14"
									/>
								</a>
							</div>

							{/* Flyout menus */}
							<PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
								<div className="flex h-full space-x-8">
									<button onClick={() => handleClick("FirstCategory")}> FirstCategory</button>
									<button onClick={() => handleClick("SecondCategory")} > SecondCategory</button>
									<button onClick={() => handleClick("ThirdCategory")} > ThirdCategory</button>
								</div>
							</PopoverGroup>

							<div className="ml-auto flex items-center">
								{auth.user?.firstName ? (<p>{auth.user?.firstName}</p>) : (<div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
									<p onClick={() => handleLogin()} className="text-sm mx:2 font-medium text-gray-700 hover:text-gray-800">
										Login
									</p>
									<span aria-hidden="true" className="h-6 w-px bg-gray-200" />
									<p onClick={() => handleRegister()} className="text-sm mx-2 font-medium text-gray-700 hover:text-gray-800">
										|	Create account
									</p>
								</div>)}
								{/* Search */}
								<div className="flex lg:ml-6">
									<a href="#" className="p-2 text-gray-400 hover:text-gray-500">
										<span className="sr-only">Search</span>
										<MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
									</a>
								</div>

								{/* Cart */}
								<div className="ml-4 flow-root lg:ml-6 " onClick={() => navigate("/cart")}>
									<a href="#" className="group -m-2 flex items-center p-2">
										<ShoppingBagIcon
											aria-hidden="true"
											className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
										/>
										<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
										<span className="sr-only">items in cart, view bag</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	)
}
