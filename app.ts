var container = document.getElementById('container');

/*You can specify optional parameters by setting them equal to a value in the function
function countdown(initial, final = 0, interval = 1) {
    var current = initial;

    while (current > final) {
        container. innerHTML = current;
        current -= interval;
    }
}
*/

/**
 * To specify string template, use backticks
 * Inside backticks is a normal string literal (???)
 * Unless you want to inject a value. Then, you open an expression with ${}
 * Inside the brackets you can put any JS expression you want
 * 
 * var todo = {
    id: 123,
    name: "Find a life purpose",
    completed: false
};
 * container.innerHTML = `<div todo = '${todo.name}' class ="list-group-item">
 <i class="${ todo.completed ? "": "hidden"} text-success glyphicon glyphicon-ok"></i>
 <span class="name">${todo.name}</span>
</div>`
 */

/** More ways to declare variables: let and const */

/**
 * Let  
 * counter variable is not accessible from outside the for loop
for (var x = 0; x <= 5; x++) {
    let counter = x
};

console.log(counter); // causes an error
*/

/** Const
 * for (var x = 0; x <= 5; x++) {
    const counter = x
    counter = 2; //error
}

console.log(counter); // causes an error
 */


