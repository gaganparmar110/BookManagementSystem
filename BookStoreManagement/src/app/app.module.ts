import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routing'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddBookComponent} from './addBook/addBook.component';
import {BookListsComponent} from './BookLists/bookList.component';
import {Router} from '@angular/router';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,AddBookComponent,BookListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,APP_ROUTING,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
