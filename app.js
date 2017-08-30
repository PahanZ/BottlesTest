let redBottlesKol = +prompt('Enter the number of red bottles', 0);
let redBottles = [];
for (let i = 0; i < redBottlesKol; i++) { 
let redBottlesV = +prompt('Enter the number of liters in ' + i + ' the red bottle', 0);
redBottles.push(redBottlesV); 
}
console.log(redBottles);

let blueBottlesKol = +prompt('Enter the number of blue bottles', 0);
let blueBottles = [];
for (let i = 0; i < blueBottlesKol; i++) { 
blueBottles[i]=0;
}
console.log(blueBottles);

let blueBottlesMax = [];
for (let i = 0; i < blueBottlesKol; i++) { 
let maxLitr = +prompt('Enter the maximum litres ' + i + ' of blue bottles', 0);
blueBottlesMax.push(maxLitr);
}
console.log(blueBottlesMax);


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