import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToDoListComponent } from './addToDoList/addlist.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { HomeComponent } from './home/home.component';
import { ViewListComponent } from './viewToDoList/viewlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewList/:No', component: ViewListComponent },
  { path: 'AddToDoList', component: AddToDoListComponent },
  { path: 'EditList/:No', component: EditListComponent } 
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }