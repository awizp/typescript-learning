// Arrays

// 01. we can denote arrays with two ways

const arr1: number[] = [1, 2, 3]; //T[]
const arr2: Array<number> = [1, 2, 3]; //Array<T>

// 02. read only arrays

const arr3: readonly string[] = ["john", "doe"];
const arr4: ReadonlyArray<string> = ["john", "doe"];

// 03. because of inference you don't need to specify the array type when declaring variables

const isTrue = [true, false];

// 04. you can decalre variables in whatever types it'll take correct type because of inference

const mixedArr = [1, "2", 3, "4"]; // type is (string | number)[]

// 05. you can't use array methods like push, pop and split methods in read only arrays

// arr3.pop() -> become error

// 06. you can use readonly arrays in function parameters and map, foreach functions

const loopArr = (arr: readonly number[]) => {
    for (let num of arr) {
        console.log(num);
    }
};

loopArr(arr1);

// here, you can see no error and you can pass it normal arrays and parameters only in read only mode