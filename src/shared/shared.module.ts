import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

const components:any = [
  HeaderComponent,
  FooterComponent,
  ModalComponent,
  SectionHeaderComponent,
  PageNotFoundComponent,
]


const modules:any = [
  BrowserAnimationsModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule
]




@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    ...modules
  ],
  exports: [...components, ...modules]
})
export class SharedModule { }
