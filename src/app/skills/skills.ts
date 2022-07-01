export class Skills {
    id: number;
    title: string;
    link: string;
    imgUrl: string;

    constructor(id: number, title: string, link: string, imgUrl: string) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.imgUrl = imgUrl;
    }
}