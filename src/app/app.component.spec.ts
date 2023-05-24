import { TestBed, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('Testing for component main', () => {

  let component: ComponentFixture<AppComponent>;

  beforeEach(async () => {
     await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
    .compileComponents();


  });

});
