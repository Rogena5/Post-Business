import React from 'react';

const PostingFilter = () => {
	const handleFilter = () => {
		if (isFilter === true) {
			setIsFilter(false);
		}
	};
	return (
		<div className='sidebar-root'>
			<div>
				<label htmlFor='state'>State</label>
				<select name='state' id='state'>
					<option value='volvo'></option>
					<option value='saab'>Saab</option>
					<option value='mercedes'>Mercedes</option>
					<option value='audi'>Audi</option>
				</select>
			</div>
			<div>
				<label htmlFor='city'>City</label>
				<select name='city' id='city'>
					<option value='volvo'></option>
					<option value='saab'>Saab</option>
					<option value='mercedes'>Mercedes</option>
					<option value='audi'>Audi</option>
				</select>
			</div>

			<button className='btn btn-block' onClick={handleFilter}>
				Search
			</button>
		</div>
	);
};

export default PostingFilter;
