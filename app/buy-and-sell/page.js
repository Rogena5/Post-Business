'use client';
import BuySell from '@/components/BuyandSell/BuySell';
import React, { useState } from 'react';
import SideBar from '@/components/SideBar/SideBar';
import { useIsMobile } from '@/hooks/useIsMobile';
import Image from 'next/image';
import filterIcon from '../../Images/filterIcon.png';

function buysell({ isShow }) {
	const isMobile = useIsMobile();
	const [isFilter, setIsFilter] = useState(false);
	return (
		<section>
			{isFilter && <SideBar setIsFilter={setIsFilter} isFilter={isFilter} />}

			<div className='layout-B-root'>
				{!isMobile ? (
					<SideBar isShow={isShow} />
				) : (
					""
					// <div className='filter-btn' onClick={() => setIsFilter(true)}>
					// 	Filter
					// 	<Image src={filterIcon} alt='notFound' />
					// </div>
				)}

				<BuySell />
			</div>
		</section>
	);
}

export default buysell;
