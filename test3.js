'use strict';

function log(x) {
	return console.log(x);
};

// function lazy_sum(arr) {
//     var sum = function () {
//         return arr.reduce(function (x, y) {
//             return x + y;
//         });
//     }
//     return sum;
// }


// var arr = [1,2,3,4,5];
// var f = lazy_sum(arr);
// log(f);
// log(f());


// var f1 = lazy_sum([1, 2, 3, 4, 5]);
// var f2 = lazy_sum([1, 2, 3, 4, 5]);

// log(f1);
// log(f2);

// log(f1 === f2);; // false

// log(f1());
// log(f2());



function count() {
    var arr = [];
    for (var i=1; i<=4; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
var f4 = results[3];

log(f1());
log(f2());
log(f3());
log(f4());



function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
};


var c1 = create_counter();
log(c1.inc()); // 1
log(c1.inc()); // 2
log(c1.inc()); // 3

var c2 = create_counter(10);
log(c2.inc()); // 11
log(c2.inc()); // 12
log(c2.inc()); // 13



