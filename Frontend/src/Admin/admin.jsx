import { useTheme } from '@mui/material/styles';
import { CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { Box, display } from '@mui/system';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreProFrom from './component/CreProFrom';
import CustomerTable from './component/customerTable';
import ProductTable from './component/productTable';
import OrderTable from './component/orderTable';
import AdminDashboard from './component/Dashboard';



const menu = [
	{ name: "Dashboards", path: "/admin", icon: <DashboardIcon /> },
	{ name: "Products", path: "/admin/products", icon: <ProductionQuantityLimitsIcon /> },
	{ name: "Customers", path: "/admin/customers", icon: <PersonIcon /> },
	{ name: "Orders", path: "/admin/orders", icon: <BookmarkBorderIcon /> },
	{ name: "AddProducts", path: "/admin/products/create", icon: <AddIcon /> }
]
const Admin = () => {
	const theme = useTheme();
	const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
	const [sideBarVisible, setSideBarVisible] = useState(false);
	const navigate = useNavigate();

	const drawer = (
		<Box sx={{ overflow: "auto", flexDirection: "column", display: "flex", justifyContent: "space-between", height: "100%" }}>
			{isLargeScreen && <toolbar />}
			<List>
				{menu.map((item, index) =>
					<ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
						<ListItemButton>
							<ListItemIcon>
								{item.icon}
							</ListItemIcon>
							<ListItemText>
								{item.name}
							</ListItemText>
						</ListItemButton>
					</ListItem>
				)}
			</List>
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<AccountCircleIcon />
						</ListItemIcon>
						<ListItemText>
							Account
						</ListItemText>
					</ListItemButton>
				</ListItem>

			</List>


		</Box>);

	return (<div>
		<div className='flex h-[100vh]'>
			<CssBaseline />

			<div className='w-[25%]  border border-r-gray-400 h-full'>
				{drawer}
			</div>


			<Box>
				<Routes>
					<Route path="/" element={<AdminDashboard />}></Route>
					<Route path="/product/create" element={<CreProFrom />}></Route>
					<Route path="/products" element={<ProductTable />}></Route>
					<Route path="/orders" element={<OrderTable />}></Route>
					<Route path="/customers" element={<CustomerTable />}></Route>
				</Routes>

			</Box>
		</div>
	</div>
	)
}

export default Admin