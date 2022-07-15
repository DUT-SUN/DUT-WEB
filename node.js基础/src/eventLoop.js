console.log('script start');

async function func1() {
    console.log('start func1');
    await func2();
    console.log('end func1');
}

async function func2() {
    console.log('start func2');
}

setTimeout(() => {
    console.log('timer1');
}, 0);

setTimeout(() => {
    console.log('timer2');
}, 5);

setImmediate(() => {
    console.log('set immediate');
});

func1();
process.nextTick(() => {
    console.log('process nextTick');
});

new Promise((resolve, reject) => {
    console.log('promise 1');
    resolve();
    console.log('promise 2');
}).then(() => {
    console.log('promise then');
});

console.log('end script');