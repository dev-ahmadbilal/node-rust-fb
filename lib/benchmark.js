var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var vanilla = require('./vanilla');
var nativeRustNeon = require('../native');
const FB_Number = 40

suite
	.add('vanilla.fibonacciIter(40)\t\t', function () {
		vanilla.fibonacciIter(FB_Number);
	})
	.add('nativeRustNeon.fibonacciIter(40)\t', function () {
		nativeRustNeon.fibonacciIter(FB_Number);
	})
	.add('vanilla.fibonacci(40)\t\t', function () {
		vanilla.fibonacciRec(FB_Number);
	})
	.add('nativeRustNeon.fibonacci(40)\t', function () {
		nativeRustNeon.fibonacciRec(FB_Number);
	})
	.on('complete', function () {
		this.forEach(item => console.log(item.toString()));
	})
	.run();

