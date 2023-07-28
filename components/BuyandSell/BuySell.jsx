'use client';
import React from 'react';
import gridIcon from '../../Images/grid1.png';
import mapIcon from '../../Images/mapIcon.png';
import GridView from '../GridView/GridView';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useIsMobile } from '@/hooks/useIsMobile';
const BuySell = () => {
	const router = useRouter();
	const isMobile = useIsMobile();

	return (
		<div className='buysell-root '>
			{!isMobile ? (
				<div className='container'>
					<div className=' flex items-center justify-between '>
						<div className='py-6 flex items-center gap-2'>
							<span className='font-bold text-xl '>Buy and Sell:</span>
							<span className='text-base font-normal'>
								For Sale Contact this person: John ( 635-9372-9283 )
							</span>
						</div>

						<div className='flex gap-x-3 p-6 items-center relative '>
							<button
								onClick={() => router.push('buy-and-sell')}
								className='mab-btn flex gap-2 items-center text-base font-bold hover:text-green-600'>
								<Image src={gridIcon} alt='notFound' /> Grid View
							</button>
							<button
								onClick={() => router.push('mapViewBuy')}
								className='mab-btn flex gap-2 items-center text-base font-bold hover:text-green-600'>
								<Image src={mapIcon} alt='notFound' />
								Map View
							</button>
						</div>
					</div>
					<div className='font-bold text-sm container'>Suggested Results:</div>
				</div>
			) : (
				<div className='container'>
					<div className='flex justify-between items-center'>
						<span className='flex flex-col py-6'>
							<span className='font-bold text-base'>Buy and Sell:</span>
							<span className='font-normal text-xs'>
								For Sale Contact this person: John ( 635-9372-9283 )
							</span>
						</span>

						<div className='flex gap-x-3 py-6 items-center'>
							<button
								
								onClick={() => router.push('buy-and-sell')}>
								<Image src={gridIcon} alt='notFound' />
							</button>
							<button
								
								onClick={() => router.push('mapViewBuy')}>
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

export default BuySell;
