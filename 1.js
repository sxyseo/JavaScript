'use strict';

var fn = x => x * x;


//alert('你的浏览器支持ES6的Array Function!');


x => {
	if (x > 0) {
		return x * x;
	} else {
		return -x * x;
	}
}


// 两个参数:
//(x, y) => x * x + y * y;

// 无参数:
//	() => 3.14;

// 可变参数:
// 	(x, y, ...rest) => {
// 	var i, sum = x + y;
// 	for (i = 0; i < rest.length; i++) {
// 		sum += rest[i];
// 	}
// 	return sum;
// }


var obj = {
	birth: 1990,
	getAge: function() {
		var b = this.birth; // 1990 
		var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象 
		return fn();
	}
};
console.log(obj.getAge()); // 25