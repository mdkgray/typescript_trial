// -------------------TYPES---------------------   //

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

let level; // if undefined typescript will return type 'any' and is not best practice for typescript

function render(document: any) {
    console.log(document);
}

// -------------------ENUMS----------------------   //

// if using enum no need to define these variables
// const small = 1;
// const medium = 2;
// const large = 3;

// typescript will automatically assign value 0 to small, 1 to medium, 2 to large 
enum Size { Small = 1, Medium, Large };

let mySize: Size = Size.Medium;

console.log(mySize); // will log 2

// --------------------FUNCTIONS------------------- //

// best to enable these three options in the tsconfig file:
    // noUnusedLocals
    // noUnusedParameters
    // noImplicitReturns

function calculateTax(income: number, taxYear = 2022) : number {   // annotated function to return a number
        // can explicitly define tax year here so that the function can be called without a default value 
    if (taxYear < 2022) {
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}

calculateTax(10_000);

// --------------------OBJECTS------------------- //

let employee: { // need to explicitly supply a type annotation
    readonly id: number, // readonly modifier used to instruct the typescript compiler to never modify the value of the property 
    name: string,
    retire: (date: Date) => void 
} = { 
    id: 1, 
    name: 'Mackenzie', 
    retire: (date: Date) => { // need to pass the retire parameter into the object 
        console.log(date);
    }
};

// --------------------------------------ADVANCED TYPES------------------------------------- //
            // Type aliases
            // Unions and intersections 
            // Type narrowing
            // Nullable types 
            // The unknown type 
            // The never type

// --------------------TYPE ALIASES------------------- //

type Employee = {
    readonly id: number, 
    name: string,
    retire: (date: Date) => void 
}

let employee1: Employee = { // need to explicitly supply a type annotation
    id: 1, 
    name: 'Mackenzie', 
    retire: (date: Date) => { // need to pass the retire parameter into the object 
        console.log(date);
    }
};

// --------------------UNION TYPES------------------- //

function kgToLbs(weight: number | string): number { // define union type of weight to a number or string 
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

// both of these are ok to pass as type number or string has been defined above 
kgToLbs(10);
kgToLbs('10');

// --------------------INTERSECTION TYPES------------------- //

type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable; // '&' used in an intersection type 

let textBox: UIWidget = { // implementing the drag and resize methods for the textBox 
    drag: () => {},
    resize: () => {}
}

// --------------------LITERAL TYPES------------------- //

// Literal (exact, specific) value 
type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

let measurement: Metric = 'cm'; 

// --------------------NULLABLE TYPES------------------- //

function greet(name: string | null) { // need to use union operator to allow for null to be passed in this instance 
    if (name) {
        console.log(name.toUpperCase());    
    } else {
        console.log('Hello');        
    }
}

greet(null);

// --------------------OPTIONAL CHAINING------------------- //

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
} 

let customer = getCustomer(0);

// Optional property access operator

    // instead of using the following:
        // if (customer !== null && customer !== undefined) 
    
    // use the following:
console.log(customer?.birthday?.getFullYear()); // will only be executed if there is a customer which has a birthday

// Optional element access operator
    // customers?.[0]

// Optional call 
let log: any = null;

log?.('a'); // will only be executed if log is referencing an actual function, otherwise will get undefined 