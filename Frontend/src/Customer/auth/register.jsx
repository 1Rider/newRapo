import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { getUser, register } from "../../State/Auth/Action.jsx"


const RegisterForm = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const jwt = localStorage.getItem('jwt');
	const { auth } = useSelector(store => store)

	useEffect(() => {
		if (jwt) {
			dispatch(getUser(jwt))
		}
	}, [jwt, auth.jwt])


	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const userData = {
			firstName: data.get("name"),
			shopName: data.get("shopName"),
			//wardNumber: data.get("wardNumber"),
			//address: data.get("address"),
			mobile: data.get("mobileNumber"),
			password: data.get("password"),
		}
		dispatch(register(userData))
		console.log(userData)
		navigate('/');

	}



	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 mt-8">
			<div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
				<div className="text-center mb-6">
					<p className="text-2xl font-semibold text-gray-700">Welcome</p>
					<p className="text-sm text-gray-500">Please register or log in below</p>
				</div>

				<div className="flex justify-center space-x-4 mb-6">
					<button
						onClick={() => navigate('/register')}
						className="px-4 py-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
					>
						Register
					</button>
					<button
						onClick={() => navigate('/login')}
						className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
					>
						Login
					</button>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<TextField
						required
						fullWidth
						name="name"
						label="Full Name"
						variant="outlined"
						className="bg-gray-50"
					/>

					<TextField
						required
						fullWidth
						name="shopName"
						label="Shop Name"
						variant="outlined"
						className="bg-gray-50"
					/>

					<TextField
						required
						fullWidth
						name="wardNumber"
						label="Ward Number"
						variant="outlined"
						className="bg-gray-50"
					/>

					<TextField
						required
						multiline
						fullWidth
						name="address"
						label="Full Address + Street Name"
						variant="outlined"
						className="bg-gray-50"
					/>

					<TextField
						required
						fullWidth
						name="mobileNumber"
						label="Mobile Number"
						variant="outlined"
						className="bg-gray-50"
					/>

					<TextField
						required
						fullWidth
						name="password"
						label="Create Password"
						type="password"
						variant="outlined"
						className="bg-gray-50"
					/>

					<button
						type="submit"
						className="w-full py-3 mt-4 text-white bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition duration-200"
					>
						Register
					</button>
				</form>
			</div>
		</div>
	)
}

export default RegisterForm