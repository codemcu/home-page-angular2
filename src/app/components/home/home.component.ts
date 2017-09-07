import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name:string;
	public jobTitle:string;

  constructor() {
    this.name = "Mauricio Correa";
	  this.jobTitle = "Front-end developer";
  }

  ngOnInit() {
  }

}
