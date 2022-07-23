class Car {
    brand: string = ""
    model: string = ""
    color: string = ""
    constructor(brand: string, model: string, color: string){
        this.brand = brand;
        this.model = model;
        this.color = color
    }
}

class Elephant{
    height: number = 0
    kind: string = ""
    age: number = 0
    country: string = ""
    constructor(height: number, kind: string,age: number,country: string){
        this.height = height;
        this.kind = kind;
        this.age = age;
        this.country = country;
    }
    getDataStr(): string{
        return `
        elephant height: ${this.height} \n 
        elephant kind: ${this.kind} \n 
        elephant age: ${this.age} \n 
        elephant country: ${this.country} `
    }
}

class Pants{
    size: number = 0
    color: string = ""
    fabric: string = ""
    lenght: number = 0
    isAvailable: boolean = true
    constructor(size: number, color: string, fabric: string, lenght: number, isAvailable: boolean){
        this.size = size;
        this.color = color;
        this.fabric = fabric;
        this.lenght = lenght;
        this.isAvailable = isAvailable
    }
    availability():string{
        return this.isAvailable ? "available" : "not available"
    }
    private getDataStr(): string{
        return `
        pants size: ${this.size} \n 
        pants color: ${this.color} \n 
        pants fabric: ${this.fabric} \n 
        pants lenght: ${this.lenght} \n 
        pants availability: ${this.availability()} `
    }
}

class Sportswoman{
    fullName: string = ""
    dateOfBirth: string =""
    sportType: string =""
    gender: string =""
    constructor(fullName: string, dateOfBirth: string, sportType: string, gender?:string){
        this.fullName = fullName;
        this.dateOfBirth = dateOfBirth;
        this.sportType = sportType;
        this.gender = gender? gender :"";
    }
    protected getDataStr(): string{
        return `
        sport woman fullName: ${this.fullName} \n 
        sport woman dateOfBirth: ${this.dateOfBirth} \n 
        sport woman sportType: ${this.sportType} \n 
        sport woman gender: ${this.gender} `
    }
}

class Footballer extends Sportswoman{
    team: string = ""
    isOnLeag: boolean = true
    constructor(fullName: string, dateOfBirth: string, sportType: string,team: string, isOnLeag: boolean, gender?:string){
        super(fullName, dateOfBirth, sportType, gender?)
        this.team = team;
        this.isOnLeag = isOnLeag;
    }
    onLeag():string{
        return this.isOnLeag ? "yes" : "no"
    }

    getFootballerDataStr(): string{
        return`
        ${super.getDataStr()} \n
            sport woman team: ${this.team} \n 
            sport woman isOnLeag: ${this.onLeag()}  `
    }

}

class User {
    fullName: string = ""
    age: number = 0
    password: string = ""
    private isOnline: boolean = true
    constructor(fullName: string, age: number, password: string){
        this.fullName = fullName;
        this.age = age;
        this.password = password;
    }
    get getUserStatus(): boolean{
        return this.isOnline
    }
    set setUserStatus(status:boolean =true):boolean{
        status ? this.isOnline = true : this.isOnline = false
    }
    static getUser(isOld: boolean,...usersArr: User[]):User{
        usersArr ? usersArr.sort((a,b) => a.age -b.age) : []
        return usersArr && isOld  ? usersArr[usersArr.length-1] : usersArr[0]        
    }
}
// const user1 = new User("batel haiylo",24,"vbh254")
// const user2 = new User("berla marko",20,"vbh253")
// const user3 = new User("el ylo",32,"vbh554")
// console.log(User.getUser(false,user1,user2,user3))

class Student extends User{
    firstName: string = ""
    lastName: string = ""
    dateOfBirth:  string = ""
    password: string = ""
    mail: string = ""
    constructor(password: string,firstName: string, lastName: string, dateOfBirth: string,age: number,mail: string){
        super(`${firstName} ${lastName}`,age,password )
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
        this.mail = mail;
    }
    getStudendData(){
        return `
        student name: ${super.fullName} \n 
        student date of birth: ${this.dateOfBirth} \n 
        student mail: ${this.mail} \n 
        student password: ${this.password} `
    }
    getStrIfOnline(): string{
        return super.setUserStatus ? "green" : "red"
    };
}

class Room{
    width: number = 0
    lenght: number = 0
    squareFoot: number = 0
    private isThereAWindow: boolean = true
    constructor(width: number, lenght: number, squarFoot: number){
        this.width = width;
        this.lenght = lenght;
        this.squareFoot = squarFoot
    }
    get getIsThereAwindow(){
        return this.isThereAWindow
    }
    set setIsThereAWindow(answer:boolean){
        this.isThereAWindow = answer
    }
    static getARoom(isBig: boolean, ...roomsArr: Room[]): Room{
        roomsArr ? roomsArr.sort((a,b) => a.squareFoot - b.squareFoot) : []
        return roomsArr && isBig ? roomsArr[length-1] : roomsArr[0]
    }
}

class Kitchen extends Room{
    width: number = 0
    lenght: number = 0
    numOfCabinets: number = 0
    constructor(width: number,lenght: number,numOfCabinets: number, squarFoot: number){
        super(width,lenght,squarFoot)
        this.width = super.width;
        this.lenght = super.lenght;
        this.numOfCabinets = numOfCabinets;
    }
    getDataStr(): string{
        return `
        Kitchen width: ${this.width}
        Kitchen lenght: ${this.lenght}
        Kitchen number of cabinets: ${this.numOfCabinets}
        `
    }
    getWindow(){
        super.setIsThereAWindow ? "Have a window" : "Closed room"
    }
}

class lounge extends Kitchen{
    width: number = 0
    lenght: number = 0
    numOfSeats: number = 0
    airDirection: string = ""
    constructor(width: number, lenght: number, numOfSeats: number, airDirection: string,numOfCabinets: number,squarFoot: number){
        super(width,lenght,numOfCabinets, squarFoot)
        this.width = width;
        this.lenght = lenght;
        this.numOfSeats = numOfSeats;
        this.airDirection = airDirection;
    }
    
}