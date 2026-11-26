// 01. TS knows what the types of variables and the some data of it

let number = 10;
const firstName = 'John';  // for constants TS knows it explicit value of "John" or it type String
const scores = [6, 4, 2, 1];

// you don't need to set the explicit types here bcoz TS knows what type they are

// 02. You should know where to annotate the types in your code

const addFunc = (a: number, b: number): number => {
    return a + b;
};

function addNumbers(a: number, b: number): number {
    return a + b;
}

let maybeCase: number | string;
maybeCase = Math.random() > 0.5 ? "0" : 1; // if you don't know it will output number or string use this

console.log(addFunc(5, 5));
console.log(addNumbers(5, 5));

// here, in the function you should mention what it returns