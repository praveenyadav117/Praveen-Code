interface ChaiNew {
    price:number,
    chai:string
}

const ch1:ChaiNew = {price:20,chai:"masala"}

interface Calculator{
    calulate():void
}

interface TeaMachieCalculate{
    (price:number):number
}

const priceMaxhine:TeaMachieCalculate = (p)=> p*0.5
console.log(priceMaxhine(10));

interface User{
    name:string
}
interface User {
    age:number
}

const u1 :User = {
    name:"pk",
    age:20,
    username:"pk"
}