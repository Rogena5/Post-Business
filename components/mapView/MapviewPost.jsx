'use client';
import gridIcon from '../../Images/grid1.png';
import mapIcon from '../../Images/mapIcon.png';
import mapImg from '../../Images/mapView.png';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CardMapView from './CardMapView';

const MapViewPost = () => {
	const isMobile = useIsMobile();
	const router = useRouter();
	return (
		<>
			{!isMobile ? (
				<>
					<div className='mapView-root'>
						<div className='flex justify-between items-center container'>
							<b>Posting:</b>

							<div className='flex gap-x-5 items-center'>
								<button
									onClick={() => router.back()}
									className='flex gap-2 items-center text-base font-bold'>
									<Image src={gridIcon} alt='notFound' /> Grid View
								</button>
								<button
									onClick={() => router.push('mapView')}
									className='flex gap-2 items-center text-base font-bold'>
									<Image src={mapIcon} alt='notFound' />
									Map View
								</button>
							</div>
						</div>
						<div className='container'>
							<Image src={mapImg} alt='notFound' />
						</div>
						<b className='container'>Suggested Result: </b>
						<CardMapView />
					</div>
				</>
			) : (
				<>
					<div className='mapView-root'>
						<div className='flex justify-between items-center container'>
							<b>Top restaurant in alex city:</b>

							<div className='flex gap-x-5 items-center'>
								<button
									onClick={() => router.back()}
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
						<div className='container'>
							<Image src={mapImg} alt='notFound' />
						</div>
						<b className='container'>Suggested Result: </b>
						<CardMapView />
					</div>
				</>
			)}
		</>
	);
};

export default MapViewPost;
