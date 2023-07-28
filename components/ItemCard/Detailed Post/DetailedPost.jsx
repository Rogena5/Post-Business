import React from 'react';
import DetailsBox from '../DetailsBox/DetailsBox';
import { useIsMobile } from '@/hooks/useIsMobile';
import DetailsBoxMob from '../DetailsBox/DetailsBoxMob';

const DetailedPost = () => {
	const isMobile = useIsMobile();
	return (
		<div>
			{!isMobile ? (
				<>
					
					<DetailsBox />
				</>
			) : (
				<>
					<DetailsBoxMob />
				</>
			)}
		</div>
	);
};

export default DetailedPost;
