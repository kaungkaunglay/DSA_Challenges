function findMaxNumber(numbers) {
    var largest = 0; 
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > largest){
            largest = numbers[i]
        }
    }
    return largest;
}

module.exports = findMaxNumber;
