//
// function add(x, y, f){
// 	return f(x) + f(y);
// }

// console.log(add(-5, 6, Math.abs));


// function pow(x){
// 	return x * x;
// }

// var f =  function(x){
// 	return x * x;
// };

// var arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.map(pow));
// var result = [];
// for(var i = 0; i < arr.length; i++)
// {
// 	result.push(f(arr[i]));
// }

// console.log(result);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// console.log(arr.map(String));


// var arr = [1, 3, 5, 7, 9];
// console.log(arr.reduce(function (x, y) {
//     return x + y;
// })); // 25


// console.log(arr);



// function product(arr) {
// 	return arr.reduce(function(x, y) {
// 		return x * y;
// 	});
// }
// //测试：
// if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
// 	alert('测试通过!');
// } else {
// 	alert('测试失败!');
// };

// console.log(product([1, 2, 3, 4]));
// console.log(product([0, 1, 2]));
// console.log(product([99, 88, 77, 66]));
// 

'use strict'

function string2int(s) {
	return s.split('').reduce(function(x, y) {
		return x * 10 + y * 1;
	}) * 1;
};

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
	if (string2int.toString().indexOf('parseInt') !== -1) {
		alert('请勿使用parseInt()!');
	} else if (string2int.toString().indexOf('Number') !== -1) {
		alert('请勿使用Number()!');
	} else {
		alert('测试通过!');
	}
} else {
	alert('测试失败!');
}


function normalize(arr) {
	return arr.map(function(x) {
		return x[0].toUpperCase() + x.substring(1).toLowerCase();
	});

}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
	alert('测试通过!');
} else {
	alert('测试失败!');
}