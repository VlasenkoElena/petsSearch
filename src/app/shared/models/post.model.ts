export class Post {
    animal: string;
    kind: string;
    name: string;
    age: number;
    color: string;
    location: {
          lat: number,
          lng: number
        };
    tel: number;
    photo?: string;
    id?: number;
    marker?: string;
    constructor( animal: string,
        kind: string,
        name: string,
        age: number,
        color: string,
        location: {
            lat: number,
            lng: number
        },
        tel: number,
        photo: string,
        marker: string ) {
            this.animal = animal;
            this.kind = kind;
            this.name = name;
            this.age = age;
            this.color = color;
            this.location = location;
            this.tel = tel;
            this.photo = photo;
            this.marker = marker;
        }
}

