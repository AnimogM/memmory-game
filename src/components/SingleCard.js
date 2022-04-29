import React from "react";

const SingleCard = ({ back, src, handleClick }) => {
	const handleChange = (value) => {
		handleClick(value)
	}
	return (
		<div className="flex">
			<img className='img font' src={src} alt="font" />
			<img onClick={()=> handleChange(src)} className="img back" src={back} alt="back" />
		</div>
	);
};

export default SingleCard;
