import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './views/home/home.component';
import { NunComponent } from './views/nun/nun.component';

const routes: Routes = [
  { path: 'nun/:musicx', component: NunComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  declarations: [AppComponent, HomeComponent, NunComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }




