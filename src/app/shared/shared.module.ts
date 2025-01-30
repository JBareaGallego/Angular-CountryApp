import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
