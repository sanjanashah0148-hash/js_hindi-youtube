class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get password(){
        return this.password.toUpperCase()
    }
}
    set password(value){
        this.password=value.toUpperCase()
    }
}

const Sanjana=new User("sanjana@gmail.com","123")
console.log(Sanjana.password);

