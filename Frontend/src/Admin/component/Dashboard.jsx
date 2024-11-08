import React from 'react'
import { Grid } from '@mui/material'
import Achive from './achive'
import Month from './Month'

const AdminDashboard = () => {
	return (
		<div>

			<Grid container spacing={4} className='flex'>
				<Grid item xs={12} md={12}>

					<Month></Month>
					{/*<Achive></Achive>*/}
				</Grid>


			</Grid>
		</div>
	)
}

//Dashboard.propTypes = {}

export default AdminDashboard