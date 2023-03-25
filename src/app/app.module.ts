import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/shared/page-not-found/page-not-found.component';
import { SharedModule } from 'src/shared/shared.module';



const route: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
