class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username:${this.username}`);
    }
    static createID(){
        return `123`
    }
}

const Sanjana=new User("Sanjana")
//console.log(Sanjana.createID())

class Teacher extends User{
    constructor(email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone","i@phone.com")
console.log(iphone.createId());