import './MobileNavMenu.css';
import logoHead from '../../Images/logoHead.png';
import hamburg from '../../Images/VectorMob.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineHome, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { SlNotebook } from 'react-icons/sl';


const MobileNavMenu = ({ setIsMobileNav, isMobileNav, setIsShow }) => {
	const router = useRouter();
	return (
		<div className='mainRoot relative'>
			<div
				className='absolute right-8 top-4 '
				onClick={() => setIsMobileNav(!isMobileNav)}>
				<Image src={hamburg} alt='' />
			</div>

			<div className='flex flex-col justify-center items-center gap-y-20 pt-5'>
				<span className='navLink relative'>
					<Link href='/' onClick={() => setIsShow(false)}>
						<span className='flex gap-1 items-center text-base hover:text-green-500'>
							<AiOutlineHome size={22} /> Home
						</span>
					</Link>
				</span>
				<span className='navLink relative'>
					<Link href='/listing' onClick={() => setIsShow(false)}>
						<span className='flex gap-1 items-center text-base hover:text-green-500'>
							<AiOutlineUnorderedList size={22} f />
							Listing
						</span>
					</Link>
				</span>
				<span className='navLink relative'>
					<Link href='/posting' onClick={() => setIsShow(false)}>
						<span className='flex gap-1 items-center text-base hover:text-green-500'>
							<SlNotebook size={22} />
							Posting
						</span>
					</Link>
				</span>
				<span className='navLink relative'>
					<Link href='/buy-and-sell' onClick={() => setIsShow(true)}>
						<span className='flex gap-1 items-center text-base hover:text-green-500'>
							<BsBagCheck size={22} />
							Buy & Sell
						</span>
					</Link>
				</span>
			</div>
		</div>
	);
};

export default MobileNavMenu;
