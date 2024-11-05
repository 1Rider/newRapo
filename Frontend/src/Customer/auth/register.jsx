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
		<div>
			<div className='m-14'>
				<center>
					<div className='border  m-28 px-20'>
						<p className='text-lg m-8 font-bold'><a className='w-full bg-sky-300 hover:bg-sky-500 p-2 m-2 border-2  border-black rounded-lg ' onClick={() => { navigate("/register") }}>Registration Form </a><a className=' border-2  border-black rounded-lg px-2 w-full bg-white-300 hover:bg-gray-300' onClick={() => { navigate("/login") }}>Login Form </a> </p>

						<form onSubmit={handleSubmit}>

							<TextField required className='w-full' name="name" label="Full Name" variant="outlined" /><br></br><br></br>

							<TextField required className='w-full' name='shopName' label="Shop Name" variant="outlined" /><br></br><br></br>

							<TextField required className='w-full' name='wardNumber' label="Ward Number" variant="outlined" /><br></br><br></br>

							<TextField required multiline name="address" fullWidth label="Full Address + Street Name" /><br></br><br></br>

							<TextField required className='w-full' name='mobileNumber' label="Mobile Number" variant="outlined" /><br></br><br></br>

							<TextField required className='w-full' name='password' label="Create Password" variant="outlined" /> <br></br><br></br>

							<button className=' m-4 w-24 h-8 border-none rounded-lg bg-sky-300 hover:bg-sky-500'>Register</button>


						</form>
					</div>
				</center>
			</div>

		</div>
	)
}

export default RegisterForm