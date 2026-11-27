// Intersections

// 01. This is used to merge two types into one type

type Car = { color: string; model: string; };
type Truck = { brand: string; build: string; };

type Vehicle = Car & Truck;

const vehicle: Vehicle = { color: "red", model: "Consumer Truck", brand: "Daimler", build: "2019" };

// here, you can see the two types can merge into one type and you have to use all properties in variable

// 02. you can't merge two types does have same property with different types

type Person = { isHuman: boolean, name: string; };
type Animal = { isHuman: string, legs: number; };

type LivingBeing = Person & Animal; // become false because isHuman has two types

// const dog: LivingBeing = {isHuman: false, name: "Jimmy", legs: 4}