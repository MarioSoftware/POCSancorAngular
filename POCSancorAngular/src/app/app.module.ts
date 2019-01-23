import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './app.material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';

import { ABMUserComponentComponent } from './Components/ABM/User/abmuser-component/abmuser-component.component';

import { HeaderComponentComponent } from './Components/Common/header-component/header-component.component';

// Modulos para ruteo
import { RouterModule, Route } from '@angular/router';
import { ABMActionsComponentComponent } from './Components/ABM/Common/abmactions-component/abmactions-component.component';


import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { ConfirmComponentComponent } from './Components/Common/Dialog/confirm-component/confirm-component.component';

import { TableOptionsComponent } from './Components/ABM/Common/table-options/table-options.component';
import { ColumnsVisibilityToggleComponent } from './Components/ABM/Common/columns-visibility-toggle/columns-visibility-toggle.component';
import { ColumnsVisibilityPanelComponent } from './Components/ABM/Common/columns-visibility-panel/columns-visibility-panel.component';
import { TemplateUserComponentComponent } from './Components/ABM/User/template-user-component/template-user-component.component';
import { GridUserComponentComponent } from './Components/ABM/User/grid-user-component/grid-user-component.component';
import { Template } from '@angular/compiler/src/render3/r3_ast';
 

const routes: Route[] = [
  { path: 'Usuario/ABM/:Id', component: ABMUserComponentComponent },
  { path: 'UsuarioList', component: TemplateUserComponentComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ABMUserComponentComponent,
    HeaderComponentComponent,
    ABMActionsComponentComponent,
    ConfirmComponentComponent,  
    CallbackComponent, 
    TableOptionsComponent, 
    ColumnsVisibilityToggleComponent, 
    ColumnsVisibilityPanelComponent, 
    TemplateUserComponentComponent, 
    GridUserComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [TemplateUserComponentComponent, ConfirmComponentComponent],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
