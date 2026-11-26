// primtive data types using on TS

// string
const firstName: string = "John";

// number
const age: number = 28;

// boolean
const isTrue: boolean = false;

// big int
const bigint: bigint = 2n ** 10n - 1n;

// you can't mixup the number and the bigint
// const mixupBigintAndNumber = bigint+age

// unique
const TOKEN: unique symbol = Symbol('TOKEN');

// function
const daysInYear = (year: number): number => {
    return year * 365;
};