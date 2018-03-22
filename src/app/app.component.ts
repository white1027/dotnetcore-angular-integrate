import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  message = '';
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.appService.getValue('6').subscribe(message => this.message = message);
  }
}
