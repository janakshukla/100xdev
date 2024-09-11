/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSumTime(n) {
    const startTime = performance.now(); // Start the timer

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    const endTime = performance.now(); // End the timer

    const timeTaken = (endTime - startTime) / 1000; // Calculate time in seconds
    console.log(`Sum from 1 to ${n} is: ${sum}`);
    console.log(`Time taken to calculate the sum from 1 to ${n}: ${timeTaken} seconds`);
    
    return timeTaken;
}

// Running the function for different values of n
calculateSumTime(100);            // Sum from 1 to 100
calculateSumTime(100000);         // Sum from 1 to 100000
calculateSumTime(1000000000);     // Sum from 1 to 1,000,000,000
