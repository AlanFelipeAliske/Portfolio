
import { Component, OnInit } from "@angular/core";
import { BodyComponent } from "../body/body.component";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

    name = '<Alan-Felipe/>'

    constructor(){}
    ngOnInit(): void {

    }
    DownloadCV(){
        var link = document.createElement('a');
        link.download = 'AlanFelipeCV';
        link.href = './assets/images/AlanFelipeCV.pdf';
        link.click();
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
