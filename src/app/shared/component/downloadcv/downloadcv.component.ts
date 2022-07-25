import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloadcv',
  templateUrl: './downloadcv.component.html',
  styleUrls: ['./downloadcv.component.css']
})
export class DownloadcvComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  
  DownloadCV(){
    var link = document.createElement('a');
    link.download = 'AlanFelipeCV';
    link.href = './assets/pdf/AlanFelipeCV.pdf';
    link.click();
  }

}
