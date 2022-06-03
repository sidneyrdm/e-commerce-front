import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  de: number = 0;
  ate: number = 0;
  number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  valorAlterado(){
    console.log('valor De.: '+this.de);
    console.log('valor Ate.: '+this.ate);
  }

}
