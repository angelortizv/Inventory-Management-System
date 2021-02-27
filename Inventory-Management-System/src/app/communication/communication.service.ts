import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CommunicationService {

  constructor(private http: HttpClient, private router: Router) { }

  public getAllData(){
    return this.http.get<any[]>("https://sheet.best/api/sheets/30fc5b2d-9982-4c0b-bee9-e6cb2e8ca01e");
  }

  public getCat001(){
    return this.http.get<any[]>("https://sheet.best/api/sheets/30fc5b2d-9982-4c0b-bee9-e6cb2e8ca01e/search?category=PCB's y Breadboard");
  }

  public getCat002(){
    return this.http.get<any[]>("https://sheet.best/api/sheets/30fc5b2d-9982-4c0b-bee9-e6cb2e8ca01e/search?category=Conectores y Terminales");
  }

  public getCat003(){
    return this.http.get<any[]>("https://sheet.best/api/sheets/30fc5b2d-9982-4c0b-bee9-e6cb2e8ca01e/search?category=Dispositivos Opticos");
  }

  public getCat004(){
    return this.http.get<any[]>("https://sheet.best/api/sheets/30fc5b2d-9982-4c0b-bee9-e6cb2e8ca01e/search?category=Semiconductor");
  }

  public getCat005(){
    return this.http.get<any[]>("https://sheet.best/api/sheets/30fc5b2d-9982-4c0b-bee9-e6cb2e8ca01e/search?category=Componentes Pasivos");
  }

  public getCat006(){
    return this.http.get<any[]>("https://sheet.best/api/sheets/30fc5b2d-9982-4c0b-bee9-e6cb2e8ca01e/search?category=Transformadores y Adaptadores");
  }

  public getCat007(){
    return this.http.get<any[]>("https://sheet.best/api/sheets/30fc5b2d-9982-4c0b-bee9-e6cb2e8ca01e/search?category=Equipo y Herramienta");
  }
}
