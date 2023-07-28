'use client'
import React, {useState} from 'react';
import './sidebar.css';
import { useIsMobile } from '@/hooks/useIsMobile';
import filterIcon from '../../Images/filterMob.png';
import Image from 'next/image';

const RangeSlider = () => {
	const [sliderValue, setSliderValue] = useState(25);

	const handleChange = (event) => {
		setSliderValue(event.target.value);
	};

	return (
		<div>
			<div className='relative pb-10'>
				<input
					type='range'
					min='0'
					max='3000'
					value={sliderValue}
					step='10'
					onChange={handleChange}
				/>
				<span className='absolute -top-6 left-0'>{sliderValue}</span>
			</div>
		</div>
	);
};



const SideBar = ({ isFilter, setIsFilter, setIsMobileNav }) => {
	 const value = 40;
		const max = 1000;
	const isMobile = useIsMobile();
	const handleFilter = () => {
		if (isFilter === true) {
			setIsFilter(false);
			
		}
	};
	return (
		<>
			{!isMobile ? (
				<>
					<div className='sidebar-root'>
						<div>
							<label htmlFor='category'>Keywords: </label>
							<select name='category' id='category'>
								<option value='volvo'></option>
								<option value='saab'>Saab</option>
								<option value='mercedes'>Mercedes</option>
								<option value='audi'>Audi</option>
							</select>
						</div>
						<div>
							<label htmlFor='category'>Category: </label>
							<select name='category' id='category'>
								<option value='volvo'></option>
								<option value='saab'>Saab</option>
								<option value='mercedes'>Mercedes</option>
								<option value='audi'>Audi</option>
							</select>
						</div>
						<div>
							<label htmlFor='state'>State: </label>
							<select name='state' id='state'>
								<option value='volvo'></option>
								<option value='saab'>Saab</option>
								<option value='mercedes'>Mercedes</option>
								<option value='audi'>Audi</option>
							</select>
						</div>
						<div>
							<label htmlFor='city'>City: </label>
							<select name='city' id='city'>
								<option value='volvo'></option>
								<option value='saab'>Saab</option>
								<option value='mercedes'>Mercedes</option>
								<option value='audi'>Audi</option>
							</select>
						</div>
						<div>
							<label htmlFor='zip' className='pb-6'>
								Distance from zipcode:
							</label>
							<RangeSlider/>
							
						</div>
						

						<button onClick={handleFilter} className='btn'>Search</button>
					</div>
				</>
			) : (
				<>
					<div className='sidebar-root-mob relative'>
						{/* {setIsMobileNav(false)} */}
						<div
							className='absolute left-0 top-0 p-4'
							onClick={() => {
								setIsFilter(!setIsFilter);
							}}>
							<Image src={filterIcon} alt='' />
						</div>

						<div className='pt-10'>
							<label htmlFor='category'>Keywords: </label>
							<select name='category' id='category'>
								<option value='volvo'></option>
								<option value='saab'>Saab</option>
								<option value='mercedes'>Mercedes</option>
								<option value='audi'>Audi</option>
							</select>
						</div>
						<div>
							<label htmlFor='category'>Category: </label>
							<select name='category' id='category'>
								<option value='volvo'></option>
								<option value='saab'>Saab</option>
								<option value='mercedes'>Mercedes</option>
								<option value='audi'>Audi</option>
							</select>
						</div>
						<div>
							<label htmlFor='state'>State: </label>
							<select name='state' id='state'>
								<option value='volvo'></option>
								<option value='saab'>Saab</option>
								<option value='mercedes'>Mercedes</option>
								<option value='audi'>Audi</option>
							</select>
						</div>
						<div>
							<label htmlFor='city'>City: </label>
							<select name='city' id='city'>
								<option value='volvo'></option>
								<option value='saab'>Saab</option>
								<option value='mercedes'>Mercedes</option>
								<option value='audi'>Audi</option>
							</select>
						</div>
						<div>
							<label htmlFor='zip'>Distance from zipcode: </label>
							<input type='number' id='zip' />
						</div>

						<button onClick={handleFilter}>Search</button>
					</div>
				</>
			)}
		</>
	);
};

export default SideBar;
