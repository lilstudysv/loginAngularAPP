export class Task{
    id: number;
    state:string;
    topic:string;
    title:string;
    description:string;
    price:number;
    creator:string;
    resolver:string;
    
    constructor(){}

    getId(){
        return this.id;
    }
}