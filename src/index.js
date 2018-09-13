module.exports = function getZerosCount(number) {
  
	var zeros=0;

	for (let i = 1; i < 13; i++) {
		let numberDivide = number / Math.pow(5,i);
		
		if (numberDivide >= 1){
			zeros += Math.floor(numberDivide);
		}else{
			break;
		}
	}
	return zeros
}
