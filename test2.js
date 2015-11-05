function a(b) {

	console.log(b);

	b = function c() {
		b = 2;
		c = 3;
		console.log(b);
		console.log(c);
	};

	console.log(b());
};

console.log(a(0));