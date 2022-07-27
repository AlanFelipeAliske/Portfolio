export class Courses {
    id: number;
    title: string;
    description: string;
    date: string;
    imgUrl: string;

    constructor(id: number, title: string, description: string, date: string, imgUrl: string,) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.imgUrl = imgUrl;
    }
}