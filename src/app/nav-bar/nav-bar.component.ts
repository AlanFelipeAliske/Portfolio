
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
    constructor(){}
    ngOnInit(): void {

    }
    DownloadCV(){
        var link = document.createElement('a');
        link.download = 'AlanFelipeCV';
        link.href = './assets/images/AlanFelipeCV.pdf';
        link.click();
    }
    
}
