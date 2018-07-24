class Utils {

	getMonthName(date) {
		const monthNames = [
			'January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'
		];

		return monthNames[date.getMonth()];
	}

	getYearName(date) {
		return date.getFullYear();
	}
}

export default Utils;