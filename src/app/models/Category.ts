export class Category
{
    private id: number;
    private label: string;

	constructor(id: number,label: string)
	{
		this.id = id;
        this.label = label;
    }

    public getId(): number{return this.id;}
    public getLabel(): string{return this.label;}

    public setId(id: number): void{this.id = id;}
    public setLabel(label: string): void{this.label = label;}
}

export interface CategoryLiteral
{
    id: number,
    name: string
}