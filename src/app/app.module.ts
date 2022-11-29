import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

import { HelloWorldTemplateComponent } from './hello-world-template.component';;
import { FirstcomponentComponent } from './components/firstcomponent/firstcomponent.component';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { ViewTutorialsComponent } from './components/view-tutorials/view-tutorials.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { EcparentComponent } from './components/ecparent/ecparent.component';
import { EcchildComponent } from './components/ecchild/ecchild.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    ViewTutorialsComponent,
    TeacherComponent,
    StudentComponent,
    HeaderComponent,
    LoginComponent,
    EcparentComponent,
    EcchildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
