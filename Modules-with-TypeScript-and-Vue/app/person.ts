export class Person {
    _firstname: string;
    _lastname:string;

    constructor(firstname: string, lastname: string)
    {
        this._firstname = firstname;
        this._lastname = lastname;
    }
    set FirstName(firstname: string){
        this._firstname = firstname;
    }
    get FirstName(){
        return this._firstname;
    }
    set LastName(lastname: string){
        this._lastname = lastname;
    }
    get LastName(){
        return this._lastname;
    } 
    get FullName(){
        return this._firstname + " " + this._lastname;
    } 
}