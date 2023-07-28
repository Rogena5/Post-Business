'use client';
import React from 'react';
import gridIcon from '../../Images/grid1.png';
import mapIcon from '../../Images/mapIcon.png';
import GridView from '../GridView/GridView';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';

const Listing = () => {
	const isMobile = useIsMobile();
	const router = useRouter();
	return (
		<div className='listing-root'>
			{!isMobile ? (
				<>
					<div className='container'>
						<div className='flex justify-between items-center'>
							<span className='font-bold text-xl py-6 '>
								Top Restaurants in Alex City:
							</span>
							{/* btns */}
							<div className='flex gap-x-3 p-6 items-center relative'>
								<button
									onClick={() => router.push('listing')}
									className='mab-btn flex gap-2 items-center text-base font-bold hover:text-green-600'>
									<Image src={gridIcon} alt='notFound' />
									Grid View
								</button>
								<button
									onClick={() => router.push('mapView')}
									className='flex gap-2 items-center text-base font-bold mab-btn hover:text-green-600'>
									<Image src={mapIcon} alt='notFound' />
									Map View
								</button>
							</div>
						</div>
						<b className='text-sm'>Suggested Results:</b>
					</div>
					<GridView />
				</>
			) : (
				<>
					<section className='container'>
						<div className='flex justify-around items-center'>
							<span className='font-bold text-base py-6 '>
								Top Restaurants in Alex City:
							</span>
							{/* btns */}
							<div className='flex gap-x-3 p-6 items-center'>
								<button
									onClick={() => router.push('listing')}
									className='flex gap-2 items-center text-base font-bold'>
									<Image src={gridIcon} alt='notFound' />
								</button>
								<button
									onClick={() => router.push('mapView')}
									className='flex gap-2 items-center text-base font-bold'>
									<Image src={mapIcon} alt='notFound' />
								</button>
							</div>
						</div>

						<div className='text-xs font-semibold text-center '>
							Suggested Results:
						</div>
					</section>
					<GridView />
				</>
			)}
		</div>
	);
};

export default Listing;
