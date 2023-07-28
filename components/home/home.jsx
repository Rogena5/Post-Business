'use client';
import React from 'react';
import './home.css';
import Homeheader from './Homeheader';
import HomeSectionA from './HomeSectionA';
import HomeSectionB from './HomeSectionB';
import HomeSectionC from './HomeSectionC';
import HomeSectionD from './HomeSectionD';
import Cspa from '../../Images/Cspa.png';
import Crest from '../../Images/Crest.png';
import { useIsMobile } from '@/hooks/useIsMobile';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Home = () => {
	const isMobile = useIsMobile();
	// Define a function to handle scrolling within each carousel container
	const handleScrollLeft = (containerId) => {
		const container = document.getElementById(containerId);
		container.scrollLeft -= 200; // Adjust the scroll distance as needed
	};

	const handleScrollRight = (containerId) => {
		const container = document.getElementById(containerId);
		container.scrollLeft += 200; // Adjust the scroll distance as needed
	};

	return (
		<div className='home-root '>
			<Homeheader />
			<HomeSectionA />
			<HomeSectionB />
			{/*________________________________________////////////////////// section ONE  ///////////////////_____________________________________________________  */}

			<section
				style={{
					backgroundImage: `url(${Cspa.src})`,
				}}
				className='flex items-center justify-center w-full flex-col pt-16 bg-no-repeat bg-cover '>
				{!isMobile ? (
					<div className=' container flex justify-between'>
						<span className='text-3xl'>
							Find the Best <b>Massage centers</b>
						</span>
						<span className='font-semibold text-lg text-center'>View All</span>
					</div>
				) : (
					<div className=' container flex justify-between'>
						<span className='text-base'>
							Find the Best <b>Massage centers</b>
						</span>
					</div>
				)}
				{/* ____________________________________________carousel_______________________ */}

				<div className='section-c-content flex items-center justify-center gap-x-9'>
					{!isMobile && (
						<IoIosArrowBack
							size={40}
							onClick={() => handleScrollLeft('moveCaro1')}
						/>
					)}

					<div
						id='moveCaro1'
						className=' flex items-center justify-between container scroll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-x-14'>
						<HomeSectionC name='Restaurants' />
					</div>
					{!isMobile && (
						<IoIosArrowForward
							size={40}
							onClick={() => handleScrollRight('moveCaro1')}
						/>
					)}
				</div>
			</section>
			{/* ______________________________________________////////////////////// section two  ///////////////////_____________________________________________________________ */}
			<section className='flex items-center justify-center flex-col  '>
				{!isMobile ? (
					<div className=' container flex justify-between'>
						<span className='text-3xl'>
							Find the Best <b>Massage centers</b>
						</span>
						<span className='font-semibold text-lg'>View All</span>
					</div>
				) : (
					<div className=' container flex justify-between'>
						<span className='text-base'>
							Find the Best <b>Massage centers</b>
						</span>
					</div>
				)}
				{/* ____________________________________________carousel_______________________ */}

				<div className=' flex items-center justify-center gap-x-9'>
					{!isMobile && (
						<IoIosArrowBack
							size={40}
							onClick={() => handleScrollLeft('moveCaro1')}
						/>
					)}
					<div
						id='moveCaro2'
						className=' sectionC-box-wrapper flex items-center justify-between container scroll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-x-14'>
						<HomeSectionC name='Spas & Saloons' />
					</div>
					{!isMobile && (
						<IoIosArrowForward
							size={40}
							onClick={() => handleScrollRight('moveCaro1')}
						/>
					)}
				</div>
			</section>

			{/* ___________________________________________________////////////////////// section THREE  ///////////////////________________________________________________________ */}

			<section
				style={{ backgroundImage: `url(${Crest.src})` }}
				className='flex items-center justify-center w-full flex-col pt-16 bg-no-repeat bg-cover'>
				{!isMobile ? (
					<div className=' container flex justify-between'>
						<span className='text-3xl'>
							Find the Best <b>Massage centers</b>
						</span>
						<span className='font-semibold text-lg'>View All</span>
					</div>
				) : (
					<div className=' container flex justify-between'>
						<span className='text-base'>
							Find the Best <b>Massage centers</b>
						</span>
					</div>
				)}

				{/* ____________________________________________carousel_______________________ */}

				<div className=' flex items-center justify-center gap-x-9'>
					{!isMobile && (
						<IoIosArrowBack
							size={40}
							onClick={() => handleScrollLeft('moveCaro1')}
						/>
					)}
					<div
						id='moveCaro3'
						className=' sectionC-box-wrapper flex items-center justify-between container scroll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-x-14'>
						<HomeSectionC name='Massage centers' />
					</div>
					{!isMobile && (
						<IoIosArrowForward
							size={40}
							onClick={() => handleScrollRight('moveCaro1')}
						/>
					)}
				</div>
			</section>

			{/*  _______________________________________________________*/}
			<HomeSectionD />
		</div>
	);
};

export default Home;
