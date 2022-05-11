
import { Component } from "@angular/core";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})


export class BodyComponent {
    imageCode = './assets/images/webcode.svg';
    faEnvelope = faEnvelope;
}

