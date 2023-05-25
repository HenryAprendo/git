import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const PI = 3.1416;
    const result = PI * 10;
    console.log(result);
  }

  title = 'practice-two';


}
