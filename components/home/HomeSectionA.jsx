
import imgA from '../../Images/spa.png';

import imgC from '../../Images/restaurant.png';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';

const HomeSectionA = () => {
	const isMobile = useIsMobile();
	return (
		<section>
			{/* ________________________________________ */}
			{!isMobile ? (
				<div className=' flex flex-col items-center container '>
					<div className='font-bold text-3xl pb-11'>
						Explore America to find your favorite spots.
					</div>
					<div className='flex items-center justify-center gap-x-16  '>
						<div className='relative '>
							<Image src={imgA} alt='not Found' />
							<h3 className='text-white absolute top-4 inset-x-2.5 text-center '>
								Spa & Salons
							</h3>
						</div>
						<div className='relative'>
							<Image src={imgA} alt='not Found' />
							<h3 className='text-white absolute top-4 inset-x-2.5 text-center '>
								Massage
							</h3>
						</div>
						<div className='relative'>
							<Image src={imgC} alt='not Found' />
							<h3 className='text-white absolute top-4 inset-x-2.5  text-center'>
								Restaurants
							</h3>
						</div>
					</div>
				</div>
			) : (
				<div className=' flex flex-col items-center container '>
					<div className='font-bold text-base pb-6 w-48 text-center'>
						Explore America to find your favorite spots.
					</div>
					<div className='flex flex-col items-center justify-center  gap-x-16  '>
						<div className='relative '>
							<Image src={imgA} alt='not Found' />
							<h3 className='text-white absolute top-4 inset-x-2.5 text-center '>
								Spa & Salons
							</h3>
						</div>
						<div className='relative'>
							<Image src={imgA} alt='not Found' />
							<h3 className='text-white absolute top-4 inset-x-2.5 text-center '>
								Massage
							</h3>
						</div>
						<div className='relative'>
							<Image src={imgC} alt='not Found' />
							<h3 className='text-white absolute top-4 inset-x-2.5  text-center'>
								Restaurants
							</h3>
						</div>
					</div>
				</div>
			)}

			{/* __________________________________________________________________ */}
		</section>
	);
};

export default HomeSectionA;
