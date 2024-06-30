const log = function(a,b, ... rest ) {
console.log();
}


log('basic', 'rest' , 'operator' , 'usage')

function calOfDouble(number, basis = 2) {

    console.log(number * basis );
}