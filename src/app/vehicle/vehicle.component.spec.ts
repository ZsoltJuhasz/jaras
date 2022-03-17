import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleComponent } from './vehicle.component';
import { By } from '@angular/platform-browser';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A hozzáadás gomb létezése', () => {
    const gomb = fixture.debugElement.queryAll(By.css('button'));
    expect(gomb.length).toBe(4);
  });

  it('A táblázat létezik', () => {
    const gomb = fixture.debugElement.queryAll(By.css('table'));
    expect(gomb.length).toBe(1);
  });

  it('Az #addVehicleModal azonosítójú div elem létezik', () => {
    const gomb = fixture.debugElement.queryAll(By.css('#addVehicleModal'));
    expect(gomb.length).toBe(1);
  });

});

