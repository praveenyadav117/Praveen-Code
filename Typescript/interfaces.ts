interface User2 {
    username:string,
    bio?:string
}

class UserDetails implements User2 {
    username: string;
    bio?: string;
    age:number;
    constructor(user: User2, age: number, address:string){
        // console.log(user);
        this.username = user.username;
        this.bio = user.bio
        this.age = age;
        this.username = address
    }

}

const userType : User2 = {username: 'praveen', bio :'hii'}

const user1 = new UserDetails(userType,20,"sikar")
console.log(user1);
const user2  = new UserDetails(userType,20,"alwar")
console.log(user1);
