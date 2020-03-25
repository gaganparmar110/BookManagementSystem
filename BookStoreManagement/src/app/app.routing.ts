import {Router,Route,RouterModule,PreloadAllModules,NoPreloading, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AddBookComponent } from './addBook/addBook.component';
import {BookListsComponent} from './BookLists/bookList.component';

const APP_ROUTES:Routes=[{
      path:'addBook',component:AddBookComponent
},
{
    path:'listBook', component: BookListsComponent
}]


export const APP_ROUTING : ModuleWithProviders=RouterModule.forRoot(APP_ROUTES,{
    preloadingStrategy:NoPreloading,
})