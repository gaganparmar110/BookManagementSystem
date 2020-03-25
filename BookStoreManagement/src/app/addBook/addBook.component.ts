import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

import {bookDetails} from '../Book.model';
@Component({
     selector:'add-Book',
     templateUrl:'./addBook.component.html',
     //styleUrls:['./']
})
export class AddBookComponent implements OnInit{

    addBookFormGroup:FormGroup;
   // bookDetails=[];
    constructor(private formBuilder:FormBuilder){}
    ngOnInit(){
       // console.log(this.addingBook);
        this.addBookFormGroup=this.formBuilder.group({
            bookTitle:[''],
            bookName:[''],
            authorName:[''],
            price:[''],
            publisher:[''],
            copies:['']
        })
    }
    addBook(){
   

      // localStorage.setItem('Token',JSON.stringify(data));
       bookDetails.push({Title:this.addBookFormGroup.controls.bookTitle.value,
        Name:this.addBookFormGroup.controls.bookName.value,
        Author:this.addBookFormGroup.controls.authorName.value,
        Price:this.addBookFormGroup.controls.price.value,
        Publisher:this.addBookFormGroup.controls.publisher.value,
        Copies:this.addBookFormGroup.controls.copies.value});
       console.log(bookDetails);
       //this.bookDetails=this.addingBook;
    }

}
// import class Book{

// }

