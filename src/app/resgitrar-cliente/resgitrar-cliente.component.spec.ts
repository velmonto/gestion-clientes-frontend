import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgitrarClienteComponent } from './resgitrar-cliente.component';

describe('ResgitrarClienteComponent', () => {
  let component: ResgitrarClienteComponent;
  let fixture: ComponentFixture<ResgitrarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResgitrarClienteComponent]
    });
    fixture = TestBed.createComponent(ResgitrarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
