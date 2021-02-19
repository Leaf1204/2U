function doAddition(x) {
    return function(y){
        return x + y;
    }
}

let add5 = doAddition(4)
console.log(add5(5)) // add5 is using the (x) so a number can be placed into the parentheses