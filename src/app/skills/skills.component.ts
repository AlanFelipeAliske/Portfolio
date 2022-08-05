import { Component, OnInit } from '@angular/core';
import { Skills } from './skills';
import { SkillsService } from './skills.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})


export class SkillsComponent implements OnInit {
    
    title: string = 'Projetos'
    skills: Skills[] = [];

    constructor(private skillsService: SkillsService) {}

    ngOnInit(): void {
        this.skills = this.skillsService.retrieveAll();
    }
}

