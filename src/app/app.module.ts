import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
    HttpModule
  ],
  providers: [],
  bootstrap: [
    MainComponent 
  ]
})
export class AppModule { }
