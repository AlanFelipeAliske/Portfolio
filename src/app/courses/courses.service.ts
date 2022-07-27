import { Injectable } from "@angular/core";
import { Courses } from "./courses";

@Injectable({
    providedIn: "root",
})

export class CoursesService {

    retrieveAll(): Courses[] {
        return COURSES;
    }
}

var COURSES: Courses[] = [
    {
        id: 1,
        title: 'Introdução ao Angular 8',
        description: '',
        date: '20/07/2022',
        imgUrl: 'assets/img-certificados/Angular 8-1.jpg',
    },
    {
        id: 2,
        title: 'Angular 9',
        description: '',
        date: '27/04/2022',
        imgUrl: 'assets/img-certificados/Angular 9-1.jpg',
    },
    {
        id: 3,
        title: 'Arquitetura de componentes no front-end',
        description: '',
        date: '26/07/2022',
        imgUrl: 'assets/img-certificados/Arquitetura de componentes no front-end-1.jpg',
    },
    {
        id: 4,
        title: 'Projetos Ágeis com SCRUM',
        description: '',
        date: '26/04/2022',
        imgUrl: '/assets/img-certificados/Projetos Ágeis com SCRUM-1.jpg',
    },
    {
        id: 5,
        title: 'Typescript',
        description: '',
        date: '22/07/2022',
        imgUrl: 'assets/img-certificados/Typescript-1.jpg',
    },
    {
        id: 6,
        title: 'Desenvolvimento Web com Python Django e Banco de Dados',
        description: '',
        date: '08/04/2022',
        imgUrl: 'assets/img-certificados/Python e Django-1.jpg',
    },
    {
        id: 7,
        title: 'Programação para Internet com JavaScript',
        description: '',
        date: '26/01/2021',
        imgUrl: 'assets/img-certificados/Programação para internet com JS-1.jpg',
    },
    {
        id: 8,
        title: '',
        description: '',
        date: '',
        imgUrl: '',
    },
    {
        id: 9,
        title: '',
        description: '',
        date: '',
        imgUrl: '',
    },
    {
        id: 10,
        title: '',
        description: '',
        date: '',
        imgUrl: '',
    }
]