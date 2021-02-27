import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommunicationService } from 'app/communication/communication.service';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{


  public currentCategory = localStorage.getItem('productCategory');
  public currentProduct = [];
  public dataDisplay:any = [];

  constructor(private CS: CommunicationService, private modal:NgbModal) { }

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
        return this.CS.getAllData();
      case 'PCB´s y Breadboard':
        return this.CS.getCat001();
      case 'Conectores y Terminales':
        return this.CS.getCat002();
      case 'Dispositivos Opticos':
        return this.CS.getCat003();
      case 'Semiconductores':
        return this.CS.getCat004();
      case 'Componentes Pasivos':
        return this.CS.getCat005();
      case 'Transformadores y Adaptadores':
        return this.CS.getCat006();
      case 'Equipo y Herramienta':
        return this.CS.getCat007();
      default:
        return this.CS.getAllData();
    }
  }

  private openModal(content){
    this.modal.open(content, {size:'lg', centered:true})
  }

  public setCurrentProduct(data){
    this.currentProduct = data;
    //console.log(this.currentProduct);
  }


}
