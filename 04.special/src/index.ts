// union types -> set multiple types

let numberOrString: string | number;
const age: number = 28;

numberOrString = age < 18 ? "Minor" : "Major";

// function : void -> when function returns nothing useful

const messageFunc = (msg: string) => {
    console.log(msg);
};

// function : never -> when function never returns the value

const errorFunc = (err: string) => {
    throw new Error(`Error occours, ${err}`);
};

// any type -> don't ever use the any type in TS