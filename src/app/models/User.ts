export class User{
    
    constructor(
        public id:Number,
        public username:String,
        public password:String
    ){}
}

export interface UserInterface {
    id?: string;
    name?: string;
    photo?:string;
    averageGrade? : string;
    totalTaskResolved? :string;
  }