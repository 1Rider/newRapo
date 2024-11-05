import React, { useEffect } from 'react'
import AddressCard from './AddressCard'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'


const OrderSummary = () => {

	const dispatch = useDispatch();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const orderId = searchParams.get("order_id");
	const navigate = useNavigate();
	const { order } = useSelector(store => store);

	useEffect(() => {
		dispatch(getOrderById(orderId))
		console.log(order, "for address")
	}, [orderId])


	return (
		<div>
			{/*<div>
				<AddressCard></AddressCard>
			</div>*/}
			<div className='justify-center m-12 p-6 '>


				<div className="overflow-x-auto">
					<table className="min-w-full bg-white border border-gray-300">
						<thead>
							<tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
								<th className="py-3 px-6 text-left">Product Name</th>
								<th className="py-3 px-6 text-left">Discounted Price</th>
								<th className="py-3 px-6 text-left">Total Save</th>
								<th className="py-3 px-6 text-left">Total Price</th>
								<th className="py-3 px-6 text-left">You Save</th>

							</tr>
						</thead>
						<tbody className="text-gray-600 text-sm font-light">
							{order.order?.orderItems?.map((item) => (

								<tr key={item} className="border-b border-gray-200 hover:bg-gray-100">
									<td className="py-3 px-6 text-left font-bold text-lg ">{item.product.brand}</td>
									<td className="py-3 px-6 text-left font-bold text-lg ">₹{(item.product.discountedPrice).toFixed(2)} x {item.quantity}</td>
									<td className="py-3 px-6 text-left font-bold text-lg ">₹{(item.quantity * (item.product.price - item.product.discountedPrice)).toFixed(2)}</td>
									<td className="py-3 px-6 text-left font-bold text-lg bg-blue-100">₹{(item.product.discountedPrice * item.quantity).toFixed(2)}</td>
									<td className="py-3 px-6 text-left font-bold text-lg  ">₹{(item.product.price - item.product.discountedPrice).toFixed(2)}</td>

								</tr>


							))}
						</tbody>
					</table>

					<div className='m-5 border shadow pt-10 p-10 bg-white'>
						<center><h2 className='font-bold text-[1.5rem] pb-10'>Product Pricing Details</h2></center>
						<div>
							<div className='font-semibold text-[1.1rem] flex justify-between pb-5 '>
								<p>Price</p>
								<p>{order.order?.totalPrice}		</p>
							</div>

							<div className='font-semibold text-[1.1rem] flex justify-between pb-5 '>
								<p>You Save</p>
								<p className='text-green-500'> {order.order?.totalPrice - order.order?.totalDiscountedPrice} </p>
							</div>


							<div className='font-semibold text-[1.1rem] flex justify-between pb-5 '>
								<p>Dilevery Charges</p>
								<p>Free</p>
							</div>

							<div className='font-semibold text-[1.2rem] flex justify-between pb-5 '>
								<p>Total Payable Ammount</p>
								<p>{order.order?.totalDiscountedPrice}</p>
							</div>


							<div className='font-semibold text-[1.2rem] flex justify-between pb-5 '>
								<p>Payment Option</p>
								<p>Cash On Delivery</p>
							</div>


							<button
								onClick={() => navigate(`/thankyou`)}
								className="mt-10 flex w-full items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-indigo-500 ">
								ORDER
							</button>
							<p className='text-sm'>Remember by clicking this order button means you will agree with our terms and conditions If you don't want then don't proceed</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default OrderSummary