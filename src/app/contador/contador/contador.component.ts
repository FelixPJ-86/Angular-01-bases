import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  constructor() { }
  
  public  titulo: string = 'Contador App';
  numero:number =10;
  
  base:number =5;
  
  sumar(){
  
    this.numero++;
  }
  restar (){
    this.numero--;
  }
  
  acumular(valor:number){
  this.numero+=valor;
  
  }
  ngOnInit(): void {
  }

}
