class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return this.password.toUpperCase()
    }
    
    set password(value){
        this.password=value.toUpperCase()
    }
}

const Sanjana=new User("sanjana@gmail.com","abc")
console.log(Sanjana.password);

