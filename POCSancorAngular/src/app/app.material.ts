import {MatButtonModule, MatCheckboxModule, MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSortModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule,MatTableModule,MatPaginatorModule,MatRadioModule,MatSelectModule, MatInputModule,MatDatepickerModule, MatNativeDateModule,MatExpansionModule,MatSortModule,MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule,MatTableModule,MatPaginatorModule,MatRadioModule,MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,MatExpansionModule,MatSortModule,MatDialogModule],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}, //debemos establecer el proveedor para el calendario
  ]
})

export class MaterialModule { }