export function greetUser(name) {
  return `Hello, ${name}!`;
}

export default class DataFetcher {
  async getUser(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
  }
}
