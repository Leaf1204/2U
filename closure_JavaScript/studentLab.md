# Topic: Closures in JavaScript- student Lab #
---
### Question 1
```
const closureTest = () => {
  let x = 7;
}

console.log(x);
```  
In the above code, the variable  `x` is not defined. Create a function `getX()` that allows you to access the value of `x`. 

Now that you have access to that variable `x`, create a function that allows you to add one to `x` => 8. 

### Question 2
 ```
 function init(){
    let firstName = "Leanne"

    function sayFristName(){
        console.log(firstName);
    }

    return sayFristName
}

let value = init();
```
When we run the following code, nothing happens. Fix the code so that, when run we are able to print out the varible `firstName` in the console. Feel free to change the varible to your first name. 

### Question 3
```
function doAddition(x) {
    return function(y){
        return x + y;
    }
}

let add5 = doAddition(4)
```

Using the above starter code, create a function that will add 4 and 5 to give the answer => 9

