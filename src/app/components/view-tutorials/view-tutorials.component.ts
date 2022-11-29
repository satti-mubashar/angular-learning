import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tutorials } from '../model/Tutorial';

@Component({
  selector: 'app-view-tutorials',
  templateUrl: './view-tutorials.component.html',
  styleUrls: ['./view-tutorials.component.css']
})
export class ViewTutorialsComponent {
  receivedTutorial !: Tutorials ;
  constructor(private router: Router) {
    // console.log(this.router.getCurrentNavigation()!.extras.state); 
    const navigation = this.router.getCurrentNavigation();
    this.receivedTutorial = navigation!.extras.state as Tutorials;
    console.log(this.receivedTutorial);
  }

  back(){
    this.router.navigate(['/tutorials']);
  }
}
