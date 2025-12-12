let chaiStstus: 'started' | 20 | 'pending' | 'compltetd' = 20;
chaiStstus = 'started';

let airlineSeats : 'aisle' | 'window' | 'middle' = 'middle';

type Seattype  = 'aisle' | 'window' | 'middle';
let againSeatType : Seattype = 'aisle';

console.log("test aginseatType",againSeatType);

const orders = ['11','22','34','48'];
let ordervalue : string | undefined;
let newOrderValue : any;
for(let order of orders){
    if(order === '22'){
        ordervalue = '22';
    }
}
console.log(ordervalue);