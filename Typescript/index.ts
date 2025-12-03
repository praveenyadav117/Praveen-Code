function greet(name : string) : string {
    return `hi ,my name is ${name}`;
}

console.log(greet("praveen"));
// console.log(greet(42));


interface User {
    name:string,
    age:number,
    address:string
}

class UserAccount {
    name:string;
    age:number;
    address:string;
    constructor(name: string , age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address
    }
}

const user : User = new UserAccount("praveen",42,"sikar");
console.log(user);