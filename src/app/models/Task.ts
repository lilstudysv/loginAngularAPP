export interface TaskInterface {
    id?: number;
    state?: number;
    topic?: number;
    kind?: number;
    title?: string;
    description?: string;
    price?: number;
    creator?: number;
    resolver?: number;
}

export class Task{
    id: number;
    state:number;
    topic:number;
    kind:number;
    title:string;
    description:string;
    price:number;
    creator:number;
    resolver:number;
    
    constructor(    id: number,
        state:number,
        topic:number,
        kind:number,
        title:string,
        description:string,
        price:number,
        creator:number,
        resolver:number){}

    getId(){
        return this.id;
    }
}