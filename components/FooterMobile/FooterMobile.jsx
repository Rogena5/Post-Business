// import React from 'react'
// import "./footerMobile.css"

// const FooterMobile = () => {
//   return (
//     <div className='footer-mobile-root'>
//       <span>All Rights Reserved</span>
//     </div>
    
//   )
// }

// export default FooterMobile
import React from 'react';
import logoFoot from '../../Images/logoFoot.png';
import fb from '../../Images/Vector.png';
import insta from '../../Images/Vector (2).png';
import whatsapp from '../../Images/Vector (3).png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const FooterMobile = () => {
	const router = useRouter();
	return (
		<div className=' bg-[#F5F5F5] py-12'>
			<div className='footer-root flex flex-col justify-between items-center text-center container '>
				<div className='section-box flex flex-col justify-between gap-7'>
					<div className='flex flex-col gap-y-3.5'>
						<span className='font-bold text-xl'>Explore</span>
						<span>Categories</span>
						<span>Listings</span>
						<span>Postings</span>
					</div>
					<div className='flex flex-col gap-y-3.5'>
						<span className='font-bold'>Company</span>
						<span>Contact Us</span>
						<span onClick={() => router.push('terms-ans-conditions')}>
							Terms and Conditions
						</span>
					</div>
				</div>
				<div className='footer-image'>
					<Image src={logoFoot} alt='notFound' width='113px' height='113px' />
				</div>

				<div className='social-footer flex flex-col gap-y-9 justify-between'>
					<span className='font-bold'>Find Us on Social Media</span>
					<div className='flex justify-between '>
						<Image src={fb} width='30px' height='30px' alt='notFound' />
						<Image src={insta} width='30px' height='30px' alt='notFound' />
						<Image src={whatsapp} width='30px' height='30px' alt='notFound' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterMobile;


