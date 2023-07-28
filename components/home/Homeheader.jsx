'use client';
import React from 'react';
import './homeHeader.css';
import homeHeader from '../../Images/homeHeader.png';
import headerTextunderline from '../../Images/headerTextUnderline.png';
import { useIsMobile } from '../../hooks/useIsMobile';
import Image from 'next/image';

const Homeheader = () => {
	const isMobile = useIsMobile();
	return (
		<section
			style={{ backgroundImage: `url(${homeHeader.src})` }}
			className='flex items-center justify-center w-full h-screen flex-col gap-y-8 bg-no-repeat bg-cover'>
			{!isMobile ? (
				<>
					<div className='headerText-style relative'>
						<div className='text-white'>
							<h1 className='flex items-center gap-2'>
								<span
									style={{ color: '#5DE296' }}
									className='font-bold text-4xl'>
									Find
								</span>
								<span className='text-4xl font-base'>the</span>
								<span className='font-bold text-4xl'>Best Spas, Message</span>
								<span className='text-4xl font-base'>and</span>
								<span className='font-bold text-4xl'>Restaurant</span>
								<span className='text-4xl font-base'>around you</span>
							</h1>

							<Image
								src={headerTextunderline}
								className='headerTextUnder-style'
								alt='notFound'
							/>
						</div>
					</div>

					<div className=' headerFilter container'>
						<div>
							<label htmlFor='category'>Category</label>
							<select name='category' id='category'>
								<option value='volvo'>Select Category</option>
								<option value='saab'>Saab</option>
								<option value='mercedes'>Mercedes</option>
								<option value='audi'>Audi</option>
							</select>
						</div>
						<div>
							<label htmlFor='state'>State</label>
							<select name='state' id='state'>
								<option value='volvo'>Select State</option>
								<option value='saab'>Saab</option>
								<option value='mercedes'>Mercedes</option>
								<option value='audi'>Audi</option>
							</select>
						</div>
						<div>
							<label htmlFor='city'>City</label>
							<select name='city' id='city'>
								<option value='volvo'>Select City</option>
								<option value='saab'>Saab</option>
								<option value='mercedes'>Mercedes</option>
								<option value='audi'>Audi</option>
							</select>
						</div>
						<div>
							<label htmlFor='zip'>Zip</label>
							<input type='number' id='zip' placeholder='Postal Code' />
						</div>
						<div>
							<button className='btn' alt='notFound'>
								Search
							</button>
						</div>
					</div>
				</>
			) : (
				<div className='flex  flex-col items-center justify-center text-white'>
					<span style={{ color: '#5DE296' }} className='font-bold text-2xl'>
						Find
					</span>
					<div className='flex gap-2 items-center'>
						<span className='font-normal text-2xl'>the</span>
						<span className='font-bold text-xl'>Best Spas, Message</span>
					</div>
					<div className='flex gap-2 items-center'>
						<span className='font-normal text-2xl'>and</span>
						<span className='font-bold text-xl'>Restaurant</span>
						<span className='font-normal text-2xl'>around you</span>
					</div>
				</div>
			)}
		</section>
	);
};

export default Homeheader;
