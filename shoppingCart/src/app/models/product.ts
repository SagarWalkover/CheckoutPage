export class Product {
    id: number;
    name: string;
    description : string;
    price : number;
    imgUrl: string;

    constructor(id:number,name:string,description='', price=0, imgUrl='https://www.apple.com/v/mac/m1/a/images/overview/m1_hero__gayysked51ym_large_2x.jpg'){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imgUrl=imgUrl;
    }
}
