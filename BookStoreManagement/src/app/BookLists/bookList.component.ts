import { Component, OnInit } from '@angular/core';
import {bookDetails} from '../Book.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './bookList.component.html',
 // styleUrls: ['./bookList.component.css']
})
export class BookListsComponent implements OnInit {

  constructor() { }
  books=bookDetails;
  
  ngOnInit() {

  }

}