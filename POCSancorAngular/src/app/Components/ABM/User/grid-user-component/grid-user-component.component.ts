import { Component, OnInit, ViewChild, SimpleChange, Input, OnChanges } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Usuario } from '../Interfaces/Usuario';
import { UserService } from 'src/app/Services/ABM/user.service';

@Component({
  selector: 'app-grid-user-component',
  templateUrl: './grid-user-component.component.html',
  styleUrls: ['./grid-user-component.component.scss']
})
export class GridUserComponentComponent implements OnInit {

usuarios: Usuario[] = [];
  displayedColumns: string[] = ['select', 'Id', 'Nombre', 'Provincia', 'Pais'];
  dataSource = new MatTableDataSource<Usuario>();
  selection = new SelectionModel<Usuario>(true, []);
  textSearch: string;
  @Input() confirmSearch:string="";
  
  paginator: MatPaginator;
  sort: MatSort;
  
  constructor() { }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = 10;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("prueba");
    console.log(this.dataSource);
  }

}
