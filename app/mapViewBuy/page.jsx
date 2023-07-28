'use client';
import SideBar from '@/components/SideBar/SideBar';
import MapViewPostBuy from '@/components/mapView/MapViewBuy';
import { useState } from 'react';
function page() {
	
	const [isFilter, setIsFilter] = useState(false);
	return (
		<>
			{isFilter && <SideBar setIsFilter={setIsFilter} isFilter={isFilter} />}

			<div className='layout-B-root'>
				<MapViewPostBuy />
			</div>
		</>
	);
}

export default page;
