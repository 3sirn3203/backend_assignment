/**
 * Asynchronous programming
 */
function longWork() {
    const now = new Date();
    const milliseconds = now.getTime();
    const afterTwoSeconds = milliseconds + 2000;

    while (new Date().getTime() < afterTwoSeconds) {
        // busy wait
    }
    console.log('complete long-work');
}
// Synchronous function call
console.log(`hello`);
longWork();
console.log('world');
console.log(`=====================`);

// Asynchronous function call
console.log(`hello`);
setTimeout(() => console.log(`complete long-work`), 2000);
console.log('world');

// Callback hell
function waitAndRun2() {
    setTimeout(() => {
        console.log(`complete1`);
        setTimeout(() => {
            console.log(`complete2`);
            setTimeout(() => {
                console.log(`complete3`);
            }, 2000);
        }, 2000);
    }, 2000);
}
waitAndRun2();

// Async / Await
