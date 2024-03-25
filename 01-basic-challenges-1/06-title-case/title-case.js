function titleCase(chrs) {
    var string_array = chrs.split(' '); 
    var string_array_length = string_array.length;
    var final_output = "";
    for(let i=0; i<string_array_length; i++){
        var get_string = string_array[i].split('');
        var combined_string = "";
        for(let j=0; j < get_string.length; j++){
            if(j==0){
                combined_string += get_string[0].toUpperCase(); 
            }else{
                combined_string += get_string[j];
            }
        }
        final_output = final_output + combined_string;
        if(i < string_array_length - 1){
            final_output += " ";
        }
    }
    return final_output
}

module.exports = titleCase;
