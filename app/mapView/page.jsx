'use client';
import SideBar from '@/components/SideBar/SideBar';
import MapView from '@/components/mapView/MapView';
import { useState } from 'react';
function page() {
	
	const [isFilter, setIsFilter] = useState(false);
	return (
		<>
			{isFilter && <SideBar setIsFilter={setIsFilter} isFilter={isFilter} />}

			<div className='layout-B-root'>
				<MapView />
			</div>
		</>
	);
}

export default page;
