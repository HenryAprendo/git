import { TestBed, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Testing for component root', () => {

  let component: ComponentFixture<AppComponent>;

  beforeEach(async () => {
     await TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
    .compileComponents();


  });

});
