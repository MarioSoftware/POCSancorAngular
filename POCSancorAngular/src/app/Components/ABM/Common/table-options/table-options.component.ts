import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ColumnsVisibilityPanelComponent } from '../columns-visibility-panel/columns-visibility-panel.component';

@Component({
  selector: 'app-table-options',
  templateUrl: './table-options.component.html',
  styleUrls: ['./table-options.component.scss']
})
export class TableOptionsComponent implements OnInit {
  ngOnInit() {

  }


  gridDataSource: any;

  @Output() MessageEvent = new EventEmitter<string[]>();

  columnItems: string[];
  constructor() { }


  setiarColumnas(column) {
    var head = column.trim();
    for (var _i = 0; _i < this.columnItems.length; _i++) {
      if(column===this.columnItems[_i]){
        this.columnItems.splice(_i,0);
      }
      
  } 

    this.MessageEvent.emit(this.columnItems);
  }


  ObtenerPanelColumnas() {

    let entity = this.gridDataSource.data[0];
    if (entity !== null) {
      this.columnItems = Object.getOwnPropertyNames(entity);
      this.columnItems.unshift("select");

    }

    let panel = document.getElementById("myDIV");
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  }

}
