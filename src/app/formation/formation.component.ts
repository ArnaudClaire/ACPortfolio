import { Component } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {

  adBDD:boolean = false;
  devAPI:boolean = false;
  desktop:boolean= false;
  devOps:boolean= false;
  devMOBILE:boolean= false;
  management:boolean= false;
  NoSql:boolean= false;
  devWEB:boolean= false;
  free:boolean= false;
  CoAdv:boolean= false;
  meduza:boolean= false;
  masterClass:boolean= false;

  otherFalse(){
    this.adBDD = false;
    this.devAPI = false;
    this.desktop = false;
    this.devOps = false;
    this.devMOBILE = false;
    this.management = false;
    this.NoSql = false;
    this.devWEB = false;
    this.free = false;
    this.CoAdv = false;
    this.meduza = false;
    this.masterClass = false;
  }
}
