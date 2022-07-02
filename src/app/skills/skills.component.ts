import { Component, OnInit } from '@angular/core';
import { Skills } from './skills';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})


export class SkillsComponent implements OnInit {
    skills: Skills[] = [];

    ngOnInit(): void {
        this.skills = [
            {
                id: 1,
                title: 'teste titulo',
                link: 'google.com.br',
                imgUrl: 'assets/images/perfil.jpg',
            },
            {
                id: 2,
                title: 'teste titulo2',
                link: 'google.com.br2',
                imgUrl: 'urlimg2',
            },
            {
                id: 3,
                title: 'teste titulo3',
                link: 'google.com.br3',
                imgUrl: 'urlimg3',
            }
        ]
    }
}

