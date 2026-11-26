//01. creating types for objects

/*

01. if you giving the properties it must be in the object
02. if you give the type it must be aligned with that
03. if you give ? it is optional property
04. don't confuse with union types and undefined one with optional one
05. you can give read only types

*/

type User = {
    id: string | number;
    name: string;
    email?: string;
    readonly createdAt: Date;
};

const user1: User = { id: 1, name: "John", createdAt: new Date() };

// 02. giving properties types and their values

/*

here, m is like parameters we give in function that needs to be string and their values have to be number or string only
so, we can write whatever properties with their values

*/

type Material = {
    [m: string]: string | number;
};

const material: Material = { id: 1, name: "Steel", strength: 172 };

// 03. enums only properties

/*

creating the only properties going to be needed in those objects
if you add extra property you'll get error
and you don't need to add all properties it's optional

Record -> type Record<K extends keyof any, T> = { [P in K]: T; }

*/

type Car = Record<"color" | "type" | "brand", string>;

const car = { color: "red", brand: "mahindra" };