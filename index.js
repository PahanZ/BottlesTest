let redBottles;
let blueBottles;
let blueBottlesMax;
let computation;

let x = (...n) => {
	redBottles = n;
}
x(2,2,4);
// x(1,1);

let y = (...m) => {
	blueBottles = m;
}
y(0,0,0);
// y(1,0);

let z = (...l) => {
	blueBottlesMax=l;
}
z(3,1,3);
// z(1,2,3,4);

let test = (i) => {
	return i == 0;
}

console.log(redBottles);
console.log(blueBottles);
if (blueBottles.length == blueBottlesMax.length && blueBottles.every(test)) {
	computation = () => {
	let j = 0;
	let k = 0;
	start:
	for (let i = 0; i < redBottles.length; i++ ) { 
		while ( j < blueBottles.length || k < blueBottlesMax.length) { 
			if (redBottles[i] == 0) {
				continue start; 
			} else {
				redBottles[i]--;
				console.log(redBottles[i]);
				blueBottles[j]++;
				console.log(blueBottles[j]);
			};
			if (blueBottles[j] == blueBottlesMax[k]) {
				k++;
				j++;
				continue;
				if (k == blueBottlesMax.length) {
					break
				}

			}
		} 
	}
	console.log(redBottles);
	console.log(blueBottles);
}
} else {
	console.log('input error');
}
computation();

