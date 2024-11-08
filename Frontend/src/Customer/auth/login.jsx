import React from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getUser, login } from "../../State/Auth/Action.jsx"



const LoginForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { auth } = useSelector(store => store)


	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const userData = {
			mobile: data.get("mobile"),
			password: data.get("password"),
		}
		dispatch(login(userData))
		console.log(userData)
		navigate('/');
	}



	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
			<div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white border border-gray-300 rounded-lg shadow-md p-6 sm:p-8 md:p-10">
				<div className="text-center mb-6">
					<p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-4">Please Sign In</p>
					<div className="flex justify-center space-x-4 mb-6">
						<button
							onClick={() => navigate('/login')}
							className="px-4 py-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
						>
							Login
						</button>
						<button
							onClick={() => navigate('/register')}
							className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
						>
							Register
						</button>
					</div>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<TextField
						required
						fullWidth
						id="mobile number"
						label="Mobile Number"
						name="mobile"
						variant="outlined"
						className="bg-gray-50"
					/>

					<TextField
						required
						fullWidth
						id="Password"
						label="Password"
						name="password"
						type="password"
						variant="outlined"
						className="bg-gray-50"
					/>

					<button
						type="submit"
						className="w-full py-2 mt-4 text-white bg-sky-500 hover:bg-sky-600 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition duration-200"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	)
}

export default LoginForm