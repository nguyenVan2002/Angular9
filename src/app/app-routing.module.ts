import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { PageNotFoundComponent } from './JS/page-not-found.component';
import { StudentsComponent } from './students/students.component';
import { ProductsComponentTsComponent } from './products.component.ts/products.component.ts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'about', component: AboutComponent},
  // {path: 'form', component:FormComponent},
  // {path: 'reactiveform', component:ReactiveFormComponent},
  {path: 'reactiveform1', component:ReactiveForm1Component},
  {path: 'products', component: ProductsComponentTsComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '**', component:PageNotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
