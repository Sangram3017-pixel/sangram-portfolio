// Array map method
let arr = [56, 78, 32, 67, 89]
let a = arr.map((value, index, array )

  console.log(value, index, array)
  return value + index 
})
console.log(a)

// Array filter method
let arr2 = [34, 67, 23, 65, 90, 11]
let a2 = arr2.filter((a)=>{
    return a<50
})
console.log(a2)

// Array reduce method
let arr3 = [5, 4, 8, 2, 7, 1]
let newarr3 = arr3 = arr3.reduce((a1, a2)=>{
    return a1 + a2
})
console.log(newarr3)