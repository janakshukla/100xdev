/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
const mypromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, n*1000);
})

return mypromise
}

module.exports = wait;
