// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function outerBlock(){
  let outerMessage = "The outermost Message";
  console.log(`I'm InnerBlock and I can see ${outerMessage}`);
  // debugger;

  function middleBlock(){
    let middleMessage = "The middle message";
    console.log(`I'm middleBlock and I can see ${outerMessage} and ${middleMessage}`);
    // debugger;

    function innerBlock(){
      let innerMessage = "The innermost Message";
      console.log(`I'm InnerBlock and I can see ${outerMessage}, ${middleMessage}, and ${innerMessage}`);
      // debugger;

    }
    innerBlock();
  }
  middleBlock();
}
outerBlock()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
//   let count = 0;
//   return function(){
//     return ++count;
//   }
// };

// let newCount = counter();

// console.log(newCount());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let count = 0;
  return function(value){
    console.log(count);
    if (value){
      return ++count;

    }
    else{
      return --count;
    }
  }
};

let placeholder = counterFactory();
// placeholder(1);
// placeholder(1);
// placeholder(1);
// placeholder(0);
// placeholder(0);
// placeholder(0);

let countObject = {
  name: "object"
}

console.log(placeholder(1));
console.log(placeholder(1));
console.log(placeholder(1));
console.log(placeholder(1));
console.log(placeholder(1));

countObject.increment = placeholder(1);
countObject.decrement = placeholder(0);

console.log(countObject.increment);
console.log(countObject.increment);
console.log(countObject.increment);
console.log(countObject.increment);
console.log(countObject.decrement);
console.log(countObject.decrement);
console.log(countObject.decrement);
console.log(countObject.decrement);


