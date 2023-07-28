import React from 'react';
import Image from 'next/image';
import detailsproduct from '../../../Images/details-product.png';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineLike } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { RiMessage3Line } from 'react-icons/ri';
import mapView from '../../../Images/MapViewImg2.png';
import { PiUserCircleBold } from 'react-icons/pi';
import Rectangle1 from '../../../Images/Rectangle 47.png';
import Rectangle2 from '../../../Images/Rectangle 49.png';
import Rectangle3 from '../../../Images/Rectangle 51.png';
import Rectangle4 from '../../../Images/Rectangle 52.png';
import Rectangle5 from '../../../Images/Rectangle 53.png';
import Rectangle6 from '../../../Images/Rectangle 54.png';


const DetailsBoxMob = () => {
	return (
		<div>
			<div className='detailed-post-root-wrap '>
				<div className=' flex flex-col justify-between gap-8 '>
					<div className='font-bold text-base pb-4'>Details</div>

					<div className='flex items-center gap-20'>
						<div className='flex items-center gap-4'>
							<Image
								src={detailsproduct}
								width='60px'
								height='60px'
								alt='notFound'
							/>
							<span className='font-bold text-base'>Cafe Maribelle</span>
						</div>

						<div>
							<span className='font-normal text-sm'>Restaurants</span>
						</div>
					</div>

					<div className='flex flex-col gap-6'>
						<div className='flex items-center gap-10'>
							<div className='flex gap-2 items-center'>
								<CiLocationOn size={20} />
								<span className='text-sm font-normal'>
									1036 Cambell St, Rapid City, South Dakota, 57701
								</span>
							</div>
							<AiOutlineLike size={20} />
						</div>

						<div className='flex gap-2 text-sm items-center'>
							<BsTelephone />
							<span>(605) 716-6600</span>
						</div>
						<div className='flex gap-2 items-center text-sm'>
							<RiMessage3Line />
							<span>cafemaribelle@av.com</span>
						</div>
						{/* _____________________///buttons///_______________________________ */}
						<div className='flex gap-2'>
							<button className='btn btn-block text-sm'>Call Now</button>
							<button className='btn-opposite btn-block text-sm'>
								Schedule a Booking
							</button>
						</div>
					</div>

					{/* ____________________________________________ */}
					<div>
						{/* description */}
						<div className='flex flex-col gap-y-6'>
							<div>
								<div className='font-bold text-base pb-5'>Description</div>
								<span className='font-normal text-xs '>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
									sit consectetur quis totam nemo! Blanditiis iusto quod harum
									voluptatum, dolore nostrum! Eos, in. Sapiente nulla sint
									voluptatum odit quae sunt!
								</span>
							</div>
							<div>
								<div className='font-bold text-base pb-5'>Location</div>
								<Image src={mapView} width='100%' alt='notFound' />
							</div>

							{/* ____________________review ___________________________ */}
							<div>
								<div className='font-bold text-base pb-5'>Review</div>
								<div className='flex flex-col  pb-6'>
									<span className='flex gap-2 items-center font-bold text-base'>
										<PiUserCircleBold size={20} />
										Sanam Ishtiaq
									</span>
									<span className='font-normal text-xs'>
										Lorem ipsum dolor sit amet consectetur. Diam sed in tortor
										interdum non. Enim nisl nisl tellus urna elit nulla sodales
										felis. Vel sed turpis blandit sagittis. Auctor tincidunt
										ornare sed amet.
									</span>
								</div>
								<div className='flex flex-col pb-6'>
									<span className='flex gap-2 items-center font-bold text-sm '>
										<PiUserCircleBold size={20} />
										Sanam Ishtiaq
									</span>
									<span className='font-normal text-xs'>
										Lorem ipsum dolor sit amet consectetur. Diam sed in tortor
										interdum non. Enim nisl nisl tellus urna elit nulla sodales
										felis. Vel sed turpis blandit sagittis. Auctor tincidunt
										ornare sed amet.
									</span>
								</div>
							</div>
							<div className=''>
								<span className='font-bold text-base '>Give them a Rating</span>
								<textarea
									placeholder='Type Your Comment Here'
									className='form-textarea'
								/>

								<div>
									<button className='btn text-sm'>Post</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* box images */}
				<div className=' box-2-mob  '>
					<div>
						<Image
							src={Rectangle1}
							width='100%'
							height='127px'
							alt='notFound'
						/>
					</div>
					<div>
						<Image
							src={Rectangle2}
							width='100%'
							height='127px'
							alt='notFound'
						/>
					</div>
					<div>
						<Image
							src={Rectangle3}
							width='100%'
							height='127px'
							alt='notFound'
						/>
					</div>
					<div>
						<Image
							src={Rectangle4}
							width='100%'
							height='127px'
							alt='notFound'
						/>
					</div>
					<div>
						<Image
							src={Rectangle5}
							width='100%'
							height='127px'
							alt='notFound'
						/>
					</div>
					<div>
						<Image
							src={Rectangle6}
							width='100%'
							height='127px'
							alt='notFound'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsBoxMob;
