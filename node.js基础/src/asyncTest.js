const fs = require('fs');

console.log('start script');

setTimeout(() => {
    console.log('timer 1');
    process.nextTick(() => {
        console.log('next tick 2');
    })
}, 0);

setTimeout(() => {
    console.log('timer 2');
}, 1000);

fs.readFile('./public/data.txt', 'utf-8', (err, data) => {
    if (err) return console.error(err);
    else {
        console.log(data);
    }
}
);

setImmediate(() => {
    console.log('setImmediate');
    process.nextTick(() => {
        console.log('next tick 3');
    });
    new Promise((resolve, reject) => {
        console.log('enter promise2');
        resolve();
        console.log('end promise2');
    }).then(() => {
        console.log('then2');
    })
});

process.nextTick(() => {
    console.log('next tick');
});

new Promise((resolve, reject) => {
    console.log('enter promise');
    resolve();
    console.log('end promise');
}).then(() => {
    console.log('then');
})

console.log('end script');