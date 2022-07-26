
import { Component, OnInit } from "@angular/core";
import { BodyComponent } from "../body/body.component";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

    name: string = '<Alan-Felipe/>'

    constructor(){}
    ngOnInit(): void {

    }

    ChangeColor(){
        //alert('Em desenvolvimento!!')
        document.body.classList.toggle("theme-light");
        document.body.classList.toggle("theme-dark");
    }
    Aviso(){
        alert('Em breve');
    }
}
