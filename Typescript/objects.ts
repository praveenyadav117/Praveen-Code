const object = {
  name: "praveen",
  age: 20,
  address: "alwar",
};

type typeObject = {
  name: string;
  age: number;
  address?: string;
};

type CUP = {size:string};
let smallCup  : CUP = {size:"small"};
const largeCup = {size:"large",tea:"200ml"};

console.log("smallcup before",smallCup);
smallCup = largeCup;
console.log("smallcup after",smallCup);

const user  : Partial<typeObject> = {age:20};
console.log("users",user);

type user1 = Required<typeObject> ;
type user2 = Pick<typeObject,"name">;
type user3 = Omit<typeObject, "age">;
const example1 : user1 = {name:"praveen",age:20,address:"sikar"};
const example2 : user2 = {name:"sikar"};
const example3 : user3 = {name:"praveemn",address:"alwar"};


