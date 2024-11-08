import React, { useEffect } from 'react'
import AddressCard from './AddressCard'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'
import { removeCartItem } from '../../../State/Cart/Action'

const OrderSummary = () => {

	const dispatch = useDispatch();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const orderId = searchParams.get("order_id");
	const navigate = useNavigate();
	const { order } = useSelector(store => store);

	const handleRemoveCartItem = () => {
		navigate(`/thankyou`);
		const idid = "DELETEALLCARTITEM";
		dispatch(removeCartItem(idid));

	}

	useEffect(() => {
		dispatch(getOrderById(orderId))
		console.log(order, "for address")
	}, [orderId])


	return (
		<div>
			{/*<div>
				<AddressCard></AddressCard>
			</div>*/}
			<div className='justify-center w-full p-4 '>


				<div className="overflow-x-auto">
					<h2 className="font-bold text-2xl md:text-3xl lg:text-4xl pb-8 text-center text-gray-800">
						AUTO GENERATED BILL
					</h2>
					<table className="min-w-full divide-y divide-gray-200">
						<thead>
							<tr className="bg-gray-100 text-gray-700 uppercase text-xs md:text-sm">
								<th className="py-3 px-4 md:px-6 text-left font-medium">Product Name</th>
								<th className="py-3 px-4 md:px-6 text-left font-medium">Discounted Price</th>
								<th className="py-3 px-4 md:px-6 text-left font-medium">Total Price</th>
							</tr>
						</thead>
						<tbody className="text-gray-600 text-xs md:text-sm">
							{order.order?.orderItems?.map((item) => (
								<tr key={item.product.id} className="hover:bg-gray-50 border-b border-gray-200">
									<td className="py-3 px-4 md:px-6 font-semibold">{item.product.brand}</td>
									<td className="py-3 px-4 md:px-6">
										₹{item.product.discountedPrice.toFixed(2)} x {item.quantity}
									</td>
									<td className="py-3 px-4 md:px-6 font-semibold bg-blue-50 rounded-lg">
										₹{(item.product.discountedPrice * item.quantity).toFixed(2)}
									</td>
								</tr>
							))}
						</tbody>
					</table>

					<div className="m-5 border shadow-lg rounded-lg pt-8 p-6 md:p-10 bg-white max-w-lg mx-auto">
						<h2 className="font-bold text-2xl md:text-3xl lg:text-4xl pb-8 text-center text-gray-800">
							ORDER SUMMARY
						</h2>
						<div>
							{/* Price */}
							<div className="text-base sm:text-lg md:text-xl lg:text-2xl flex justify-between pb-4 text-gray-700">
								<p className="font-medium text-base">Price</p>
								<p>{order.order?.totalPrice}</p>
							</div>

							{/* Savings */}
							<div className="text-base sm:text-lg md:text-xl lg:text-2xl flex justify-between pb-4 text-gray-700">
								<p className="font-medium text-base">You Save</p>
								<p>
									₹{(order.order?.totalPrice - order.order?.totalDiscountedPrice).toFixed(2)}
								</p>
							</div>

							{/* Delivery Charges */}
							<div className="text-base sm:text-lg md:text-xl lg:text-2xl flex justify-between pb-4 text-gray-700">
								<p className="font-medium text-base">Delivery Charges</p>
								<p>Free</p>
							</div>

							{/* Total Payable Amount */}
							<div className="text-base sm:text-lg md:text-xl lg:text-2xl flex justify-between pb-4 text-gray-700">
								<p className="font-bold text-lg">Total Amount</p>
								<p className="text-green-600 font-bold" >₹{order.order?.totalDiscountedPrice}</p>
							</div>

							{/* Payment Option */}
							<div className="text-base sm:text-lg md:text-xl lg:text-2xl flex justify-between pb-4 text-gray-700">
								<p className=" text-base">Payment Option</p>
								<p>Cash On Delivery</p>
							</div>

							{/* Order Button */}
							<button
								onClick={() => handleRemoveCartItem()}
								className="mt-8 w-full rounded-md bg-indigo-600 px-4 py-3 text-sm md:text-base lg:text-lg text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
							>
								CONFIRM ORDER ₹{order.order?.totalDiscountedPrice}
							</button>

							{/* Disclaimer Text */}
							<p className="text-xs sm:text-sm md:text-base text-gray-500 mt-4 text-center">
								By clicking this order button, you agree to our terms and conditions.
								Please do not proceed if you do not agree.
							</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default OrderSummary