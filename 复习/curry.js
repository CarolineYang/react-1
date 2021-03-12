function curry(fn,cagrs) {
    return function () {
        let args = [].slice.call(arguments);
        // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
        if(cagrs !==undefined){
            args = args.concat(cagrs)
        }
        // 递归调用
        if(args.length<fn.length){
            return curry(fn,args)
        }
        return fn.apply(null,args)
    }
}
function sum(a, b, c) {
    // console.log(a + b + c);
    return a+b+c
}
const fn = curry(sum);


// fn(1, 2, 3); // 6
// fn(1, 2)(3); // 6
// fn(1)(2, 3); // 6
 // 6
console.log(fn(1)(2)(3));
let a = [1,2];
let b = a.map(function (item) {
    return item*2
})
let c = a.forEach(function (item) {
    return item*2

})
console.log(b,c,a)
