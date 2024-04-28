import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ListarVehiculosComponent],
  exports: [ListarVehiculosComponent]
})
export class VehiculosModule { }
