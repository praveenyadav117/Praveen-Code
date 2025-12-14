interface User {
    username:string,
    bio?:string
}

class UserDetails implements User {
    username: string;
    bio?: string;
    age:number;
    constructor(user: User, age: number, address:string){
        // console.log(user);
        this.username = user.username;
        this.bio = user.bio
        this.age = age;
        this.username = address
    }

}

const userType : User = {username: 'praveen', bio :'hii'}

const user1 = new UserDetails(userType,20,"sikar")
console.log(user1);