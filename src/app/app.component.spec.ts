import { TestBed, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';

describe('Testing for component root', () => {

  let component: ComponentFixture<AppComponent>;
  let fixture: DebugElement;

  beforeEach(async () => {
     await TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
    .compileComponents();


  });

});
