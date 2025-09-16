import { greetUser } from './utils.js';
import DataFetcher from './dataFetcher.js';
// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.

console.log(greetUser("Yassen"));

// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
const task2 = new Promise((resolve) => {
  setTimeout(() => resolve("Task completed"), 2000);
});

task2.then((msg) => console.log(msg));

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
async function waitAndGreet() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Welcome"), 1000);
  });
}

waitAndGreet().then(console.log);

// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

fetchUser();
// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
async function fetchPostTitles() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts.slice(0, 3).map(post => post.title);
}
fetchPostTitles().then(console.log);

// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
function timer() {
  return new Promise((resolve) => {
    let count = 1;
    const interval = setInterval(() => {
      console.log(count);
      if (count === 3) {
        clearInterval(interval);
        resolve("Done!");
      }
      count++;
    }, 1000);
  });
}
timer().then(console.log);

// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
function safeJSONParse(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error("Invalid JSON:", error.message);
    return null;
  }
}

console.log(safeJSONParse('{"name": "Omar"}')); 
console.log(safeJSONParse('{name: Omar}'));     

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
async function countCompletedTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
  const todos = await response.json();
  return todos.filter(todo => todo.completed).length;
}

countCompletedTodos().then(console.log);

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.

const fetcher = new DataFetcher();
fetcher.getUser(1).then(user => console.log(user));
