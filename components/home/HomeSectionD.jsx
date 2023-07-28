import { useIsMobile } from '@/hooks/useIsMobile';
import React from 'react';

const HomeSectionD = () => {
	const isMobile = useIsMobile();
	return (
		<section>
			<form className='form'>
				<div className='pb-11'>
					{!isMobile ? (
						<div className='text-center text-4xl font-bold'>Contact Us</div>
					) : (
						<div className='text-center text-xl font-bold'>Contact Us</div>
					)}

					<label className='form-label font-medium'>Email:</label>
					<input type='text' id='email' className='form-input' />
					<label className='form-label font-medium'>Massage:</label>
					<input type='text' id='msg' className='form-textarea' />
				</div>
				<div>
					<button className='btn btn-block'>Send</button>
				</div>
			</form>
		</section>
	);
};

export default HomeSectionD;
