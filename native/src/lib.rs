use neon::prelude::*;

// Hello function to return a simple string
fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string("hello node"))
}

// Fibonacci function to compute Fibonacci numbers
fn fibonacci_rec(mut cx: FunctionContext) -> JsResult<JsNumber> {
    // Get the first argument as a number
    let n = cx.argument::<JsNumber>(0)?.value() as u32;

    // Calculate Fibonacci
    let result = fib(n);

    // Return the result as a JavaScript number
    Ok(cx.number(result as f64))
}

// A simple Rust function to calculate Fibonacci numbers
fn fib(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fib(n - 1) + fib(n - 2),
    }
}

// Iterative Fibonacci function in Rust
fn fibonacci_iter(mut cx: FunctionContext) -> JsResult<JsNumber> {
    let n = cx.argument::<JsNumber>(0)?.value() as u32;

    let mut a = 0;
    let mut b = 1;

    for _ in 0..n {
        let temp = a;
        a = b;
        b = temp + b;
    }

    Ok(cx.number(a as f64))
}


// Register the functions in the module
register_module!(mut cx, {
    cx.export_function("hello", hello)?;
    cx.export_function("fibonacciIter", fibonacci_iter)?;
    cx.export_function("fibonacciRec", fibonacci_rec)?;
    Ok(())
});