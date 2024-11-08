import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteProduct, findProducts } from '../../State/Product/Action';
import { useDispatch, useSelector } from 'react-redux';
function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

//const rows = [
//	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//	createData('Eclair', 262, 16.0, 24, 6.0),
//	createData('Cupcake', 305, 3.7, 67, 4.3),
//	createData('Gingerbread', 356, 16.0, 49, 3.9),
//];
const ProductTable = () => {
	const dispatch = useDispatch();


	const handleDeleteProduct = (productId) => {
		dispatch(deleteProduct(productId))
	}


	const { products } = useSelector(store => store)

	console.log("product is : ", products)
	useEffect(() => {
		const [minPrice, maxPrice] = [0, 0];

		const data = {
			Category: null,
			colors: [],
			sizes: [],
			minPrice,
			maxPrice,
			minDiscount: 0,
			sort: "price_low",
			pageNumber: 1,
			pageSize: 10,
			stock: "in stock"
		}
		dispatch(findProducts(data))
	}, [])


	return (

		<div className="w-full overflow-x-auto">
			<h1 className='text-3xl font-bold m-4'> All Products</h1>
			<table className="w-full border-collapse">
				<thead>
					<tr>
						<th className="border border-gray-300 px-4 py-2">Product</th>
						<th className="border border-gray-300 px-4 py-2 text-center">Available</th>
						<th className="border border-gray-300 px-4 py-2 text-center">Brand</th>
						<th className="border border-gray-300 px-4 py-2 text-center">Price</th>
						<th className="border border-gray-300 px-4 py-2 text-center">Discounted Price</th>
						<th className="border border-gray-300 px-4 py-2 text-center">Delete</th>

					</tr>
				</thead>
				<tbody>
					{products?.products?.content?.map((row) => (
						<tr key={row.createdAt} className="border-t border-gray-300">
							<td className="border border-gray-300 px-4 py-2">
								<img className="w-36" src={row.imageUrl} alt={row.productName} />
							</td>
							<td className="border border-gray-300 px-4 py-2 text-ccenter">{row.quantity}</td>
							<td className="border border-gray-300 px-4 py-2 text-ccenter">{row.brand}</td>
							<td className="border border-gray-300 px-4 py-2 text-ccenter">{row.price}</td>
							<td className="border border-gray-300 px-4 py-2 text-ccenter">{row.discountedPrice}</td>
							<td className="border border-gray-300 px-4 py-2 text-ccenter">
								<button onClick={() => handleDeleteProduct(row._id)} className=' bg-red-200 px-8 py-3 rounded hover:bg-red-500 '>Delete</button>
							</td>

						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default ProductTable