let tasklist = { tasks: [] };
let userinput = document.getElementById("user-input");

let wordlist = document.getElementById("list");

let addbutton = document.getElementById("add");
addbutton.addEventListener("click", addTask);
/**
 * This function takes the user's input and adds it to the task list
 * created a variable to store the input from the user,it takes the task as a value
 * this condition : if the user's input is different from an empty space, then create a list in the document and append the input from the user in that list and display it as a checkbox element on the html
 * the last line sets the userInput value to zero or empty after the user clicks on add to submit the task
 */
function addTask() {
  let addedword = userinput.value.trim();
  if (addedword.value !== "") {
    let list = document.createElement("li");
    wordlist.appendChild(list);
    list.innerHTML = `<li>
        <input type="checkbox"/> ${addedword}</li>`;
    userinput.value = "";
  }
  todolist.tasks.push(addedword);
  todolist.tasks.push();
  addTask();
  const fs = require("fs");
  // Convert the todoList object to a string
  let data = JSON.stringify(todolist);
  // Write the string to a file called todolist.json
  fs.writeFileSync("todolist.json", data);
}
