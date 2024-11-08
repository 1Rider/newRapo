import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/Action';
const Cart = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { cart } = useSelector(store => store);
	useEffect(() => {
		dispatch(getCart())
	}, [cart.updateCartItem, cart.removeCartItem])

	return (<>
		<div className='grid lg:grid-cols-3 grid-cols-1 mt-12'>


			<div className='flex flex-wrap justify-center col-span-2'>

				{cart.cart?.cartItems.map((item) => <CartItem key={item._id} item={item}></CartItem>)}

			</div>
			<div className='m-5 mt-1 border shadow pt-10 p-10 bg-white'>
				<center><h2 className='font-bold text-[1.5rem] pb-10'>Product Pricing Details</h2></center>
				<div>
					<div className='font-semibold text-[1.1rem] flex justify-between pb-5 '>
						<p>Price</p>
						<p>{cart.cart?.totalPrice}</p>
					</div>

					<div className='font-semibold text-[1.1rem] flex justify-between pb-5 '>
						<p>Discounte</p>
						<p className='text-green-500'>{cart.cart?.discounte}</p>
					</div>


					<div className='font-semibold text-[1.1rem] flex justify-between pb-5 '>
						<p>Dilevery Charges</p>
						<p>Free</p>
					</div>

					<div className='font-semibold text-[1.4rem] flex justify-between pb-5 '>
						<p>Total Ammount</p>
						<p>{cart.cart?.totalDiscountedPrice}</p>
					</div>
					<button
						onClick={() => navigate("/checkout/?step=2")}
						className="mt-10 flex w-full items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-indigo-500 "
					>
						CHECKOUT
					</button>

				</div>

			</div>


		</div>
	</>
	)
}

export default Cart;