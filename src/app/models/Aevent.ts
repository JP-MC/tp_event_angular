export class Aevent
{
    public id: number;
    public label: string;
    public date_start: Date;
    public date_end: Date;
    public position: string;
    public category: string;

    public getId(): number{return this.id;}
    public getLabel(): string{return this.label;}
    public getDate_start(): Date{return this.date_start;}
    public getDate_end(): Date{return this.date_end;}
    public getPosition(): string{return this.position;}
    public getCategory(): string{return this.category;}

    public setId(id: number): void{this.id = id;}
    public setLabel(label: string): void{this.label = label;}
    public setDate_start(date_start: Date): void{this.date_start = date_start;}
    public setDate_end(date_end: Date): void{this.date_end = date_end;}
    public setPosition(position: string): void{this.position = position;}
    public setCategory(category: string): void{this.category = category;}
}

export interface AeventLiteral
{
    id: number,
    name: string,
    date_start: string,
    date_end: string,
    position: string,
    id_category: number
}