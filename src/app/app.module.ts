import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './JS/page-not-found.component';
import { BoldDirective } from './Directives/bold.directive';
import { FormComponent } from './form/form.component';
//import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponentTsComponent } from './products.component.ts/products.component.ts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BoldDirective,
    FormComponent,
    //ReactiveFormComponent,
    ReactiveForm1Component,
    StudentsComponent,
    DashboardComponent,
    ProductsComponentTsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

