var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
console.log(count); // 3



// 'use strict'
// var xiaoming = {
// 	name: '小明',
// 	birth: 1990,
// 	age: function() {
// 		var y = new Date().getFullYear();
// 		return y - this.birth;
// 	}
// };
// var fn = xiaoming.age;
// console.log(fn());
// console.log("----------");
// console.log(xiaoming.age);
// console.log(xiaoming.age());

// var xiao = {
// 	name: '小',
// 	birth: 1990,
// 	age: function() {
// 		var y = new Date().getFullYear();
// 		return y - this.birth;
// 	}
// };

// console.log(xiao.age);
// console.log(xiao.age());

// function getAge() {
// 	var y = new Date().getFullYear();
// 	//	return y - this.birth;
// }

// var ming = {
// 	name: '明',
// 	birth: 1990,
// 	age: getAge
// };

// console.log('-----NaN-----');
// console.log(ming.age());
// console.log(getAge.apply(xiaoming, []));
// console.log('-------------');
// console.log('-------------');
// var leyiwo = {
// 	name: 'leyiwo',
// 	birth: 1991,
// 	age: function() {
// 		var that = this;

// 		function getAgeFromBirth() {
// 			var y = new Date().getFullYear();
// 			return y - that.birth;
// 		}
// 		return getAgeFromBirth();
// 	}
// }

// console.log(leyiwo.age());


