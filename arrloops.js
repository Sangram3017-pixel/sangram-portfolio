// forEach loop
let num = [44, 5, 9, 2, 6]
num.forEach((element) => {
    console.log(element*element)
})

// Array.from
let name = "Sangram"
let arr = Array.from(name)
console.log(arr)

// for... in
for (let i in num){
    console.log(i)
}

// for... of
for (let item of num){
    console.log(item)
}


