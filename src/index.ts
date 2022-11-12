// ----------TYPES-----------   //

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

let level; // if undefined typescript will return type 'any' and is not best practice for typescript

function render(document: any) {
    console.log(document);
}

// ----------ENUMS-----------   //

// if using enum no need to define these variables
// const small = 1;
// const medium = 2;
// const large = 3;

// typescript will automatically assign value 0 to small, 1 to medium, 2 to large 
enum Size { Small = 1, Medium, Large };

let mySize: Size = Size.Medium;

console.log(mySize); // will log 2

// ----------FUNCTIONS--------- //

function calculateTax(income: number, taxYear = 2022) : number {   // annotated function to return a number
        // can explicitly define tax year here so that the function can be called without a default value 
    if (taxYear < 2022) {
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}

calculateTax(10_000, 2022);