function coladera() {
	var numPrimos = new Array(1000);
	numPrimos[0] = false;
	numPrimos[1] = true;
	for (let i=3;i<=1000;i++) {
		numPrimos[i-1] = (i%2!=0);
	}
	for (let i=3;i<=Math.sqrt(1000);i++) {
		for (let j=(i*2);j<=1000;j+=i) {
			numPrimos[j-1] = false;
		}
	}
	for (i=1;i<=1000;i++) {
		if (numPrimos[i-1]==true) {
			console.log(i);	
		}
	}
}
console.log(coladera());