export class Song{
    name : string;
    composer : string;
    imgsrc : string;
    genre : string;
    constructor (name : string, composer : string, imgsrc : string,genre : string){
        this.name = name;
        this.composer = composer;
        this.imgsrc = imgsrc;
        this.genre = genre;
    }
}

export class Data extends Song{
    //name, composer, imgsrc
    rank : string;
    level : number;
    score : number;
    constructor(name : string, composer : string, imgsrc: string, genre : string,
                rank : string, level : number, score : number){
        super(name, composer, imgsrc, genre);
        this.rank = rank;
        this.level = level;
        this.score = score;
    }

    Print(){
        console.log('this.name = ' + this.name);
        console.log('this.composer = ' + this.composer);
        console.log('this.imgsrc = ' + this.imgsrc);
        console.log('this.rank = ' + this.rank);
        console.log('this.level = ' + this.level);
        console.log('this.score = ' + this.score);
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

    Print(idx : number){
        this.arr[idx].Print();
    }
}