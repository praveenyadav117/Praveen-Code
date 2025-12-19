class Chai {
    flavour: string;
    price: number;
    private ingredients:string = "ADRAK";
    constructor(flavour:string, price:number){
        this.flavour = flavour;
        this.price = price;
        // this.ingredients = ingredients;
        console.log(this);
    }
    reveal(){
        return this.ingredients;//ok behavuoru
    }

}

const newChai = new Chai("Ginger",20);
newChai.flavour = "masala";
// newChai.
console.log(newChai.reveal())

class ShopName {
    protected shop = "chai corner";
}

class Branch extends ShopName{
    getShopeName(){
        return this.shop;//ok behavior
    }
}

const shop = new Branch();
console.log(shop.getShopeName());

class Wallet {
    #balance = 2000;
    getBalance(){
        return this.#balance;
    }
}

//static values
class Ekclass {
    static shopName = "Chai and Code";
    constructor(){
        return "tested";
    }
}
console.log(Ekclass.shopName);

abstract class ModernChai {
    makeChai(){

    }
}

class newChai1 extends ModernChai{
    private chaiName:string="Giner";
    makeChai(): string {
        return "testing"
    }
    
}