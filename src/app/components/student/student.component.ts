import { Component ,Input, OnInit } from '@angular/core';
import { Teacher } from '../model/Teacher';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() teacher: Teacher;
  @Input('principle') principleName: string;

  constructor() { }
 
  ngOnInit() {
  }
 
}
