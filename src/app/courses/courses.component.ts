import { Component } from '@angular/core';
import { Courses } from './courses';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  title: string = "Principais Certificados"
  img: string = 'assets/img-certificados/Angular 8-1.jpg';

  courses: Courses[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.retrieveAll();
  }

}
