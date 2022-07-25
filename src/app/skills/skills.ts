export class Skills {
    id: number;
    title: string;
    link: string;
    imgUrl: string;
    description: string;

    constructor(id: number, title: string, link: string, imgUrl: string, description: string) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.imgUrl = imgUrl;
        this.description = description;
    }
}