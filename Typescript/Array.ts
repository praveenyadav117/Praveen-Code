const chaiTyep : string[] = ['masala','adarak'];
const chaiProice : Array<number> = [10,20];//number[]

type chaiObject = {
    name:string,
    price : number[]
}

const menu : chaiObject [] = [{name:'masaal',price :[10,20]}];
console.log("menu",menu);

menu.push({name:'adrak',price:[20,30]});
console.log("menu===11",menu);

const res = menu.filter(chai=> chai.name === 'masaal');
console.log("menu222=====",menu, res);

const res1 = menu.map(chai=>{
    if(chai.price.includes(10)){
    menu.push({name:'new chai', price:[10,20,30]})
    }
})

console.log("menu33333=====",menu, res1);



const cities : readonly string[] = ['delhi','pune'];

const example : Array<string | number> = ["testuing",20] // strinhg[] || number[]



