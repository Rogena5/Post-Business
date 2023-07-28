import React from 'react';
import './homeSectionB.css';
import wallet from '../../Images/walletsearch.png';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';

const SectionBInfoBox = ({ title }) => {
	const isMobile = useIsMobile();
	return (
		<>
			{!isMobile ? (
				<>
					<div className='info-box-root '>
						<div className='info-img'>
							<Image src={wallet} alt='notFound' />
						</div>
						<div className='info-info'>
							<span>{title}</span>

							<span className='text-base font-normal'>
								You can find now the best restraunts, salons and spa in your
								area.
							</span>
						</div>
					</div>
				</>
			) : (
				<>
					<div className='info-box-root-mob container'>
						<div className='info-img'>
							<Image src={wallet} alt='notFound' />
						</div>
						<div className='info-info'>
							<span>{title}</span>

							<span className='text-xs font-normal'>
								You can find now the best restraunts, salons and spa in your
								area.
							</span>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default SectionBInfoBox;
