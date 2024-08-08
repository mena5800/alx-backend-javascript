# ES6 Promises Project

This project focuses on understanding and utilizing Promises in JavaScript. Through various tasks, you'll explore how to create, manage, and handle Promises, with practical examples that can be applied in real-world JavaScript development.

## Learning Objectives

By the end of this project, you should be able to explain the following concepts clearly:
- What Promises are and why they are used in JavaScript.
- How to create and manage Promises using `then`, `resolve`, and `catch` methods.
- How to use different methods of the Promise object.
- The purpose and usage of `async` and `await`.
- The use of `throw` and `try` for error handling in async code.

## Project Structure

The project includes several tasks, each focusing on different aspects of Promises in JavaScript. Below is an overview of the tasks and their requirements:

### Tasks Overview

1. **Keep every promise you make and only make promises you can keep**
   - Return a Promise using the `getResponseFromAPI()` function.
   - Test your implementation to ensure it returns a Promise object.

2. **Don't make a promise...if you know you can't keep it**
   - Create a function `getFullResponseFromAPI(success)` that returns a resolved or rejected Promise based on the boolean `success`.

3. **Catch me if you can!**
   - Implement `handleResponseFromAPI(promise)` to handle resolved and rejected Promises and log a message for each resolution.

4. **Handle multiple successful promises**
   - Use `Promise.all` to handle multiple Promises and log specific values to the console.

5. **Simple promise**
   - Create a function `signUpUser(firstName, lastName)` that returns a resolved Promise with a user object.

6. **Reject the promises**
   - Implement an `uploadPhoto` function that returns a rejected Promise with an error message.

7. **Handle multiple promises**
   - Write a function `handleProfileSignup(firstName, lastName, fileName)` that handles multiple Promises and returns their statuses and values.

8. **Load balancer**
   - Create a `loadBalancer` function that returns the result of the first resolved Promise from a set of Promises.

9. **Throw error / try catch**
   - Write a `divideFunction(numerator, denominator)` that throws an error when the denominator is 0.

10. **Throw an error**
    - Implement a `guardrail` function that processes a mathematical function and handles errors, appending a guardrail message to the queue.

11. **Await / Async (Advanced)**
    - Create an `asyncUploadUser` function that calls `uploadPhoto` and `createUser` asynchronously and returns an object containing their results.
