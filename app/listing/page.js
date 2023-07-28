'use client';
import Listing from '@/components/Listing/Listing';
import SideBar from '@/components/SideBar/SideBar';
import { useIsMobile } from '@/hooks/useIsMobile';
import Image from 'next/image';
import { useState } from 'react';
import filterIcon from '../../Images/filterIcon.png';
function page({ isShow }) {
	const isMobile = useIsMobile();
	const [isFilter, setIsFilter] = useState(false);

	return (
		<section>
			{isFilter && <SideBar setIsFilter={setIsFilter} isFilter={isFilter} />}

			<div className='layout-B-root'>
				{!isMobile ? (
					<SideBar isShow={isShow} />
				) : (
					<></>
					// <div className='filter-btn' onClick={() => setIsFilter(true)}>
					// 	Filter
					// 	<Image src={filterIcon} alt='notFound' />
					// </div>
				)}

				<Listing />
			</div>
		</section>
	);
}

export default page;
