import React, { useState } from 'react';
import logo from '../../Images/logoMob.png';
import hamburg from '../../Images/VectorMob.png';
import filterIcon from '../../Images/filterMob.png';
import Image from 'next/image';
import SideBar from '../SideBar/SideBar';

const MobileNav = ({ setIsMobileNav, isMobileNav }) => {
	const [isFilter, setIsFilter] = useState(false);
	return (
		<>
			{isFilter && (
				<SideBar
					setIsFilter={setIsFilter}
					isFilter={isFilter}
					setIsMobileNav={setIsMobileNav}
				/>
			)}

			<div className='flex items-center justify-between px-5'>
				<div onClick={() => setIsFilter(true)}>
					<Image src={filterIcon} alt='notFound' />
				</div>
				<div>
					<Image src={logo} alt='notFound' />
				</div>
				<div onClick={() => setIsMobileNav(!isMobileNav)}>
					<Image src={hamburg} alt='' />
				</div>
			</div>
		</>
	);
};

export default MobileNav;
