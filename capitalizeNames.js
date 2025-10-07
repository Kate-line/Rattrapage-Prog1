function capitalizeNames(input){
    let output = []

    for(let name of input){
        let result = ""
        
        for(let i = 0; i < name.length; i++){
            if(i === 0){
                result += name[i].toUpperCase()
            } else {
                result += name[i].toLowerCase()
            }
        }

        output.push(result)
    }
    
    return output
}

console.log(capitalizeNames(["JO", "NELSON", "JURIE"]))