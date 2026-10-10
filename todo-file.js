const fs = require("fs");
let todos = fs.existsSync("todos.json")
  ? JSON.parse(fs.readFileSync("todos.json"))
  : [];
let cmd = process.argv[2];
let text = process.argv[3];
if (cmd == "list" && !text) {
  for (let i = 0; i < todos.length; i++) {
    console.log(i + 1 + ". " + todos[i]);
  }
} else if (cmd == "add" && text) {
  if (todos.length < 3) {
    todos.push(text);
    fs.writeFileSync("todos.json", JSON.stringify(todos));
    let new_count = todos.length;
    let new_text = text;
    console.log(new_count + ". " + new_text);
  } else {
    console.log("error");
  }
} else {
  console.log("error");
}
