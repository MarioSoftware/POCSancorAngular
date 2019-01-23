import { Component, OnInit, ViewChild, SimpleChange, Input, OnChanges } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Usuario } from '../Interfaces/Usuario';
import { UserService } from 'src/app/Services/ABM/user.service';
import { GridUserComponentComponent } from '../grid-user-component/grid-user-component.component';
import { TableOptionsComponent } from '../../Common/table-options/table-options.component';

@Component({
  selector: 'app-template-user-component',
  templateUrl: './template-user-component.component.html',
  styleUrls: ['./template-user-component.component.scss']
})
export class TemplateUserComponentComponent implements OnInit {


  usuarios: Usuario[] = []; 
  @Input()dataSource = new MatTableDataSource<Usuario>();
  selection = new SelectionModel<Usuario>(true, []);
  textSearch: string;
  @Input() confirmSearch:string="";
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('gridChild') gridChild:GridUserComponentComponent;
  @ViewChild(TableOptionsComponent) TableOptions:TableOptionsComponent;

  constructor(public serviceUser: UserService) { }


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
    this.serviceUser.getAllUser().subscribe(data => {
      this.dataSource = new MatTableDataSource<Usuario>(data);
      this.gridChild.dataSource= this.dataSource;
      this.gridChild.dataSource.sort= this.sort;
      this.gridChild.dataSource.paginator = this.paginator;
      //pasing datasource to Table options
      this.TableOptions.gridDataSource=this.dataSource;
    }
    );
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  setiarColumnas($event){ 
    this.gridChild.displayedColumns=$event;
  }



  /*EjecutarAlgo(){
    console.log("Estamos a punto de eliminar");
    this.serviceUser.deleteUser(this.selection.selected[0].Id).subscribe(data => {
      this.serviceUser.getAllUser().subscribe(data => {
        this.dataSource = new MatTableDataSource<Usuario>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
      );
    });
  }*/

}
