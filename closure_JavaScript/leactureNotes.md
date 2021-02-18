# Topic: Closures in JavaScript- lecture facing notes 


### This is an introduction lesson to Closure in JavaScript. It is expected that the students have a basic to intermediate understanding of scope and functions in JavaScript. 

*After this lesson students will be able to:*
1. Define lexical Scoping
2. Differentiate between global and local scope
3. Define closures 
4. Use functions to call other functions 

---
__Agenda:__
1. Introduction: Open ended question (2 mins)
2. Explanation and code example of lexical scoping with review of global and local scope (scaffold students understanding of scope) (8 mins)
3. Instructor demonstration closures (15 mins)
4. Student lab (45 mins)
5. Review session (30 mins)

---

## Introduction: stoke curiosity
- start with a open ended question 

__Question:__  *Why is having a solid understanding of closures in JavaScript so important?*

__Answer:__  *Understanding closures leads to a better understanding of programming itself. Questions regarding closures and their applications are commonly asked during technical interviews. As JavaScript Developers, chances are you already using closures and just don't know it. Most of the JavaScript Developers use closure consciously or unconsciously. Being able to understand closure will provide you with better control over the code when using them. Additionally, having a strong understand of closure will greatly help when it comes to working with React hooks and Redux* 

---
## Define Lexical Scoping


## instructor demo 
lets start off with writing a very basic function
```
const myFunc = () => {
    let orange = 5;
};
 
myFunc()
console.log(orange);
```
 
When we run this code, orange will be not defined. 
Okay but wait, didn't we just define orange?
`let orange = 5` 
The orange variable only exists between the curly brackets so it only exists within the context of the functions execution. Once the function is done executing, the variable gets disposed of and no longer exists.
 
Anything inside the curly brackets does have access to `orange`. What we can do is we can return a function. 

```
return () => orange
 
const myFunc = () => {
     let orange = 5;
 
     return () =>
       orange;
  
   };
   const showOranges = myFunc()
   console.log(showOranges());
 ```

 We now have access to the variable five. Why?
 Because even though the function is called outside of the curly brackets, the definition of the function is inside the curly brackets so it still has access to the number 5.
 
 With this understanding we can start making more complex situations. 
 For example subtracting from the Oranges. Imagine we ate one orange.

 We do this by making an array 
 `return [() => orange];`

 We can then create a second function that takes away one orange
 ```return [() => orange, () => orange--];```
 
 We now have an array with two functions. 
 One that shows you the variable orange, the other that subtracts from it. 
 
 Now we need to destructure the array. The first function is one that shows the oranges, the second function is one that subtracts an orange so we will call it `eatOrange`

```
const [showOranges, eatOrange ] = myFunc()
```

First we will do `console.log(showOranges())` then `eatOrange()` followed by a second `console.log(showOranges())`.

``` 
const myFunc = () => {
     let orange = 5;
 
    return [() =>
       orange, () => orange--];
   };
   const [showOranges, eatOrange ] = myFunc()
   console.log(showOranges());
   eatOrange();
   console.log(showOranges());
 ```

  What is happening here? Basically, When we run the above code, we can see that the first result is five from the original `showOranges()`. By calling the method `eatOrange()` we can take away one orange. Now, when we run `showOranges()` for a second time it shows minus one orange, so the result is 4.
 
 As long as these functions are defined from within the function we can access the data from the function anywhere.
 Every time we run `myFunc()`; it create a __new copy__ of those functions so it will create a seperate Orange.
 
 If we were to copy:  
 ```
const [showOranges, eatOrange ] = myFunc()
 console.log(showOrange());
 ```
 ... and paste/ change it to: 
 ```
const [showOrange2, eatOrange2 ] = myFunc()
 console.log(showOranges2()); 
```
When we run the code, the result being that `showOranges2()` is => 5 as it is referring to the first time we ran the function. When we ran the function again it created a new execution of the function which create a __new__ orange and returned a new set of these two functions that operate independently
 
```
const myFunc = () => {
   let orange = 5;
 
   return [() =>
     orange, () => orange--];
 };
  const [showOranges, eatOrange ] = myFunc()
 console.log(showOranges());
 eatOrange();
 console.log(showOranges());
 
 const [showOranges2, eatOrange2 ] = myFunc()
 console.log(showOranges(), showOranges2());
 ```

We can compaire both side by side
`console.log(showOranges(), showOranges2());`
 
This is essentially what closures are! 
The idea that you can take a function and have it go beyond its execution by returning functions that access data inside the function. Closure is taking advantage of the scoping of the data inside of a function and being able to access the data inside the function.
we are never able to directly edit orange. But, we can use functions to change orange. 
