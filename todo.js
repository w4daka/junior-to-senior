let todos = [];
let cmd = process.argv[2];
let text = process.argv[3];
if (cmd == "list" && !text) {
  for (let i = 0; i < todos.length; i++) {
    console.log(i + 1 + ". " + todos[i]);
  }
} else if (cmd == "add" && text) {
  if (todos.length < 3) {
    todos.push(text);
    console.log("1. " + todos[0]);
  } else {
    console.log("error");
  }
} else {
  console.log("error");
}
