import { Injectable } from "@angular/core";
import { Skills } from "./skills";

@Injectable({
    providedIn: "root",
})

export class SkillsService {

    retrieveAll(): Skills[] {
        return SKILLS;
    }
}

var SKILLS: Skills[] = [
    {
        id: 1,
        title: 'Faculdade Pequeno Principe',
        description: 'Site desenvolvido na Agência Inunda Web',
        link: 'https://faculdadespequenoprincipe.edu.br/',
        imgUrl: 'assets/images/faculdadepequenoprincipe.png',
    },
    {
        id: 2,
        title: 'Fundação Iniciativa',
        description: 'Um dos sites em que mais gostei de participar do desenvolvimento com objetivo de ajudar crianças carentes',
        link: 'https://finiciativa.org.br/',
        imgUrl: 'assets/images/fininciativa.png',
    },
    {
        id: 3,
        title: 'Faculdade Pequeno Principe',
        description: 'Site desenvolvido na Agência Inunda Web',
        link: 'https://faculdadespequenoprincipe.edu.br/',
        imgUrl: 'assets/images/faculdadepequenoprincipe.png',
    },
    {
        id: 4,
        title: 'Fundação Iniciativa',
        description: 'Um dos sites em que mais gostei de participar do desenvolvimento com objetivo de ajudar crianças carentes',
        link: 'https://finiciativa.org.br/',
        imgUrl: 'assets/images/fininciativa.png',
    }
]