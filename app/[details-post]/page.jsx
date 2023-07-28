'use client';
import DetailedPost from '@/components/ItemCard/Detailed Post/DetailedPost';
import React from 'react';
import SideBar from '@/components/SideBar/SideBar';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useState } from 'react';
import CardMapView from '@/components/mapView/CardMapView';

function page({ isShow }) {
	const isMobile = useIsMobile();
	const [isFilter, setIsFilter] = useState(false);
	return (
		<section>
			{isFilter && <SideBar setIsFilter={setIsFilter} isFilter={isFilter} />}

			<div className='layout-B-root'>
				{!isMobile && <SideBar isShow={isShow} />}
				<DetailedPost />
			</div>
			<div className='pt-10'>
				<CardMapView />
			</div>
		</section>
	);
}

export default page;
