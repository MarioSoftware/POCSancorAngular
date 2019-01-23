import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TemplateUserComponentComponent } from 'src/app/Components/ABM/User/template-user-component/template-user-component.component';



@Component({
  selector: 'app-confirm-component',
  templateUrl: './confirm-component.component.html',
  styleUrls: ['./confirm-component.component.scss']
})
export class ConfirmComponentComponent implements OnInit {

  descripcion: string;

  constructor(public DialogRef: MatDialogRef<TemplateUserComponentComponent>) { }


  ngOnInit() {
  }

  Nuevo() {
    this.DialogRef.close('Confirm');
  }
  Cancelar() {
    this.DialogRef.close('Cancel');
  }
}
