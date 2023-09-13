const request = require('request');

const apiUrl = process.argv[2]; // Get the API URL from the command line argument

if (!apiUrl) {
  console.error('Usage: node 4-completed_tasks.js <API_URL>');
  process.exit(1);
}

// Function to count completed tasks by user ID
function countCompletedTasks(todos) {
  const completedTasks = {};

  todos.forEach((todo) => {
    if (todo.completed) {
      if (completedTasks[todo.userId]) {
        completedTasks[todo.userId]++;
      } else {
        completedTasks[todo.userId] = 1;
      }
    }
  });

  return completedTasks;
}

// Make the API request
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
    process.exit(1);
  }

  const todos = JSON.parse(body);

  // Calculate and print completed tasks by user ID
  const completedTasks = countCompletedTasks(todos);
  console.log(completedTasks);
});
