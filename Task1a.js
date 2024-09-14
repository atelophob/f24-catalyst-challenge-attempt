// How do I run this script?

// In the terminal folder with Task1a.ts
// node Task1a.js   

// type: string[]
const todoList = []; 

/**
 * YOUR OBJECTIVE: 
 * Suppose there are some tasks you want to work on during your first week at Yale.
 * Write a procedure that adds the 3 below TODOS on line 18, represented as strings, 
 * to the TodoList array defined on line 7. Then, print the TodoList in a 
 * nice, readable way.
 * 
 * Only modify the file under the "// YOUR CODE HERE" comments.
 * 
 * TODOS:
 * 1. Apply to y/cs!
 * 2. Pick out my classes
 * 3. Have dinner with my suite
 * 
 */
function addAndPrintTodos() {
    const todo1 = "Apply to y/cs!"
    const todo2 = "Pick out my classes"
    const todo3 = "Have dinner with my suite"
    todoList.push(todo1)
    todoList.push(todo2)
    todoList.push(todo3)

    console.log("TODOS:")
    for (let i = 0; i < todoList.length; i++ ) {
        console.log(todoList[i])
    }
    //console.log(todoList)
}

/**
 * Main is considered the entry point to a procedural program. Within y/cs,
 * it's rare for us to write procedures in JS, but for learning purposes
 * we do it here
 */
function mainTask1a() {
    addAndPrintTodos()
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask1a();
}