import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tutorials } from '../model/Tutorial';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';


@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {


  //@ViewChild(MatSort) sort: MatSort;

  tutorials: Tutorials[] = [];
  //tutorials: Array<Tutorials>;
  dataSource!: MatTableDataSource<Tutorials>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('matsort') sort!: MatSort;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  displayedColumns: string[] = ['Sr #', 'Tilte', 'Description', 'Published', 'Actions'];

  currentTutorialToPass !: Tutorials;

  constructor(private tutorialService: TutorialService,
     private changeDetectorRefs: ChangeDetectorRef, private router: Router ) {
    this.retrieveTutorials();
    this.currentTutorialToPass = new Tutorials();
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    //this.changeDetectorRefs.detectChanges()
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          for (let i = 0; i < data.length; i++) {
            this.tutorials.push(this.createTutorialsObject(data[i]));
          }
          this.dataSource = new MatTableDataSource(this.tutorials);
          this.dataSource.paginator = this.paginator;
        },
        error => {
          console.log(error);
        });
  }
  createTutorialsObject(tut: any): Tutorials {
    var tutorialObject = new Tutorials();
    tutorialObject.description = tut.description;
    tutorialObject.title = tut.title;
    tutorialObject.id = tut.id;
    tutorialObject.published = tut.published;
    return tutorialObject;
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(index: number) {

    if (index > -1) {
      this.tutorials.splice(index, 1);
    }
  }
  updateTutorial(tutorial: Tutorials, index : number) {
    this.router.navigate(['/tutorials/'+tutorial.id]);
  }

 viewTutorial(tutorial: Tutorials) {
    this.router.navigate(['/view'], { state: tutorial });
  }

}
