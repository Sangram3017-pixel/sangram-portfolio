const hello = ()=>{
    console.log("Hey how are you. I am to fine yarr")
    return "heyyy"
}

function onePlusAvg(x, y) {
    return 1 + (x + y) / 2
}

const sum = (p, q)=>{
    return p + q
}

let a = 10;
let b = 20;
let c = 30;
let v = hello();
console.log(v)
console.log("One plus Average of a and b is ", onePlusAvg(a, b))
console.log("One plus Average of a and b is ", onePlusAvg(b, c))
console.log("One plus Average of a and b is ", onePlusAvg(a, c))
console.log(sum(22, 5))