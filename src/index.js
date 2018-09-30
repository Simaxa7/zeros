module.exports = function getZerosCount(number) {
  let myNumber = number;
	let zeros = 0;

	for (let i = 1; i < 100; i++) {

		let numberDivider = myNumber / Math.pow(5, i);

		numberDivider >= 1 ? zeros += Math.floor(numberDivider) : i = 100;
	}

	return zeros
}
