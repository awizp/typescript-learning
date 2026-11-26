// Assertions on TS

const rawData = "{'id':1, name:'John'}";

// 01. if you want to ensure the data could be the specific type use assertion

const user = JSON.parse(rawData) as { id: number, name: string; };
console.log(user.id);

// you can see here we can assure the data outcome from the data parsing

// 02. You can assure the data also by creating a function if you don't know the outcome

type User = { id: number, name: string; };

const isUser = (u: unknown): u is User => {
    return (
        typeof u === 'object' && u !== null
        && "id" in u && typeof (u as any).id === "number"
        && "name" in u && typeof (u as any).name === "string"
    );
};
// if any condition is false function returns false

const rawUserData = JSON.parse(rawData) as unknown; // it is unknown data so we have to check type safe
if (isUser(rawUserData)) {
    console.log(rawUserData.id);
    console.log(rawUserData.name); // you have to check type safe before initialize into the code
}

// method 2 is the safest method to check the type safe of the raw data

// Tuples concept -> derive a union from the array

const ROLES = ['admin', 'moderator', 'user'] as const; // normal array becomes readonly array you can't modify later

type Roles = (typeof ROLES)[number]; // here, using number between array bracket specifies the index number of the array

const setRoleHandler = (r: Roles): string => {
    return r;
};

console.log(setRoleHandler('admin')); // here, already mentioned types only can passed thorugh this function