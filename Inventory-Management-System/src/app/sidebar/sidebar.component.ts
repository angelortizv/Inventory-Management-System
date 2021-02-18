import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Todos los elementos',             icon:'',       class: '' },
    { path: '/dashboard',     title: 'PCB´s y Breadboard',              icon:'',       class: '' },
    { path: '/dashboard',     title: 'Conectores y Terminales',         icon:'',       class: '' },
    { path: '/dashboard',     title: 'Dispositivos Opticos',            icon:'',       class: '' },
    { path: '/dashboard',     title: 'Semiconductores',                 icon:'',       class: '' },
    { path: '/dashboard',     title: 'Componentes Pasivos',             icon:'',       class: '' },
    { path: '/dashboard',     title: 'Transformadores y Adaptadores',   icon:'',       class: '' },
    { path: '/dashboard',     title: 'Equipo y Herramienta',            icon:'',       class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    public setCategory(item){
      //console.log(item);
      localStorage.setItem('productCategory',item);
      location.reload();
    }
}
