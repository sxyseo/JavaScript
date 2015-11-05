// function a(b) {

// 	console.log(b);

// 	console.log("-----1----");


// 	b = function c() {
// 		b = 2;
// 		c = 3;
// 		console.log("b=");
// 		console.log(b);
// 		console.log("-----3----");
// 		console.log(c);

// 		return "111";
// 	};

// 	console.log("-----2----");

// 	console.log(b());

// 	console.log("-----4----");

// 	return "2222";
// };

// console.log(a(0));
// 
// 
if( true ){
    var aa = 20;
    var bb = 30;
}

function AA(){};
console.log("--1--");
function BB(){};
console.log("--2--");

//var定义的aa,bb以及function定义的AA(),BB()都会被变量提升到window对象下面