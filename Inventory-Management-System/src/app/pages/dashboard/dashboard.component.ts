import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  private _jsonURL = 'assets/data/csvjson.json';
  private _CAT001 = 'assets/data/pcbsbreadboard.json';
  private _CAT002 = 'assets/data/conectoresyterminales.json'
  private _CAT003 = 'assets/data/dispositivosopticos.json'
  private _CAT004 = 'assets/data/semiconductores.json'
  private _CAT005 = 'assets/data/componentespasivos.json'
  private _CAT006 = 'assets/data/transformadoresyadaptadores.json'
  private _CAT007 = 'assets/data/equipoyherramienta.json'


  public currentCategory = localStorage.getItem('productCategory');
  public dataDisplay:any = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.getJSON().subscribe((result)=> {
      console.log(localStorage.getItem('productCategory'));
      //console.log(result);
      this.dataDisplay = result;
    })

  }

  public getJSON(): Observable<any> {
    switch (this.currentCategory) {
      case 'Todos los elementos':
        return this._http.get(this._jsonURL);
      case 'PCB´s y Breadboard':
        return this._http.get(this._CAT001);
      case 'Conectores y Terminales':
        return this._http.get(this._CAT002);
      case 'Dispositivos Opticos':
        return this._http.get(this._CAT003);
      case 'Semiconductores':
        return this._http.get(this._CAT004);
      case 'Componentes Pasivos':
        return this._http.get(this._CAT005);
      case 'Transformadores y Adaptadores':
        return this._http.get(this._CAT006);
      case 'Equipo y Herramienta':
        return this._http.get(this._CAT007);
      default:
        return this._http.get(this._jsonURL);
    }

  }

}
