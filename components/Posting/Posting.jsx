'use client';
import React from 'react';
import gridIcon from '../../Images/grid1.png';
import mapIcon from '../../Images/mapIcon.png';
import GridView from '../GridView/GridView';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';

const Posting = () => {
	const router = useRouter();
	const isMobile = useIsMobile();
	return (
		<div className='posting-root'>
			{!isMobile ? (
				<>
					<div className='container'>
						<div className='flex justify-between items-center'>
							<span className='font-bold text-xl py-6 '>Posting: </span>

							<div className='flex gap-x-3 p-6 items-center relative'>
								<button
									onClick={() => router.push('posting')}
									className='flex gap-2 items-center text-base font-bold mab-btn hover:text-green-600'>
									<Image src={gridIcon} alt='notFound' /> Grid View
								</button>
								<button
									onClick={() => router.push('mapViewPost')}
									className='flex gap-2 items-center text-base font-bold mab-btn hover:text-green-600'>
									<Image src={mapIcon} alt='notFound' />
									Map View
								</button>
							</div>
						</div>
						<b className='text-sm'>Suggested Results:</b>
					</div>
				</>
			) : (
				<div className='container'>
					<div className='flex justify-between items-center'>
						<span className='font-bold text-base py-6 '>Posting: </span>

						<div className='flex gap-x-3 p-6 items-center'>
							<button onClick={() => router.push('posting')}>
								<Image src={gridIcon} alt='notFound' />
							</button>
							<button onClick={() => router.push('mapViewPost')}>
								<Image src={mapIcon} alt='notFound' />
							</button>
						</div>
					</div>
					<div className='text-xs font-semibold text-center '>
						Suggested Results:
					</div>
				</div>
			)}

			<GridView />
		</div>
	);
};

export default Posting;
