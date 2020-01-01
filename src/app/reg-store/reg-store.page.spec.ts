import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegStorePage } from './reg-store.page';

describe('RegStorePage', () => {
  let component: RegStorePage;
  let fixture: ComponentFixture<RegStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegStorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
