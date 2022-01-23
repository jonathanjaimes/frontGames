import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIngresarComponent } from './login-ingresar.component';

describe('LoginIngresarComponent', () => {
  let component: LoginIngresarComponent;
  let fixture: ComponentFixture<LoginIngresarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginIngresarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
