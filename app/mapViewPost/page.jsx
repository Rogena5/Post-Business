'use client';
import SideBar from '@/components/SideBar/SideBar';
import MapViewPost from '@/components/mapView/MapviewPost';
import { useState } from 'react';
function page() {

	const [isFilter, setIsFilter] = useState(false);
	return (
		<>
			{isFilter && <SideBar setIsFilter={setIsFilter} isFilter={isFilter} />}

			<div className='layout-B-root'>
				<MapViewPost />
			</div>
		</>
	);
}

export default page;
