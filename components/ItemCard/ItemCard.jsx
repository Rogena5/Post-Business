import React from 'react';
import './ItemCard.css';
import massage from '../../Images/massageImg.png';
import like from '../../Images/like1.png';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import { useIsMobile } from '@/hooks/useIsMobile';

const ItemCard = ({ val }) => {
	const isMobile = useIsMobile()
	const router = useRouter();
	function showDetailsHandler() {
		router.push(`/${val.id}`)
		// router.push('details-post');
	}
	return (
		<div>
			{!isMobile ? (
				<>
					<div className='ItemCard-box ' onClick={showDetailsHandler} key={val.id} id={val.id}>
						<div className='img-wrapper'>
							<Image src={massage} alt='notFound' />
						</div>
						<div className='info-ItemCard-box'>
							<div className='name-city-box'>
								<span className='title-box'>{val.name}</span>
								<span>$40000</span>
							</div>
							<div className='name-city-box'>
								<span className='flex gap-x-2'>
									<CiLocationOn size={20} /> {val.city}
								</span>
								<span>
									<Image src={like} alt='notFound' />
								</span>
							</div>
							<div className='para'>
								Lorem ipsum dolor sit amet consectetur. Diam sed in tortor
								interdum non. Enim nisl tellus...
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className='ItemCard-box-mob' onClick={showDetailsHandler}>
						<div className='img-wrapper-mob'>
							<Image src={massage} alt='notFound' />
						</div>
						<div className='flex flex-col'>
							<div className='flex items-center justify-between pb-2.5'>
								<span className='font-bold text-base '>{val.name}</span>
								<span className='font-normal text-xs'>$40000</span>
							</div>
							<div className='flex justify-between pb-2.5'>
								<span className='flex gap-x-1 font-normal text-xs'>
									<CiLocationOn size={15} /> {val.city}
								</span>
								<span>
									<Image src={like} alt='notFound' />
								</span>
							</div>
							<div className='text-xs font-normal text-justify'>
								Lorem ipsum dolor sit amet consectetur. Diam sed in tortor
								interdum non. Enim nisl tellus...
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ItemCard;
