import { Component, OnInit } from '@angular/core';

import{EquipoService} from '../../../service/equipo.service';
import { NgForm } from '@angular/forms';
import { Equipo } from 'src/app/models/equipo';
import { EquiposListComponent } from '../equipos-list/equipos-list.component';




@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipoList: Equipo[];
  Lista: Equipo[];

  constructor(public equipoService: EquipoService) { }

  ngOnInit(): void {
    this.equipoService.getEquipos();
  }


  onSubmit(equipoForm: NgForm){
    
    if(equipoForm.value.$key==null)
    
      this.equipoService.insertEquipo(equipoForm.value)
    else
      this.equipoService.updateEquipo(equipoForm.value);
      
    this.resetForm(equipoForm)
  }

  resetForm(equipoForm?: NgForm){
    if(equipoForm!=null)
      equipoForm.reset();
      this.equipoService.selectEquipo = new Equipo();
  }
  prueba(){
    this.equipoService.getEquipos()
    .snapshotChanges()
    .subscribe(item=>{
      this.equipoList=[];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.equipoList.push(x as Equipo)
        
      })
      var j=0

      for (var i = 0; i < this.equipoList.length; i++) {
        
        this.equipoList[j].numeroPartido = i;
        this.equipoList[j+1].numeroPartido = i;
        alert(this.equipoList[j].numeroGoles)
        alert(this.equipoList[j+1].numeroGoles)
        if(this.equipoList[j].numeroGoles=this.equipoList[j+1].numeroGoles){
          this.equipoList[j].puntos = 1+this.equipoList[j].puntos;
          this.equipoList[j+1].puntos = 1+this.equipoList[j+1].puntos;

        }
        
        if(this.equipoList[j].numeroGoles>this.equipoList[j+1].numeroGoles){
          this.equipoList[j].puntos = 3;
          this.equipoList[j+1].puntos = 0;

        }else{

          this.equipoList[j].puntos = 0 ;
          this.equipoList[j+1].puntos = 3 ;

        }
        
        j=j+2;

        
      }
      
      

    })
    
    
    
    for (var i = 0; i < this.equipoList.length; i++) {
      this.equipoService.updateResultados(this.equipoList[i]);
    }

    
    



    
  }
  limpiar(){
    for (var i = 0; i < this.equipoList.length; i++) {

      this.equipoService.deleteEquipo(this.equipoList[i].$key);
    }

  }



}
