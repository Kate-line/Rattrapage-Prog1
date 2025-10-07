function findOdd(array) {
    let total = {}
    
    for(let i in array) {
        total[array[i]] = (total[array[i]] || 0) + 1
    }
    console.log(total)
    
    for(let num in total) {
        if(total[num] % 2 !== 0) {
            return +num
        }
    }
}

console.log(findOdd([0,1,0,1,0]))