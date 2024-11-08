import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";
import { api } from '../../config/apiConfig'


export const findProducts = (reqData) => async (dispatch) => {
	//const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
	dispatch({ type: FIND_PRODUCTS_REQUEST })
	const { colors, minPrice, maxPrice, minDiscount, category, stock, sort } = reqData;
	console.log(`Product data :`)

	try {

		//const {data} = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}$pageNumber=${pageNumber}&pageSize=${pageSize}`)

		//const { data } = await api.get(`/api/products?minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}`);
		const { data } = await api.get(`/api/products?color=${colors}`);
		console.log(`Product data : ${data}`)
		dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
		console.log(`Product data : ${data}`)
	} catch (error) {
		console.log(`Product data error : ${error.message}`)
		dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
	}
};




export const findProductById = (reqData) => async (dispatch) => {
	dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
	const { productId } = reqData;

	try {
		const { data } = await api.get(`/api/products/id/${productId}`);
		dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })

	} catch (error) {
		dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
	}
};


export const createProduct = (product) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_PRODUCT_REQUEST })
		const { data } = await api.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/products`, product.data);
		dispatch({

			type: CREATE_PRODUCT_SUCCESS,
			payload: data,
		})

	} catch (error) {

		dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message })

	}
}


export const deleteProduct = (productId) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_PRODUCT_REQUEST })
		const { data } = await api.delete(`${import.meta.env.VITE_API_BASE_URL}/api/admin/products/${productId}`);
		dispatch({

			type: DELETE_PRODUCT_SUCCESS,
			payload: productId,
		})

	} catch (error) {

		dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message })

	}
}