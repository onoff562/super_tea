var simple_math = require('advance_math')

function add(x, y){
	return x + y;
}

function subtract(x, y){
	return x - y;
}

module.exports = {
	addition: add,
	subtraction: subtract
}
