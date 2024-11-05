import { TextField } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../State/Order/Action';
import { useNavigate } from 'react-router-dom';

const AddressDetailsForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch();




	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const address = {
			//firstName: data.get("name"),
			firstName: "firstName",
			mobile: data.get("phoneNumber"),
			shopName: data.get("shopName"),
			fullAddress: data.get("fullAddress"),
			city: data.get("city"),
			//wardNumber: data.get("wardNumber"),
			//StreetAddress: data.get("streetName"),
			wardNumber: "000",
			StreetAddress: "StreetAddress"
		}
		const orderData = { address, navigate }
		dispatch(createOrder(orderData))
		//console.log(address);
	}



	return (
		<section>
			<div className='lg:mx-[8rem] bg-white mx-4 shadow-2xl border rounded-lg '>
				<form onSubmit={(e) => handleSubmit(e)}>
					<center className='py-12' >
						<h1 className='text-3xl font-bold '>Address Details</h1>
						<div className='mt-10 m-10 lg:mx-32'>
							{/*<TextField
								required
								id="naame"
								name="name"
								label="Full name"
								fullWidth
								autoComplete='given-name'
							/>*/}
						</div>
						<div className='mt-10 m-10 lg:mx-32'>
							<TextField
								required
								id="phoneNumber"
								name="phoneNumber"
								label="Phone number"
								fullWidth
								autoComplete='given-name'
							/>
						</div>

						<div className='mt-10 m-10 lg:mx-32'>
							<TextField
								required
								id="shopName"
								name="shopName"
								label="Shop Name"
								fullWidth
								autoComplete='given-name'
							/>
						</div>

						<div className='mt-10 m-10 lg:mx-32'>
							<TextField
								required
								id="fullAddress"
								name="fullAddress"
								label="Shop full address"
								multiline
								rows={3}
								fullWidth
								autoComplete='given-name'
							/>
						</div>

						<div className='mt-10 m-10 lg:mx-32'>
							<TextField
								required
								id="city"
								name="city"
								label="City name"
								fullWidth
								autoComplete='given-name'
							/>
						</div>

						{/*<div className='mt-10 m-10 lg:mx-32'>
							<TextField
								required
								id="wardNumber"
								name="wardNumber"
								label="Ward number of shop"
								fullWidth
								autoComplete='given-name'
							/>
						</div>*/}

						{/*<div className='mt-10 m-10 lg:mx-32'>
							<TextField
								required
								id="streetName"
								name="streetName"
								label="street name of shop"
								fullWidth
								autoComplete='given-name'
							/>
						</div>*/}
						<div className='mt-10 m-10 lg:mx-32'>
							<button
								type='submit'
								className="mt-10 flex w-full items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-indigo-500 "
							>
								CHECKOUT
							</button>
						</div>

					</center>

				</form>

			</div>
		</section>
	)
}

export default AddressDetailsForm;

