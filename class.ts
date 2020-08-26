export class Song{
    name : string;
    composer : string;
    imgsrc : string;
    constructor (name : string, composer : string, imgsrc : string){
        this.name = name;
        this.composer = composer;
        this.imgsrc = imgsrc;
    }
}

export class Data extends Song{
    //name, composer, imgsrc
    rank : string;
    level : number;
    score : number;
    constructor(name : string, composer : string, imgsrc: string,
                rank : string, level : number, score : number){
        super(name, composer, imgsrc);
        this.rank = rank;
        this.level = level;
        this.score = score;
    }
}

export class DataArr{
    // Data를 담을 array
    arr : Data[] = [];

    Add(input: Data){
        this.arr.push(input);
    }

    Add_bulk(input_bulk : Data[]){
        this.arr = input_bulk;
    }
}