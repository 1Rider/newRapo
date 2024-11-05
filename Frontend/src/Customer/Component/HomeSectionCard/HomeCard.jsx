import React from 'react'


export const HomeCard = ({ data }) => {
	return (
		<div className='cursor-pointer flex flex-col items-center rounded-lg shadow-lg overflow-hidden w-[17rem] mx-50 m-3' style={{ border: '2px solid black' }} >

			<div>
				<img className='object-cover object-top w-[29rem] h-[15rem]' src="https://images.carandbike.com/car-images/large/tata/safari/tata-safari.jpg" alt='card image' />
			</div>
			<div className='py-4'>
				<h3 className='text-lg font-medium text-gray-900'>{data.brand} {data.model} | {data.year}</h3>
				<p className='mt-2 text-sm text-gray-500'>{data.discription}</p>
				<div><span><button className='primary-button'>Buy</button></span><span>Price : {data.price}</span></div>
			</div>
		</div>
	)
}
