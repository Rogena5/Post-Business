import React, { useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import items from '../../utils/GridData.json';
import { useIsMobile } from '@/hooks/useIsMobile';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
function CardMapView() {
	const isMobile = useIsMobile();
	const itemsPerPage = 3; // Number of items to display per page
	const totalPages = Math.ceil(items.length / itemsPerPage); // Calculate the total number of pages

	const [currentPage, setCurrentPage] = useState(1); // State to keep track of the current page

	// Calculate the index range for the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	// Get the items to display on the current page
	const currentItems = items.slice(startIndex, endIndex);

	// Handle pagination clicks
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	// _____________________________________________________________________-

	const itemsPerPageMob = 2; // Number of items to display per page
	const totalPagesMob = Math.ceil(items.length / itemsPerPageMob); // Calculate the total number of pages

	const [currentPageMob, setCurrentPageMob] = useState(1); // State to keep track of the current page

	// Calculate the index range for the current page
	const startIndexMob = (currentPageMob - 1) * itemsPerPageMob;
	const endIndexMob = startIndexMob + itemsPerPageMob;

	// Get the items to display on the current page
	const currentItemsMob = items.slice(startIndexMob, endIndexMob);

	// Handle pagination clicks
	const handlePageChangeMob = (pageNumber) => {
		setCurrentPageMob(pageNumber);
	};
	return (
		<div className='container'>
			{!isMobile ? (
				<>
					<div className='flex flex-wrap gap-x-20 gap-y-10 pb-6 '>
						{/* Render the ItemCard component with the currentItems */}
						{currentItems.map((item) => (
							<ItemCard key={item.id} val={item} />
						))}
					</div>
					{/* Pagination */}
					<div className='flex justify-center items-center container'>
						<IoIosArrowBack className='text-green-600' />
						{Array.from({ length: totalPages }, (_, index) => (
							<button
								key={index + 1}
								className={`px-4 py-2 mx-1 rounded ${
									currentPage === index + 1
										? 'border border-green-600 text-green-600'
										: 'text-green-600'
								}`}
								onClick={() => handlePageChange(index + 1)}>
								{index + 1}
							</button>
						))}
						<IoIosArrowForward className='text-green-600' />
					</div>
				</>
			) : (
				<>
					<div className='flex flex-wrap gap-x-3 gap-y-5 pb-6'>
						{/* Render the ItemCard component with the currentItems */}
						{currentItemsMob.map((item) => (
							<ItemCard key={item.id} val={item} />
						))}
					</div>
					{/* Pagination */}
					<div className='flex justify-center items-center container'>
						<IoIosArrowBack className='text-green-600' />
						{Array.from({ length: totalPagesMob }, (_, index) => (
							<button
								key={index + 1}
								className={`px-4 py-2 mx-1 rounded ${
									currentPage === index + 1
										? 'border border-green-600 text-green-600'
										: 'text-green-600'
								}`}
								onClick={() => handlePageChangeMob(index + 1)}>
								{index + 1}
							</button>
						))}
						<IoIosArrowForward className='text-green-600' />
					</div>
				</>
			)}
		</div>
	);
}

export default CardMapView;
