function countOccurrences(chrs, chr) {
    var count = 0 ; 
    var str_split = chrs.split(''); 
    for(let i=0 ; i < str_split.length ; i++){
        if(str_split[i] == chr){
            count++; 
        }
    }
    return count;
}

module.exports = countOccurrences;
