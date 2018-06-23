// -----------------------------NEW SYNTAX ES6----------------------------------
const sayHello = () => alert('Hello world!');
sayHello();

// -----------------------------------------------------------------------------
// var greeting = 'hello user!'; ES5
let greeting = 'Hello User!';
function greetWorld(isGreeting) {
  if (isGreeting) {
    // var greeting = 'hello world!'; ES5
    let greeting = 'Hello World!';
    return greeting;
  }
  return greeting;
}
greetWorld(true);
