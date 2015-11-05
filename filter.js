'use strict'

function log(x) {
	return console.log(x);
};


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.filter(function(x) {
	return x % 2 !== 0;
}));

var arr = ['A', '', 'B', null, undefined, 'c', ' '];
log(arr.filter(function(index) {
	return index && index.trim();
}));



var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function get_primes(arr) {
	return arr.filter(function(x) {
		var ss = x;
		//ss = parseInt(Math.sqrt(x));
		if (x == 2) {
			return 1;
		};

		for (var i = 2; i * i <= ss; i++) {
			if ((x == i) || (x % i != 0)) {
				// log(x);
				// log(i);
				return 1;
			} 
		};
	});
}

log(get_primes(arr));

log(arr.toString());