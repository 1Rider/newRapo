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
		<div className='m-14'>
			<center>
				<div className='border w-fit m-2'>

					<p className='text-lg m-8 font-bold'><a className='w-full bg-sky-300 hover:bg-sky-500 p-2 m-2 border-2  border-black rounded-lg ' onClick={() => { navigate("/login") }}>Login Form </a><a className=' border-2  border-black rounded-lg px-2 w-full bg-white-300 hover:bg-gray-300' onClick={() => { navigate("/register") }}>Registration Form </a> </p>
					<form onSubmit={(event) => handleSubmit(event)}>
						<TextField id="mobile number" label="Mobile Number" name="mobile" variant="outlined" /><br></br><br></br>
						<TextField id="Password" label="Password" name="password" variant="outlined" /> <br></br><br></br>

						<button className=' m-4 w-24 h-8 border-none rounded-lg bg-sky-300 hover:bg-sky-500'>Login</button>


					</form>
				</div>
			</center>
		</div>
	)
}

export default LoginForm