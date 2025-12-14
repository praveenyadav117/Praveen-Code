//unknown vs any --> unkwron don;t know the type till the end 
// --> don't know now but will define it tell ts later more safe --> typeNarring

function getChai(kind: string | number){
if(typeof kind === 'string'){
    return `Chai ${kind.includes('chai')}`
}
return `Chai order ${kind.valueOf()}`
}

function print(msg? : string){
    if(msg){
        return `i have a msg for you ${msg}`
    }
    return `havnt got any messages`
}
console.log(getChai(2))
console.log(getChai('heyyy'))


class  KulhaDdChai{
    server(){
        return `serving chai from kulhad chai`;
    }
}

class  MasasladChai{
    server(){
        return `serving chai from masalsa chai`;
    }
}

function serve(chai : KulhaDdChai| MasasladChai){
    if(chai instanceof KulhaDdChai){
        return chai.server();
    }
    return chai.server()
}

const chaiMake = new MasasladChai();
console.log(serve(chaiMake));


type masalaChai =  {type:string , spicelevel:number};
type gingerChai =  {type:string , gingerAmout:number};
type ElachiChai =  {type:string , elachiAmnout:number};

type chai = MasasladChai | gingerChai | ElachiChai;

function serveChai(obj:chai){
    if(typeof obj == 'object' && obj !== null){ //momre type safety

    }
    if('spicelevel'  in obj){ //checking specifed proprty

    }
}

