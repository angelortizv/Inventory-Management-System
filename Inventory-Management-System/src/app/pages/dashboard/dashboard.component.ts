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
  public dataDisplay:any = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.getJSON().subscribe((result)=> {
      console.log(result);
      this.dataDisplay = result;
    })
  }

  public getJSON(): Observable<any> {
    return this._http.get(this._jsonURL);
  }

}
