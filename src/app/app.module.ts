import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent, ContactListComponent, ContactDetailComponent } from './Components';
import { IsFavorite } from './Pipes';

@NgModule({
  declarations: [
    MainComponent,
    ContactListComponent,
    ContactDetailComponent,
    IsFavorite
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    MainComponent 
  ]
})
export class AppModule { }
