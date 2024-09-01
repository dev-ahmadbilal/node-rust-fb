function fibonacciIter(n) {
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return a;
}

function fibonacciRec(n) {
	return n <= 2 ?
		1 : (fibonacciRec(n - 1) + fibonacciRec(n - 2));
}

module.exports = {
	fibonacciIter: fibonacciIter,
	fibonacciRec: fibonacciRec
};
