'use client';
import logoHead from '../Images/logoHead.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineHome, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { SlNotebook } from 'react-icons/sl';

const Navbar = ({ setIsShow, setIsMobileNav }) => {
	const router = useRouter();

	return (
		<>
			<div className=' h-[78px] px-20 shadow-md  '>
				<div className=' flex justify-between items-center'>
					<div>
						<Image src={logoHead} alt='' className='w-20' />
					</div>
					<div className=' flex justify-center items-center gap-20'>
						<span className='navLink relative'>
							<Link href='/' onClick={() => setIsShow(false)}>
								<span className='flex gap-1 items-center  hover:text-green-500'>
									<AiOutlineHome size={22} /> Home
								</span>
							</Link>
						</span>
						<span className='navLink relative'>
							<Link href='/listing' onClick={() => setIsShow(false)}>
								<span className='flex gap-1 items-center  hover:text-green-500'>
									<AiOutlineUnorderedList size={22} f />
									Listing
								</span>
							</Link>
						</span>
						<span className='navLink relative'>
							<Link href='/posting' onClick={() => setIsShow(false)}>
								<span className='flex gap-1 items-center  hover:text-green-500'>
									<SlNotebook size={22} />
									Posting
								</span>
							</Link>
						</span>
						<span className='navLink relative'>
							<Link href='/buy-and-sell' onClick={() => setIsShow(false)}>
								<span className='flex gap-1 items-center  hover:text-green-500'>
									<BsBagCheck size={22} />
									Buy & Sell
								</span>
							</Link>
						</span>
					</div>
					<div className='nav-box-2'>
						{setIsMobileNav(false)}
						<div
							className='flex items-center border-nav '
							onClick={() => router.push('gridView')}>
							<span>Post your Business Here</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
