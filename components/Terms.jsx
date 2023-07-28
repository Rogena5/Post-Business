'use client'
import React from 'react';
import HeaderImg from '../Images/homeHeader.png';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';
function Terms() {
	const isMobile = useIsMobile()
	return (
		<>
			<div className='container '>
				<div className='py-16 relative'>
					<Image src={HeaderImg} alt='not found' className='rounded-md w-full ' />
					
					{!isMobile? (<><span className='text-white font-semibold text-4xl absolute bottom-[50%] inset-x-2.5  text-center'>
						Terms & Conditions
					</span></>): (<><span className='text-white font-semibold text-base absolute bottom-[50%] inset-x-2.5  text-center'>
						Terms & Conditions
					</span></>)}

				</div>
				<div className='pb-7'>
					Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et
					tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a
					libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum
					amet integer cursus dictum. Pretium nulla nullam magna in magna
					pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum
					ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in
					aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi
					purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi
					faucibus donec in nisl id. Cursus congue viverra sed malesuada sed
					habitasse amet. Odio gravida felis elit scelerisque ornare ultrices.
					Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac
					vitae in et tellus erat facilisi. Sed risus turpis molestie
					ullamcorper.
				</div>
				<div className='pb-7'>
					Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et
					tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a
					libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum
					amet integer cursus dictum. Pretium nulla nullam magna in magna
					pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum
					ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in
					aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi
					purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi
					faucibus donec in nisl id. Cursus congue viverra sed malesuada sed
					habitasse amet. Odio gravida felis elit scelerisque ornare ultrices.
					Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac
					vitae in et tellus erat facilisi. Sed risus turpis molestie
					ullamcorper.
				</div>
				<div className='pb-7'>
					Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et
					tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a
					libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum
					amet integer cursus dictum. Pretium nulla nullam magna in magna
					pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum
					ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in
					aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi
					purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi
					faucibus donec in nisl id. Cursus congue viverra sed malesuada sed
					habitasse amet. Odio gravida felis elit scelerisque ornare ultrices.
					Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac
					vitae in et tellus erat facilisi. Sed risus turpis molestie
					ullamcorper.
				</div>
				<div className='pb-7'>
					Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et
					tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a
					libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum
					amet integer cursus dictum. Pretium nulla nullam magna in magna
					pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum
					ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in
					aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi
					purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi
					faucibus donec in nisl id. Cursus congue viverra sed malesuada sed
					habitasse amet. Odio gravida felis elit scelerisque ornare ultrices.
					Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac
					vitae in et tellus erat facilisi. Sed risus turpis molestie
					ullamcorper.
				</div>
				
			</div>
		</>
	);
}

export default Terms;
