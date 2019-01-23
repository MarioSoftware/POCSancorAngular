import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { GridUserComponentComponent } from '../grid-user-component/grid-user-component.component';
import { PaisService } from 'src/app/Services/Combos/pais.service';
import { ProvinciaService } from 'src/app/Services/Combos/provincia.service';
import { CiudadService } from 'src/app/Services/Combos/ciudad.service';
import { UserService } from 'src/app/Services/ABM/user.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-abmuser-component',
  templateUrl: './abmuser-component.component.html',
  styleUrls: ['./abmuser-component.component.scss']
})
export class ABMUserComponentComponent implements OnInit {

  submitted: boolean = false;
  paises = [];
  provincias = [];
  ciudades = [];
  paisSelect = {
    Id: -1,
    Nombre: ''
  };
  provinciasSelect = {
    Id: -1,
    Nombre: '',
    Pais: { Id: -1, Nombre: '' }
  };
  Nombre: '';
  ciudadSelect = {
    Id: -1,
    Nombre: '',
    Provincia: { Id: -1, Nombre: '', Pais: { Id: -1, Nombre: '' } }
  };

  form: FormGroup;


  @Input() Entity: any;
  /*
    public form = new FormGroup({
      Id: new FormControl(-1),
      Nombre: new FormControl('', [Validators.required]),
      Pais: new FormControl('', [Validators.required]),
      Provincia: new FormControl('', [Validators.required]),
      Ciudad: new FormControl('', [Validators.required])
    });*/

  constructor(public DialogRef: MatDialogRef<GridUserComponentComponent>,
    public paisService: PaisService,
    public provinciaService: ProvinciaService,
    public ciudadService: CiudadService,
    public usuarioService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      ciudad: ['', [Validators.required]]

    });

    this.paisService.getAllPaises().subscribe(data => {
      this.paises = data;
    });

    if (this.Entity == null) {
      console.log('Estamos creando nuevo');
    } else {
      console.log(this.Entity.selected[0]);
      console.log('Estamos Editando');
      this.getModal();
    }
  }

  get f() {return this.form.controls; }

  getModal(){
    this.Nombre = this.Entity.selected[0].Nombre;

  }

  selectPais() {
    this.provinciaService.getProvinciasPorPais(this.paisSelect.Id).subscribe(data => {
      this.provincias = data;
    });
    this.ciudades = [];

  }

  selectProvincias() {
    this.ciudadService.getCiudadesPorProvincia(this.provinciasSelect.Id).subscribe(data => {
      this.ciudades = data;
    });
  }

  Cancel() {
    this.DialogRef.close('Cancel');
  }

  Confirm() {
    this.submitted = true;

    if (this.form.invalid) {
      console.log("No valido");
      console.log(this.form.invalid);
      return;
    }


    if (this.Entity == null) {
      var usuario = { "Id": 1, "Nombre": "HJEBBEC2QO", "Ciudad": { "Id": 111, "Nombre": "Argentina_Provincia_Ciudad_111", "Provincia": { "Id": 11, "Nombre": "Argentina_Provincia_11", "Pais": { "Id": 1, "Nombre": "Argentina" } } } };
      usuario.Id = 0;
      usuario.Nombre = this.Nombre;
      usuario.Ciudad = this.ciudadSelect;
      usuario.Ciudad.Provincia = this.provinciasSelect;
      usuario.Ciudad.Provincia.Pais = this.paisSelect;
      let serializedForm = JSON.stringify(usuario);
      this.usuarioService.insertUser(serializedForm);
    } else {
      var usuario = { "Id": 1, "Nombre": "HJEBBEC2QO", "Ciudad": { "Id": 111, "Nombre": "Argentina_Provincia_Ciudad_111", "Provincia": { "Id": 11, "Nombre": "Argentina_Provincia_11", "Pais": { "Id": 1, "Nombre": "Argentina" } } } };
      usuario.Id = 0;
      usuario.Id = this.Entity.selected[0].Id;
      usuario.Nombre = this.Nombre;
      usuario.Ciudad = this.ciudadSelect;
      usuario.Ciudad.Provincia = this.provinciasSelect;
      usuario.Ciudad.Provincia.Pais = this.paisSelect;
      this.usuarioService.editUser(usuario, usuario.Id);
    }
    this.DialogRef.close('Confirm');
  }
}
