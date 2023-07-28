'use client';
import Posting from '@/components/Posting/Posting';
import SideBar from '@/components/SideBar/SideBar';
import { useIsMobile } from '@/hooks/useIsMobile';
import Image from 'next/image';
import filterIcon from '../../Images/filterIcon.png';
import { useState } from 'react';
import PostingFilter from '@/components/Posting/PostingFilter';

function posting({ isShow }) {
	const isMobile = useIsMobile();
	const [isFilter, setIsFilter] = useState(false);
	return (
		<section>
		
			{isFilter && (
				<PostingFilter setIsFilter={setIsFilter} isFilter={isFilter} />
			)}

			<div className='layout-B-root'>
				{!isMobile ? (
					<PostingFilter isShow={isShow} />
				) : (
					<></>
					// <div className='filter-btn' onClick={() => setIsFilter(true)}>
					// 	Filter
					// 	<Image src={filterIcon} alt='notFound' />
					// </div>
				)}

				<Posting />
			</div>
		</section>
	);
}

export default posting;
