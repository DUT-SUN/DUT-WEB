//exports和module.exports
const x = require('./误区配套')
console.log(x)
//没有了user属性因为，本来是module.exports和exports都指向了username后来由于等号赋值，module.username就赋值成了另一个
//而我们打印出的是module.exports
