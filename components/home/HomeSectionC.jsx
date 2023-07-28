import data from '../../utils/homeData.json';
import Image from 'next/image';
import homeSectionC from '../../Images/luxSpa.png';
import { AiOutlineStar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { useIsMobile } from '@/hooks/useIsMobile';

const HomeSectionC = ({ name }) => {
	const isMobile = useIsMobile();
	return (
		<>
			{data[`${name}`]?.map((val) => {
				return (
					<>
						{!isMobile ? (
							<>
								<div key={val.id}>
									<div
										className='box flex items-center justify-center flex-col'
										id={val.id}>
										<div>
											<Image
												src={homeSectionC}
												alt='notFound'
												className=' w-full'
											/>
										</div>
										<div className='flex flex-col' key={val.id}>
											<div className='font-bold text-base text-center py-4'>
												{val.name}
											</div>

											<div className='flex gap-x-20 py-3 '>
												<span className='flex justify-around font-normal text-current text-base '>
													<AiOutlineStar size={20} />
													{val.rating}
												</span>
												<span className='flex justify-around font-normal text-current text-base'>
													<CiLocationOn size={20} />
													{val.city}
												</span>
											</div>
										</div>
									</div>
								</div>
							</>
						) : (
							<>
								<div key={val.id}>
									<div
										className='box-mob flex items-center justify-center flex-col'
										id={val.id}>
										<div>
											<Image
												src={homeSectionC}
												alt='notFound'
												className=' w-full'
											/>
										</div>
										<div className='flex flex-col' key={val.id}>
											<div className='font-bold text-sm text-center py-2'>
												{val.name}
											</div>

											<div className='flex gap-x-20 py-2 '>
												<span className='flex justify-around font-normal text-current text-xs '>
													<AiOutlineStar size={20} />
													{val.rating}
												</span>
												<span className='flex justify-around font-normal text-current text-xs'>
													<CiLocationOn size={20} />
													{val.city}
												</span>
											</div>
										</div>
									</div>
								</div>
							</>
						)}
					</>
				);
			})}
		</>
	);
};

export default HomeSectionC;
