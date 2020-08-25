export class Song{
    name : string;
    composer : string;
    level : number;

    constructor (name : string, composer : string, level: number)
    {
        this.name = name;
        this.composer = composer;
        this.level = level;
    }
}