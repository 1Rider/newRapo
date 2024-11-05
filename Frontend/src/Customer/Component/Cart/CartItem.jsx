import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const CartItem = ({ item }) => {


	const dispatch = useDispatch();
	const handleUpdateCartItem = (num) => {
		const data = { data: { quantity: item.quantity + num }, cartItemId: item?._id }
		console.log("item and data in cartitem is : ", item, data);
		console.log(item)
		dispatch(updateCartItem(data))
	}
	const handleRemoveCartItem = () => {
		dispatch(removeCartItem(item._id))
	}


	return (
		<div className='cursor-pointer flex flex-col rounded-lg shadow-lg bg-white overflow-hidden w-[17rem] h-[20rem] mx-50 m-3' style={{ border: '2px solid black' }} >

			<div>
				<img className='object-cover object-top w-[17rem] h-[10rem]' src="https://img.freepik.com/premium-photo/colorful-image-rainbow-colored-peacock_1282123-404.jpg" alt='card image' />
			</div>
			<div className='py-4 mx-3'>
				<h3 className='text-lg font-medium text-gray-900 mx-2'>{item?.brand}</h3>
				<div className='flex'><span className='mx-2'>Price {item?.price}</span>
					| <p className='mx-2'>You pay {item?.discountedPrice}</p></div>
				<h2 className=' flex mx-2 font-bold'>You Save : <p className='text-green-600 mx-1'>{item?.price - item?.discountedPrice}</p></h2>
			</div>

			<div className='flex m-5 font-medium text-base '>
				{item?.quantity > 1 ? <div className='border rounded p-2 border-2 border-black' onClick={() => handleUpdateCartItem(-1)} > - </div> : <div className='border rounded p-2 border-2 border-black' onClick={() => handleUpdateCartItem(1)} > + </div>}
				<div className='mx-6 pt-2'> {item?.quantity} </div>
				<div className='border rounded p-2 border-2 border-black' onClick={() => handleUpdateCartItem(1)} > + </div>
				<div className='mx-9 text-red-600 mt-2' onClick={handleRemoveCartItem}>REMOVE</div>

			</div>
		</div>
	)
}

export default CartItem;