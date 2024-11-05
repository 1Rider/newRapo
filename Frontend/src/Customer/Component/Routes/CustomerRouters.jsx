
import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Product from '../Product/Product'
import ProductDetails from '../ProductDetails/ProductDetails'
import Checkout from '../Checkout/Checkout'
import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import LoginForm from '../../auth/login.jsx'
import RegisterForm from '../../auth/register.jsx'
import ThankYouPage from '../Checkout/Thankyou.jsx'



const CustomerRouters = () => {

	return (
		<div >

			<div><div className='z-40 ' style={{ position: 'absolute', width: '100%' }}>

				<Navigation></Navigation>

			</div></div>
			<div className='z-20 homeSection bg-gray-50' style={{ width: '100%' }}>
				<Routes>

					<Route path='/login' element={<LoginForm></LoginForm>} ></Route>
					<Route path='/register' element={<RegisterForm></RegisterForm>} ></Route>
					<Route path='/' element={<HomePage></HomePage>}></Route>
					<Route path='/cart' element={<Cart></Cart>}></Route>
					<Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product></Product>}></Route>
					<Route path='/:category' element={<Product></Product>}></Route>
					<Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
					<Route path="/checkout" element={<Checkout></Checkout>}></Route>
					<Route path="/thankyou" element={<ThankYouPage></ThankYouPage>}></Route>




				</Routes>
			</div>
			<div><Footer></Footer></div>
		</div>
	)
}

export default CustomerRouters