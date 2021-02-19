function doAddition(x) {
    return function(y){
        return x + y;
    }
}

let add5 = doAddition(4)
console.log(add5(5)) // add5 is using the (x) so a number can be placed into the parentheses

// second part of question 3 
console.log(doAddition(5)(5));

//you can call doAddition() and inside the parentheses pass on a value of (5) followed by an additional (5). This is only possible because of closure and how memory works in JavaScript. doAddition is never deleted from the memory because one refference is still alive of it. 