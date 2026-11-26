// creating type with actual values

type FaceParts = "Eye" | "Nose" | "Ear";

const faceFunc = (part: FaceParts): string => {
    return part;
};

// 01. using const -> you can't change variable later and the value should be same in the type

const ear = "Ear";
console.log(faceFunc(ear));

// 02. using let -> you can change variable later so it gives an error

let eye = "Eye";
// console.log(faceFunc(eye)) -> error because eye variable can be change into some other parts

// if you want to use let means you have specifically mention the type in the variable

let eye1: FaceParts = 'Eye';
console.log(faceFunc(eye1));

// this is called literals in TS