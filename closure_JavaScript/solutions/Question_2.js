function init(){
    let firstName = "Leanne"

    function sayFristName(){
        console.log(firstName);
    }

    return sayFristName
}

var value = init();

value() // Due to closure, the refrence of init in not deleted, we can still get access to it. By using value() we are able to have access to the variable firstName. 