import React from 'react'
import Admin from '../../../Admin/admin'
import { Route, Routes } from 'react-router-dom'
const AdminRouter = () => {
	return (
		<div>
			<Routes>
				<Route path="/*" element={<Admin />}></Route>
			</Routes></div>
	)
}

export default AdminRouter