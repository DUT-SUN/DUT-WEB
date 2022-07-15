const calc = function() {
    let a = 2;
    return {
        add: function(source, num) {
            return source + num + a;
        },
    
        sub: function(source, num) {
            return souce - num - a;
        },
    
        multi: function(source, num) {
            return source * num * a;
        },
    
        divide: function(source, num) {
            try {
                return source / num / a;
            } catch(err) {
                return console.error(err);
            }
        },
    }
};
// exports = calc;
// module.exports = calc;
// module.exports = {} exports = calc

console.log(module);