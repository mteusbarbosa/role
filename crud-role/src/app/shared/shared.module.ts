import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CategoryPipe } from './pipes/category.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports : [
    ErrorDialogComponent,
    CategoryPipe]
})
export class SharedModule { }
