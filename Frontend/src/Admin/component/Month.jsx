import { Avatar, Box, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Grid } from '@mui/material'
import DiamondIcon from '@mui/icons-material/Diamond';

import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';


const Month = () => {




	const salseData = [
		{
			stats: "24K",
			title: "salse",
			color: "primary",
			icon: EnhancedEncryptionIcon
		},
		{
			stats: "214K",
			title: "Customer",
			color: "primary",

		}, {
			stats: "14K",
			title: "Products",
			color: "primary",
			icon: ProductionQuantityLimitsIcon
		}, {
			stats: "21K",
			title: "Revenue",
			color: "primary",
			icon: DiamondIcon
		},
	];

	const renderStats = () => {
		return salseData.map((item, index) => (
			<Grid item xs={12} sm={3} key={index} >
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Avatar variant='rounded' sx={{ mr: 3, width: 44, height: 44, boxShadow: 3, color: 'white', background: `${item.color} ` }}></Avatar>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<Typography variant='caption'>{item.title}</Typography>
						<Typography variant='h6'>{item.stats}</Typography>
					</Box>
				</Box>
			</Grid >
		))
	}



	return (
		<Card sx={{ bgcolor: "#24282E", color: "white" }}>
			<CardHeader
				title="Monthly Overview"
				action={
					<IconButton size='small'>
						<MoreVertIcon />
					</IconButton>
				}
				subheader={
					<Typography variant='body2'>
						<Box component='span' sx={{ fontWeight: 600 }}>
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
