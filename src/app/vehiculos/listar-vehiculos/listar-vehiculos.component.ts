import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';
import { Vehiculo } from '../model/Vehiculo';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css'],
})
export class ListarVehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  vehiculosMarca: { [marca: string]: number } = {};

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculosService
      .getAllVehiculos()
      .subscribe((vehiculos: Vehiculo[]) => {
        this.vehiculos = vehiculos;
        this.getVehiculosMarca();
      });
  }
  getVehiculosMarca() {
    this.vehiculos.forEach((vehiculo: Vehiculo) => {
      if (this.vehiculosMarca[vehiculo.marca]) {
        this.vehiculosMarca[vehiculo.marca]++;
      } else {
        this.vehiculosMarca[vehiculo.marca] = 1;
      }
    });
  }
}
