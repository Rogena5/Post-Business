import React from 'react';
import './homeSectionB.css';
import picA from '../../Images/how it works.png';
import SectionBInfoBox from './SectionBInfoBox';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';

const HomeSectionB = () => {
	const isMobile = useIsMobile();
	return (
		<section className='sectionB-wrapper container'>
			{!isMobile ? (
				<>
					<div className='font-bold text-3xl pb-11'>How it Works</div>
					<div className='sectionB-root '>
						<div className='sectionB-info-box'>
							<SectionBInfoBox title='Find' />
							<SectionBInfoBox title='Compare' />
							<SectionBInfoBox title='Contact' />
							<SectionBInfoBox title='Relax' />
						</div>
						<div className='sectionB-img-box '>
							<Image src={picA} alt='notFound' />
						</div>
					</div>
				</>
			) : (
				<>
					<span className='font-bold text-base pb-6'>How it Works</span>
					<div className='sectionB-root '>
						<div className='sectionB-info-box'>
							<SectionBInfoBox title='Find' />
							<SectionBInfoBox title='Compare' />
							<SectionBInfoBox title='Contact' />
							<SectionBInfoBox title='Relax' />
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default HomeSectionB;
