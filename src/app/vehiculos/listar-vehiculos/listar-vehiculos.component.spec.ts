/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fa, faker } from '@faker-js/faker';
import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { VehiculosService } from '../services/vehiculos.service';
import { Vehiculo } from '../model/Vehiculo';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarVehiculosComponent],
      imports: [HttpClientTestingModule],
      providers: [VehiculosService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    for (let i = 0; i < 3; i++) {
      component.vehiculos.push(
        new Vehiculo(
          faker.number.int({ min: 1, max: 100 }),
          faker.word.conjunction(),
          faker.word.conjunction(),
          faker.word.conjunction(),
          faker.number.int({ min: 300, max: 3000 }),
          faker.number.int({ min: 300, max: 3000 }),
          faker.word.adjective(),
          faker.internet.url()
        )
      );
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a table', () => {
    expect(debug.query(By.css('tbody')).childNodes.length).toBeGreaterThan(0);
  });

  it('Should have a <dd> element ', () => {
    const dd = debug.query(By.css('dd'));
    const content: HTMLElement = dd.nativeElement;
    expect(content.textContent).toEqual(component.vehiculos[0].id.toString())
  });

  it('Should <tbody> has three children <tr>', () => {
    fixture.detectChanges();
    const tbodyElement = fixture.nativeElement.querySelector('tbody');
    const trElements = tbodyElement.querySelectorAll('tr');
    expect(trElements.length).toBe(3);
  });

  it('Should display the correct number of brands and their counts', () => {
    fixture.detectChanges();
    const divElements = fixture.nativeElement.querySelectorAll('div');
    const pElements = fixture.nativeElement.querySelectorAll('p');
  
    expect(divElements.length).toBe(Object.keys(component.vehiculosMarca).length);
    expect(pElements.length).toBe(Object.keys(component.vehiculosMarca).length);
  
    for (let i = 0; i < pElements.length; i++) {
      const marca = Object.keys(component.vehiculosMarca)[i];
      const cantidad = component.vehiculosMarca[marca];
      expect(pElements[i].textContent).toContain(`Total ${marca}: ${cantidad}`);
    }
  });
});
