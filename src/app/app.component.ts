import { Component, OnInit } from '@angular/core';
import { Apli } from './apli';
import { ApliService } from './apli.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApliService]
})

export class AppComponent implements OnInit{
  titulo = 'Mi aplicación';
  aplis : Apli[];
  apli: Apli;
  constructor(private apliService: ApliService) { }

  getAplis(): void {
    //this.aplis = this.apliService.getAplis();
    this.apliService.getAplis().then (aplis => this.aplis = aplis);
  }

  ngOnInit():void{
    this.getAplis();
  }
  seleccionar(item: Apli): void {
    this.apli = item;
  }
}
