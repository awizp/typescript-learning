// Tuples

// 01. Tuples is nothing but fixed types with fixed length

type Tuple1 = [message: string, phone: number];

const contact: Tuple1 = ["Random message", 12345];

/*

01. You can't add extra values in the array it's fixed length as mentioned in type
02. You can't change the index of the values after denoted the types. you have to follow the same order in variable

*/

// 02. optional tuple -> you can omit the optional property

type OptionalTuple = [message: string, phone?: number];

const number: OptionalTuple = ["john"];

// 03. read only tuple

const some: readonly [message: string, phone: number] = ["john", 100];