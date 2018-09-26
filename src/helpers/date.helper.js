export const getMonthName = (date) =>{
	const monthNames = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];

	return monthNames[date.getMonth()];
};

export const getThisMonth = () =>{
    let today = new Date();
	return today.getMonth();
};

export const getThisYear = () =>{
    let today = new Date();
    return today.getFullYear();
};
