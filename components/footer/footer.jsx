import React from 'react';
import logoFoot from '../../Images/logoFoot.png';
import fb from '../../Images/Vector.png';
import insta from '../../Images/Vector (2).png';
import whatsapp from '../../Images/Vector (3).png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Footer = () => {
	const router = useRouter()
	return (
		<div className=' bg-[#F5F5F5] py-12'>
			<div className='footer-root flex justify-between items-center container '>
				<div className='section-box flex justify-between gap-8'>
					<div className='flex flex-col gap-y-9'>
						<span className='font-bold'>Explore</span>
						<span>Categories</span>
						<span>Listings</span>
						<span>Postings</span>
					</div>
					<div className='flex flex-col gap-y-9'>
						<span className='font-bold'>Company</span>
						<span>Contact Us</span>
						<span onClick={()=> router.push("terms-ans-conditions")}>Terms and Conditions</span>
					</div>
				</div>
				<div className='footer-image'>
					<Image src={logoFoot} alt='notFound' width='256px' height='256px' />
				</div>

				<div className='social-footer flex flex-col gap-y-9 justify-between'>
					<span className='font-bold'>Find Us on Social Media</span>
			

						<div className='flex justify-between '>
							<Image src={fb} width='20px' height='20px' alt='notFound' />
							<span className='font-normal text-small'>
								PostYourBiz@mail.com
							</span>
						</div>

						<div className='flex justify-between '>
							<Image src={insta} width='20px' height='20px' alt='notFound' />
							<span className='font-normal text-small'>Post_Your_Biz_256</span>
						</div>

						<div className='flex justify-between '>
							<Image src={whatsapp} width='20px' height='20px' alt='notFound' />
							<span className='font-normal text-small'>+20 015 843 5278</span>
						</div>

				
				</div>
			</div>
		</div>
	);
};

export default Footer;
