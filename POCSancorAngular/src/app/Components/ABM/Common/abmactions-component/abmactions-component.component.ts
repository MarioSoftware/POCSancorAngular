import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ABMUserComponentComponent } from '../../User/abmuser-component/abmuser-component.component';
import { ConfirmComponentComponent } from 'src/app/Components/Common/Dialog/confirm-component/confirm-component.component';

@Component({
  selector: 'app-abmactions-component',
  templateUrl: './abmactions-component.component.html',
  styleUrls: ['./abmactions-component.component.scss']
})
export class ABMActionsComponentComponent implements OnInit {

  dialogResult: string;
  constructor(public dialog: MatDialog) { }
  @Input() objetoParameter: any;
  @Output() responseAction: EventEmitter<null> = new EventEmitter();

  ngOnInit() {
  }

  Nuevo() {
    const dialogRef = this.dialog.open(ABMUserComponentComponent, {
      width: '1000px'
    });
    dialogRef.componentInstance.Entity = null;
    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    });
  }

  Detalle() {
    console.log(this.objetoParameter);
    const dialogRef = this.dialog.open(ABMUserComponentComponent, {
      width: '1000px'
    });
    dialogRef.componentInstance.Entity = this.objetoParameter;
    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    });
    console.log('Detalle');
  }

  Editar() {
    const dialogRef = this.dialog.open(ABMUserComponentComponent, {
      width: '1000px'
    });
    dialogRef.componentInstance.Entity = this.objetoParameter;
    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    });
  }

  @HostListener('EjecutarAlgo')
  Eliminar() {
    const dialogRef = this.dialog.open(ConfirmComponentComponent, {
      width: '1000px'
    });

    dialogRef.componentInstance.descripcion = this.objetoParameter.selected[0].Nombre;

    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
      if (result == "Confirm") {
        this.responseAction.emit();
      }
    });
  }



}
