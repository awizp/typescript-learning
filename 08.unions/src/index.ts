// Unions

type Truck = { brand: string; type: "truck"; };
type Car = { brand: string, type: "car", model: string; };

// 01. we can use both of types in function parameter with union

const vehicleConfirmFunc = (v: Truck | Car) => { // we can use both of objects in this function
    if (v.type === 'truck') {
        // if you didn't check the type type safe will give an error because it doesn't know wheather it's car or truck
        console.log(v.brand);
    }
    else {
        console.log(v.model);
    }
};

const familyXUV: Car = { type: "car", brand: "mahindra", model: "3XO" };

vehicleConfirmFunc(familyXUV);

// 02. you can also check the properties in that object

const vehicleHandler = (v: Truck | Car): string => {
    if ("model" in v) {
        return v.brand + v.type;
    } else {
        return v.brand + v.type;
    }
};

console.log(vehicleHandler(familyXUV));

// 03. Used in variables

const log = "logged";
const isLoggedIn: boolean | string = log == 'logged' ? true : "Not Logged";

// 04. used in arrays

const mixedArr: (string | number)[] = [1, "John", 3];

const eitherArr: string[] | number[] = Math.random() * 0.5 ? ["John", "Doe"] : [1, 2, 3];