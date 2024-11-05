import { Box, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import { Grid } from '@mui/material'

const salseData = [
	{
		stats: "24K",
		title: "salse",
		color: "primary",
	},
	{
		stats: "214K",
		title: "Customer",
		color: "primary",
	}, {
		stats: "14K",
		title: "Products",
		color: "primary",
	}, {
		stats: "21K",
		title: "Revenue",
		color: "primary",
	},
];

const renderStats = () => {
	return salseData.map((item, index) => {
		<Grid item xs={12} sm={3} key={index} >
			<Box className="flex items-center">
				<p className='xl'>{item.stats}</p>
				<p className='lg' >{item.title}</p>
			</Box>
		</Grid>
	})
}


const Month = () => {
	return (
		<Card>
			<CardHeader
				title="Monthly Overview"
				action={
					<IconButton size='small'>
						<MoreVertIcon />
					</IconButton>
				}
				subheader={
					<Typography variant='body2'>
						<Box component='span' sx={{ fontWeight: 500, }}>
							Total 48%
						</Box>
						This month
					</Typography>
				}
				titleTypographyProps={{
					sx: {
						mb: 2.5,
						lineHeight: '2rem !important',
						letterSpacing: '.15px !important'
					}
				}}
			/>
			<CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
				<Grid container spacing={[5, 0]}>
					{renderStats()}
				</Grid>
			</CardContent>
		</Card>
	)
}

export default Month
